const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require("body-parser")
const clothing = require('./product')
const pg = require("pg");
const Pool = pg.Pool;


const app = express();

const connectionString = process.env.DATABASE_URL || 'postgresql://sim:pg123@localhost:5432/nandiz_clothing';

const pool = new Pool({
    connectionString
});



app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())


app.get("/", async function(req, res) {
    res.render("home", clothing);

});

app.get("/about", function(req, res) {
    res.render("about");

});

app.get("/products", function(req, res) {
    res.render("product");

});

app.get("/contact-us", function(req, res) {
    res.render("contact");

});

app.get("/sneakers", function(req, res) {
    res.render("sneaker");

});

app.get("/t-shirts", function(req, res) {
    res.render("t-shirt");

});

app.get("/jacket", function(req, res) {
    res.render("jackets");

});

app.get("/jeans", function(req, res) {
    res.render("jean");

});

app.get("/hand-bags", function(req, res) {
    res.render("bags");

});


const PORT = process.env.PORT || 2020;
app.listen(PORT, function() {

    console.log("App started at port:", PORT);
});