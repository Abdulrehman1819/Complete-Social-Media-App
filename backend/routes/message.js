const express=require("express");
const{sendmessage,getmessages}=require("../controllers/Message")
const router=express.Router();
router.route('/sendmessage').post(sendmessage)
router.route('/getmessages/:conversationId').get(getmessages)
module.exports=router;   