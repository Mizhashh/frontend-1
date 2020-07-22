const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.DEV_PORT || 8800

const aResponse = ['Advertising resp 1', null, 'Advertising resp 2', undefined, 'Advertising resp 3'];
const bResponse = aResponse.map(resp => resp ? `<Secondary> ${resp}` : resp);
const randomizeResponse = (RespArray) => RespArray[Math.floor(Math.random() * RespArray.length)];

app.use('/', express.static(path.resolve(__dirname, 'static')))

app.use(express.json({ extended: true }))


app.get('/api/a', (req, res) => {
  res.status(200).json({
    content: randomizeResponse(aResponse)
  })
})

app.get('/api/b', (req, res) => {
  res.status(200).json({
    content: randomizeResponse(bResponse)
  })
})

app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))

