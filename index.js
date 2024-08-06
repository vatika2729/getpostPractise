const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.listen(3000, () => {
    console.log('port listened on 3000')
})

app.get('/', (req, res) => {
    res.render('apple')
})

app.get('/apple', (req, res) => {
    res.send('apple');
})

app.post('/apple', (req, res) => {
    res.send('hurray its post')
})