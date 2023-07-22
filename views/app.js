const cookieParser = require("cookie-parser");

const bodyParser = require("body-parser");
const express = require("express");

const expressLayouts = require('express-ejs-layouts');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressLayouts);
app.set('view engine', 'ejs');



const PORT = process.env.PORT || 1026;


app.engine("html", require("ejs").renderFile);
app.use(express.static("static"));
app.use(express.static("veiws"));

app.get("/", function (req, res) {
    res.render("index.html");
  });
app.use('/checkout',require('./routes/razorpay'));

app.get("/watch", (req, res) => {
//Read firebase 
  res.render("watch/watch.html");
});
app.get("/login", (req, res) => {
  res.render("login.html")
  });
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
}); 