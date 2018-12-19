const express = require('express')
const next = require('next')
const LRUCache = require('lru-cache')
const postmark = require('postmark')
const bodyParser = require('body-parser')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const cookieParser = require('cookie-parser')
const csrf = require('csurf')

const csrfProtection = csrf({ cookie: true })

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 // 1hour
})

app.prepare()

  .then(() => {
    const server = express()
    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: true }))
    server.use(cookieParser())

    server.get('/', (req, res) => {
      renderAndCache(req, res, '/', req.query)
    })

    server.get('/all-blog-posts', (req, res) => {
      renderAndCache(req, res, '/articles', req.query)
    })

    server.get('/articles/:slug', (req, res) => {
      renderAndCache(req, res, '/article', { slug: req.params.slug })
    })

    server.get('/about-me', (req, res) => {
      const actualPage = '/about'
      renderAndCache(req, res, actualPage, req.query)
    })

    server.get('/contact-me', csrfProtection, (req, res) => {
      renderAndCache('send', { csrfToken: req.csrfToken() }, req, res, '/contact', req.query)
    })

    server.post('/contact-me', (req, res) => {
      let client = new postmark.ServerClient(`${process.env.SERVER_TOKEN}`)

      client.sendEmail(
        {
          From: req.body.From,
          To: req.body.To,
          Subject: req.body.Name,
          HtmlBody: req.body.HtmlBody,
          ReplyTo: req.body.ReplyTo
        }

      ).then(response => {
        console.log('Sending message')
        console.log(response.To)
        console.log(response.Message)
        console.log(res.statusCode)
        return res.sendStatus(200)
      }).catch(error => {
        console.log(error)
        return res.sendStatus(500)
      })
    })

    server.get('/callback', (req, res) => {
      renderAndCache(req, res, '/callback', req.query)
    })

    server.get('/my-projects', (req, res) => {
      renderAndCache(req, res, '/projects', req.query)
    })

    server.get('*', (req, res) => {
      handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })

function getCacheKey (req) {
  return `${req.url}`
}

async function renderAndCache (req, res, pagePath, queryParams) {
  const key = getCacheKey(req)

  if (ssrCache.has(key)) {
    res.setHeader('x-cache', 'HIT')
    res.send(ssrCache.get(key))
    return
  }

  try {
    const html = await app.renderToHTML(req, res, pagePath, queryParams)

    if (res.statusCode !== 200) {
      res.send(html)
      return
    }

    ssrCache.set(key, html)

    res.setHeader('x-cache', 'MISS')
    res.send(html)
  } catch (err) {
    app.renderError(err, req, res, pagePath, queryParams)
  }
}
