const { Schmema, Model, Types } = require("mongoose");
const moment = require("moment");

const ReactionSchema = new Schema({
  reactionId: {
    type: Schema.types.ObjectId,
    default: () => new Types.ObjectId(),
  },
});
