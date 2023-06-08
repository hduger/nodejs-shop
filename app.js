const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
//init commit
const app = express();

app.set('view engine', 'ejs');

app.set('views', 'views');

const adminData = require('./routes/admin');

const userRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);

app.use(userRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found', path: '' });
});

app.listen(3000);
