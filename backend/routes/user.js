const express=require("express");
const { register,login, followUser, logout, BlockedPosts,Reportedposts,Hideposts  } = require("../controllers/user");
const {isAuthenticated}=require("../middlewares/auth")
const router=express.Router();
router.route("/register").post(register)
router.route("/login").post(login)
router.route("/follow/:id").get(isAuthenticated,followUser)
router.route("/logout").get(logout)
router.route("/blockpost/:id").get(isAuthenticated,BlockedPosts)
router.route("/reportpost/:id").get(isAuthenticated,Reportedposts)
router.route("/reportpost/:id").get(isAuthenticated,Hideposts)
module.exports=router;