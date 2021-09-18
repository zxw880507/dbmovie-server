const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const cookieSession = require("cookie-session");
const port = process.env.PORT || 8000;
require("./src/db");

// express middleware
const { json, urlencoded } = express;
const { join } = require("path");

app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],
  })
);

app.use(cors());
app.use(json());

app.use(urlencoded({ extended: false }));
app.use(express.static(join(__dirname, "public")));

// api routes
const api = require("./src/routes/index");
app.use("/api", api);
//user routes
const user = require("./src/routes/user");
app.use("/user", user);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
