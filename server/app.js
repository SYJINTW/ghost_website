const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const passport = require("passport");
require("./config/passport")(passport);

const app = express();

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connnect to mongoDB.");
  })
  .catch(err => {
    console.log(err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const authRoute = require("./routes").authRoute;
const Wishing = require("./routes").wishingRoute;
const itemRoute = require("./routes").itemRoute;
const feedbackRoute = require("./routes").feedbackRoute;
app.use("/api/auth", authRoute);
app.use("/api/wishing", Wishing);
// passport.authenticate("jwt", { session: false })
app.use("/api/item", itemRoute);
app.use("/api/feedback", feedbackRoute);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
