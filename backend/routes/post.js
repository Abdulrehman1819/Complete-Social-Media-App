const express=require("express");
const { createpost, likeAndunlike, deletepost,getfollowingposts } = require("../controllers/post");
const {isAuthenticated}=require("../middlewares/auth")
const router=express.Router();
router.route("/post/upload").post(isAuthenticated,createpost);
router.route("/post/:id").get(isAuthenticated,likeAndunlike).delete(isAuthenticated,deletepost);
router.route('/posts').get(isAuthenticated,getfollowingposts)
module.exports=router;