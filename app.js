const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('<p>Hello World</p>')
})
// app.get('/home', function (req, res) {
//     res.sendFile('C:\Users\9451k\OneDrive\Desktop\Khush\Backend\views\index.html' )
//   })
app.get('/about', function (req, res) {
    res.sendFile('./views/about.html',{root:__dirname} )
  })
  app.get('/about-us', function (req, res) {
    res.redirect('/about')
  })

  app.use((req, res)=>{
    res.status(404).sendFile('./views/404.html', {root:__dirname})
  })
app.listen(3000)