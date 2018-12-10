const env = require('./env-config')

module.exports = {
  env: {
    development: {
      presets: ["next/babel"],
      plugins: [
        ["transform-define", env]
      ], 
    },
    production: {
      presets: [
        "next/babel"
      ],
      plugins: [
        [
          "transform-define",
          env
        ]
      ]
    },
    test: {
      presets: [
        [
          env,
          {
            "modules": "commonjs"
          }
        ],
        "next/babel"
      ]
    }
  }
}