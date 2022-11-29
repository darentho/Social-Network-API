const { Schema, model } = require("mongoose");
const moment = require("moment");

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "You must enter a valid email address"],
  },
  thoughts: [
    {
        type: Schema.Types.ObjectId,
        ref: "'
    }
  ]
});
