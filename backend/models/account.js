const { Schema, model } = require("mongoose");

const accountSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
Account = model("account", accountSchema);
module.exports = Account;
