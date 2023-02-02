const User=require("../models/Users")
const Message=require("../models/Message")
const Chat=require("../models/Chat")
exports.newchat=(async(req,res)=>{
    const newChat = new Chat({
        members: [req.body.senderId, req.body.receiverId],
      });
    
      try {
        const savedchat = await newChat.save();
        res.status(200).json(savedchat);
      } catch (err) {
        res.status(500).json(err);
      }
})
exports.getchat=(async(req,res)=>{
    try {
        const chat = await Chat.find({
          members: { $in: [req.params.userId] },
        });
        res.status(200).json(chat);
      } catch (err) {
        res.status(500).json(err);
      }
})
exports.gettwouserschat=async(req,res)=>{
    try {
        const chat = await Chat.findOne({
          members: { $all: [req.params.firstUserId, req.params.secondUserId] },
        });
        res.status(200).json(chat)
      } catch (err) {
        res.status(500).json(err);
      }
}