const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const routes = require('./controllers')
const hbs = exphbs.create({});
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.get('/', function (req,res){
    res.render('homepage'); 
});
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes)


  app.listen(PORT, () => console.log('Now listening'));
