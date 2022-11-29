const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  deleteReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

router.route("/").get(getAllThoughts).post(addThought);
//Our routes for getting, putting or deleting by id.
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought)
  .findOneAndUpdate(removeReaction);

router.route("/:thoughtId/reactions").post(addReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
