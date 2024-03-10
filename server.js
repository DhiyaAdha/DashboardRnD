//1. Inisiasi
const express = require ('express')
const app = express()
const port = process.env.PORT || 3000

/**
 * helpers handlebars express
 * pengguanan format handlebars
 * pengurutan nomor
 */
// 2. Set up ejs as the template engine
const path = require('path');
// app.use(express.static(__dirname + "/public"))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// app.use(express.static(path.join(__dirname, 'public')));
// app.set('views', path.join(__dirname, 'views'));

// Log Middleware
// import morgan from 'morgan'

const customStyleRouter = require('./routes/customStyle.js');
app.use('/', customStyleRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`server runing http://127.0.0.1:${port}`)
})