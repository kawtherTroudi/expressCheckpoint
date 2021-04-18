const express = require("express");
const fs = require("fs");
const app = express();
const Home = require("./routes/Home_page")
const Contact = require("./routes/Contact_us")
const Service = require("./routes/Our_Services")
var date = new Date()

const PORT = process.env.PORT || 8000;

app.use(function (req, res, next) {
  //console.log('Time:', date.getHours())
if ((date.getDay() !== 0 || date.getDay()== 6) || (date.getHours() < 9 || date.getHours() > 17)){
res.send('Out Of Service')
}
  next()
})

app.use("/", Home);
app.use(express.static("public"))
app.use("/Contact_us", Contact);
app.use("/Our_services", Service);

app.set("view engine","ejs");

app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`Server is runnning on port ${PORT}`)
);