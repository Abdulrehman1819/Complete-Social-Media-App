const Post=require("../models/Post")
const User=require("../models/Users")
exports.createpost= async(req,res)=>{
try{
const newpostData={
    caption:req.body.caption,
    image:{
        public_id:"req.body.public_id",
        url:"req.body.url"
    },
    owner:req.user._id
}   
console.log(newpostData);
const newPost=await Post.create(newpostData);
const user=await User.findById(req.user._id);
  
user.posts.push(newPost._id);
 user.save();
res.status(201).json({
    success:true,
    post:newPost,
})
}catch(e){

res.status(500).json({
    success:false,
    message:e.message
})
}
}
  exports.deletepost=async(req,res)=>{
    try{
        const post=await Post.findById(req.params.id);
       
        const user=await User.findById(req.user._id);
        
        const index=user.posts.indexOf(req.params.id);
        user.posts.splice(index,1);
        console.log(user);  
        user.save();
        if(!post){
            return res.status(404).json({
                success:"false",
                message:"Post Not Found"
            })
        }
        if(post.owner.toString()!==req.user._id.toString()){
            return res.status(401).json({
                success:false,
                message:"Unauthorized"
            })
        }
        post.remove();
        res.status(200).json({
            success:true,
            message:"Post Deleted"
        })
    }
    catch(e){

    }
  }
exports.likeAndunlike=async(req,res)=>{
    try{
const post=await Post.findById(req.params.id);
if(!post){
    return res.status(404).json({
        success:"false",
        message:"Post Not Found"
    })
}

if(post.likes.includes(req.user._id)){
const index=post.likes.indexOf(req.user._id);
post.likes.splice(index,1);
post.save();    
return res.status(200).json({
    success:true,
    message:"Post Unliked"
})
}
else{
    post.likes.push(req.user._id);
post.save();
    return res.status(200).json({
        success:true,
        message:"Post liked"
    })
}
    }
    catch(e){
        res.status(500).json({
            success:false,
            message:e.message
        })
    }
}
exports.getfollowingposts=async(req,res)=>{
    try{
const user=await User.findById(req.user._id);
const posts=await Post.find({
    owner:{
        $in:user.following
    }
});

res.status(200).json({
    success:true,
  posts,
})
    }
    catch(e){
res.status(500).json({
    success:false,
    message:e.message
})
    }
}
exports.addcomments=async(req,res)=>{
    try{


        const post=await Post.findById(req.params.id);
console.log(post)
if(!post){
    return res.status(400).json({
        success:false,
        message:"Post Not Found"
    })
}
let commentexists=-1
post.comments.forEach((item,index)=>{
    if(item.user.toString()=== req.user._id.toString()){
        commentexists=index;
    }
})
if(commentexists!== -1)
{
post.comments[commentexists].comment=req.body.comment;
post .save();
return res.status(200).json({
    success:true,
    message:"Comment Updated"
})
}
else{
    post.comments.push({
        user:req.user._id,
        comment:req.body.comment
    })
    post.save();
    return res.status(200).json({
        success:true,
        message:"Comment Added"
    })
}
    }
    catch(e){
res.status(500).json({
    success:false,
    message:e.message
})
    }
}