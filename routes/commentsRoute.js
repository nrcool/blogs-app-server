const express = require("express");
const router = express.Router();
const {getComments,createComment,updateCommentPut,updateCommentPatch,deleteComment,getSingleComment} = require("../controllers/commentsControllers")
const { roleCheck } = require("../middlewares/RoleMiddleware");
/* const data = fs.readFileSync(path.resolve(__dirname, "../models/db.json"),"utf-8")

console.log(JSON.parse(data))
const users = JSON.parse(data).users; */

// CRUD operation
//Create
//Read
//Update
//Delete

router.route("/").get(getComments).post(createComment)
router.route("/:id").put(roleCheck,updateCommentPut).patch(roleCheck,updateCommentPatch).delete(roleCheck,deleteComment).get(getSingleComment)

/* //Read Comments
//endpoint /Comments
router.get("/", getComments );

//Create new Comment
router.post("/", createComment );

//Request method PUT (replacing existing resource) and PATCH (updating existing resource)
//Update Comment
router.put("/:id", updateCommentPut);

//Patch
router.patch("/:id", updateCommentPatch);

//Delete request
//delete Comment
router.delete("/:id", deleteComment);

//Read Comment
//endpoint /Comments/:id
router.get("/:id", getSingleComment); */

module.exports = router;
