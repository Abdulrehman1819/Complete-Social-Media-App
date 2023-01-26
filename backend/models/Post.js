const mongoose=require("mongoose");
const PostSchema=new mongoose.Schema({
    caption:{
        type:String
    },
    image:{
        public_id:String,
        url:String
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
createat:{
    type:Date,
    default:Date.now
},
likes:[
{
    
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
   
}
],
comments:[
    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        },
        comment:{
type:String,
required:true
        },
    }
],
blocked:[
   {
   block:{
    type:Boolean,
   },
   
    userwhoblock:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
   }
],
reported:[
    {
     reported:{
        type:Boolean,
     },
      
     userwhoreported:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"User",
     }
    }
 ],
 hidden:[
    {
        hidden:{
            type:Boolean,
        },
     
     userwhohide:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"User",
     }
    }
 ]
});
module.exports=mongoose.model("Post",PostSchema);