import express from 'express'
import bodyParser from 'body-parser'

import toURI from '../lib/spotify-link-to-uri.mjs'

const app = express()

app.get('*', (req, res) => {
  if (!req.query.link) return res.sendStatus(400)
  res.end(toURI(req.query.link))
})

app.post('*', bodyParser.text(), (req, res) => {
  if (typeof req.body !== 'string') return res.sendStatus(415)
  res.end(
    req.body
      .split('\n')
      .map(toURI)
      .join('\n')
  )
})

app.listen(3000)
