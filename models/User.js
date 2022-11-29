const { Schema, model } = require("mongoose");
const moment = require("moment");

const UserSchema = new Schema(
  {
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
      //we're using an email validation as well as a prompt
      match: [/.+@.+\..+/, "You must enter a valid email address"],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    //Here's where we're generating the friends array and referencing it to User.
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

UserSchema.pre("remove", function (next) {
  Thought.remove({ username: this.username }).exec();
  next();
});

const User = model("User", UserSchema);

module.exports = User;
