const mongoose  = require("mongoose");


const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    profileImage:{
        type:String,
        default: `profile-${Math.floor(Math.random()*13)}.jpg`
    },
    bio:{
        type:String,
        default:''
    },
    saved:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts'
    },
    workat:{
    type:String,
    default:''
},
    liveIn:{
        type:String,
        default:''
    },
    
    country: {
        type:String,
        default:''
    },
    link:{
        type:String,
        default:''
    },
    post:{
        type:[mongoose.Schema.Types.ObjectId, ] ,
        ref:'posts',
        default:[]
    },                
    followers:{
        type:[mongoose.Schema.Types.ObjectId, ],
        ref:"user",
        default:[]
    },
    following:{
        type:[mongoose.Schema.Types.ObjectId, ],
        ref:"user",
        default:[]
    }
},
{
    timestamps:true
}
);


const userModel = mongoose.model("user", userSchema);

module.exports = userModel;