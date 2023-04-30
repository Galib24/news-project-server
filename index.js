const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors');


const categories = require('./data/categories.json')
const news = require('./data/news.json')
app.use(cors());

app.get('/', (req, res) => {
  res.send('project is running')
})

// data
app.get('/categories', (req, res) => {
  res.send(categories);
})

app.get('/categories/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id === 0) {
    res.send(news)
  }
  else {
    const categoryNews = news.filter(n => parseInt(n.category_id) === id);
    res.send(categoryNews)
  }

})

app.get('/news', (req, res) => {
  // res.send(news);
  res.send(news)
})

// news section
app.get('/news/:id', (req, res) => {
  // res.send(news);
  const id = req.params.id;
  const selectedNews = news.find(n => n._id === id);
  res.send(selectedNews)
})

app.listen(port, () => {
  console.log(`project is running ${port}`)
})