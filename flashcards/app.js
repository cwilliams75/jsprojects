const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: false }));
app.use(cookieParser());

app.set("view engine", "pug");

app.get("/", (_req, res) => {
  const name = req.cookie.username;
  if(name) {
    res.redirect("/");
  }else {
    res.redirect('/hello');
  }
});

// app.get("/cards", (_req, res) => {
//   res.render("card", { prompt: "Who is buried in grant's tomb" });
// });

// app.get("/hello", (_req, res) => {
//   res.render("hello");
// });
app.post("/hello", (_req, res) => {
  res.cookie("username", req.body.username);
  res.redirect("/");
});

app.post("/goodbye", (_req, res) => {
  res.clearCookie("username");
  res.redirect("/hello");
});


app.listen(3000, () => {
    console.log("The application is running on localhost:3000!")
});
