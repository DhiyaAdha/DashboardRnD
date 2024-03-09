const express = require ('express')
const app = express()
const port = 5100

// Log Middleware
// import morgan from 'morgan'

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`server runing ... ${port}`)
})