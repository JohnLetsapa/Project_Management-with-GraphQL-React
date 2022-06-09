const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "name must be provided"],
  },
  email: {
    type: String,
    require: [true, "name must be provided"],
    unique: true,
  },
  phone: {
    type: String,
    require: [true, "name must be provided"],
  },
});

module.exports = mongoose.model("Client", ClientSchema);
