const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "name must be provided"],
  },
  description: {
    type: String,
    require: [true, "name must be provided"],
  },
  status: {
    type: String,
    enum: ["Not Yet Started", "In  Progress", "Completed"],
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId, // refers to mongoose/mongodb ID that's created in the DB
    ref: "Client", // links clientId to db ID
  },
});

module.exports = mongoose.model("Project", ProjectSchema);
