const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
//init commit
const app = express();

app.set('view engine', 'ejs');

app.set('views', 'views');

const adminRoutes = require('./routes/admin');

const userRoutes = require('./routes/shop');

const notFoundController = require('./controllers/404');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);

app.use(userRoutes);

app.use(notFoundController.notFound);

app.listen(3000);
