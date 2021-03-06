const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('./dist'))

app.get('*', (req, res) => {
  res.sendFile(path.resolve('./dist/index.html'))
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`App running ${port}`))
