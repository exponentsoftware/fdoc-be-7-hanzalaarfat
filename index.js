const express = require("express");
const db = require("./Models");
const dotenv = require("dotenv");
dotenv.config();
db.sequelize.sync();
const todoRoute = require("./router/todorouter");
const userRoute = require("./router/userRouter");
// const adminRoute = require("./router/adminRoute");
// const likeRoute = require("./router/likeRouter");

const app = express();

app.use(express.json());

// app.get("/", function (req, res) {
//   res.send(" <h1> home Page </h1>");
//   // res.render("home");
// });

app.use("/todo", todoRoute);

app.use("/user", userRoute);
// app.use("/admin", adminRoute);
// app.use("/user", likeRoute);

// console.log(process.env.MONGO_DB_URI);
// DB conection

app.listen(3000, () => {
  console.log("Server is up and running at the port 3000");
});
