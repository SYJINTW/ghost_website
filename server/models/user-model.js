const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 100,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 1024,
  },
  role: {
    type: String,
    required: true,
    enum: ["admin", "client"],
    default: "client",
  },
});

userSchema.methods.isClient = function () {
  return this.role === "client";
};

userSchema.methods.isAdmin = function () {
  return this.role === "admin";
};

userSchema.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
  } else {
    return next();
  }
});

userSchema.methods.comparePassword = function (password, callback) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) {
      return callback(err, isMatch);
    } else {
      callback(null, isMatch);
    }
  });
};

module.exports = mongoose.model("User", userSchema);
