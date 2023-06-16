const express = require('express')
const cors = require('cors')
const {json} = require('express')
const app = express()
const port = 3000


app.use(cors())
app.use(json())

app.get('/', (req, res) => {
  res.status(200).json({
    name: 'John Doe',
    age: 91
  })
})

app.listen(port, '', () => {
  console.log(`Example app listening on port ${port}`)
})