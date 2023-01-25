const express=require("express");
const { createpost, likeAndunlike, deletepost,getfollowingposts, addcomments } = require("../controllers/post");
const {isAuthenticated}=require("../middlewares/auth")
const router=express.Router();
router.route("/post/upload").post(isAuthenticated,createpost);
router.route("/post/:id").get(isAuthenticated,likeAndunlike).delete(isAuthenticated,deletepost);
router.route('/posts').get(isAuthenticated,getfollowingposts)
router.route("/post/comment/:id").post(isAuthenticated,addcomments);
module.exports=router;