
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session')
const routes = require('./controllers/')
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3005;


const sess = {
  secret: 'place holder',
  cookie: {},
  resave: false,
  saveUninitialized: true,
};

app.use(session(sess));

const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log('Now listening'));
