const express = require('express');
const path = require('path');

// express app
const app = express();

// registering view engines
app.set('view engine', 'ejs'); // it'll look inside the views folder by default

// listening for requests
app.listen(3000);

// index
app.get('/', (req, res) => {
    const blogs = [
        {title: 'blog1', snippet: 'Lorem Ipsum Lorem Ipsum'},
        {title: 'blog2', snippet: 'Lorem Ipsum Lorem Ipsum'},
        {title: 'blog3', snippet: 'Lorem Ipsum Lorem Ipsum'}
    ];
    res.render('index', { title: 'Home', blogs: blogs });
    var i = req.url;
    console.log(i);
});

// about
app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
    var i = req.url;
    console.log(i);
});

// create blog
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create' });
    var i = req.url;
    console.log(i);
});

// page not found
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
    var i = req.url;
    console.log(i);
});