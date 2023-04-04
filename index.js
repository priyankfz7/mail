const express = require("express");
const nodemailer = require("nodemailer");

const app = express();

let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "priyank764fz7@gmail.com",
    pass: "hjkifjqbrlzvsyes",
  },
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/mail", (req, res) => {
  let del = {
    from: "priyank764fz7@gmail.com",
    to: "priyank764fz7@gmail.com",
    subject: "my name is priyank",
    text: `hello`,
  };

  mailTransporter.sendMail(del, (err) => {
    if (err) {
      console.log(err);
      res.send("error");
    } else {
      console.log("email has sent");
    }
  });
  res.send("email sent");
});

app.listen(8080, () => {
  console.log("running");
});
