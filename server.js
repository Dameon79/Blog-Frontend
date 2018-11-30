const express = require('express')
const next = require('next')
const LRUCache = require('lru-cache')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 // 1hour
})

app.prepare()
  .then(() => {
    const server = express()

    server.get('/', (req, res) => {
      renderAndCache(req, res, '/', req.query)
    })

    server.get('/articles/', (req, res) => {
      renderAndCache(req, res, '/articles', req.query)
    })

    server.get('/article/:slug', (req, res) => {
      renderAndCache(req, res, '/article', { slug: req.params.slug })
    })

    server.get('/about', (req, res) => {
      renderAndCache(req, res, '/about', req.query)
    })

    server.get('/contact', (req, res) => {
      renderAndCache(req, res, '/contact', req.query)
    })

    server.get('/callback', (req, res) => {
      renderAndCache(req, res, '/callback', req.query)
    })

    server.get('/projects', (req, res) => {
      renderAndCache(req, res, '/projects', req.query)
    })

    server.get('*', (req, res) => {
      handle(req, res)
    })

    server.listen(port, (err) => {
      0
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
