const express = require("express");
const app = express();
const middleware = require("./middleware/general");
const users = require("./users.json");

app.use(express.json());

app.use(middleware.addDataToRequest);
app.use("/get", require("./routes/getUsers"));
app.use("/add", require("./routes/addUser"));
app.use("/delete", require("./routes/deleteUser"));
app.use("/update", require("./routes/updateUser"));

app.listen(6001, () => {
  console.log("server running");
});
