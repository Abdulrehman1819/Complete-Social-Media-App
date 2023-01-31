const mongoose=require('mongoose');
const chatModel=new mongoose.Schema({
    chatname:{type:String,trim:true},
    isgroupchat:{type:Boolean,default:false},
    users:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    latestmessages:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message"
    },
    groupAdmin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    
},
{
    timestamps:true
}
)
module.exports=mongoose.model("Chat",chatModel);