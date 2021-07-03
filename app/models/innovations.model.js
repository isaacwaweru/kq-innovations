const mongoose = require("mongoose");
const crypto = require("crypto");
const uniqueValidator = require("mongoose-unique-validator");
const InnovationSchema = mongoose.Schema(
  {
    Innovation: { type: String },
    status: { type: Boolean },
    innvation: [],
  },
  {
    timestamps: true,
  }
);
UserSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Innovation", UserSchema);
