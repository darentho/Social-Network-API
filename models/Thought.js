const { Schema, model, Types } = require("mongoose");
const moment = require("moment");

const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 250,
      trime: true,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 250,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    //Here's we're obtaining the ReactionSchema.
    reactions: [ReactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    //we're omitting the id.
    id: false,
  }
);
//We're using the virtual and getters to get reactions into thoughts.
ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

//Here's we're creating the thought model.
const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
