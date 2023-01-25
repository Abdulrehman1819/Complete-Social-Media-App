const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter a Name"]
    },
    avatar:{
        public_id:String,
        url:String
    },
    email:{
        type:String,
        required:[true,"Please Enter Email"],
        unique:[true,"Email Already Existed"]
    },
    password:{
        type:String,
        required:[true,"Please Enter Password"],
        minlength:[6,"Password must be atleast 6 characters"],
        select:false,
    },

    posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Post"
        }
    ],
    followers:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    following:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    blockedposts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Post"
        }
    ]
});
UserSchema.pre("save",async function(next){
    console.log(this.password);
    if(this.password && this.isModified("password")){
        console.log("User Schema",this.password);
    this.password=await bcrypt.hash(this.password,10);

    }
    
    next();
})
UserSchema.methods.matchPassword=async function(password){
    // console.log("Match Ps");
    // console.log(password);
    return await bcrypt.compare(password,this.password)
}   
UserSchema.methods.generatetoken=async function(_id){
    // return jwt.sign({_id:this._id},process.env.JWT_SECRET);
    console.log(_id);
        console.log("jwt");
}
module.exports=mongoose.model("User",UserSchema);