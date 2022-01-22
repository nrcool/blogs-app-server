const mongoose = require("mongoose");
const { Schema } = mongoose;

const CommentSchema = new Schema({
  commentText:{type:String,required:true},
  userid: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  blogid: { type: mongoose.Schema.Types.ObjectId, ref: "blogs" },
  replyComments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comments" }],
  replyCommentId:{ type: mongoose.Schema.Types.ObjectId, ref: "comments" }
});

const CommentsCollection = mongoose.model("comments", CommentSchema);

module.exports = CommentsCollection;
