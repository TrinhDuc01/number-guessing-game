const mongoose = require("mongoose");
const UsersSchema = mongoose.Schema({
  username: String,
});

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;
