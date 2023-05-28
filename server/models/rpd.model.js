const moongoose = require("mongoose");

var schema = new moongoose.Schema({ 
  event: {
    type: String,
    required: true,
  },
  behavior: {
    type: String,
    required: true,
  },
  emotion: {
    type: String,
    required: true,
  },
  automatic_thought: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  restructuring: {
    type: String,
    required: true,
  },
});

const db = moongoose.model("rpd", schema);

module.exports = db;
