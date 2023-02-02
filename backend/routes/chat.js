const express=require("express");
const{newchat, getchat, gettwouserschat}=require("../controllers/chatting")
const router=express.Router();
router.route('/chat').post(newchat);
router.route('/chat/:userid').get(getchat);
router.route('/chat/:firstUserId/:secondUserId').get(gettwouserschat)
module.exports=router;   