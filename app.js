require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const route = require("./router/contactRouter");

app = express();

// middleware array
const middleware = [
  morgan("dev"),
  express.urlencoded({ extended: true }),
  express.json(),
];
app.use(middleware);

app.use("/contacts", route);

app.get("/", (req, res) => {
  res.send("<h1> 404 Not Found</h1>");
});

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Database Connected Succesfully`);
    app.listen(process.env.PORT, () =>
      console.log(`Server is Running on PORT - ${process.env.PORT}`)
    );
  })
  .catch((e) => {
    console.log(e);
  });
