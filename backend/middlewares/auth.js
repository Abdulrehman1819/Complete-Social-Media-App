const User=require("../models/Users")
const jwt=require("jsonwebtoken")

exports.isAuthenticated=async (req,res,next)=>{
try{
    const {token}=req.cookies;
    if(!token){
        return res.status(401).json({
            message:"Please Log In First"
        });
    }
    const decoded=await jwt.verify(token,process.env.JWT_SECRET);
   
    req.user=await User.findById(decoded.user_id);
    
    next(); 
}
catch(e){
   
   
    res.status(500).json({
        success:false,
        message:e.message
    })}
}