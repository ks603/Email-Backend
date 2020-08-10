const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send({ hi: 'there' })
})

// localhost:5000
app.listen(5000)
