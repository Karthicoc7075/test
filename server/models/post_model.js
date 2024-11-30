const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    user:{type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    desc:{
        type:String,
        required:true   
    },
    image:{
        type:String,
    },
    video:{
        type:String,
    },
    likes:{
        type:Number,
        default:0
    },
    comments:{
        type:Number,
        default:0
    },
    views:{
        type:Number,
        default:0
    },
    saved:{
        type:Number,
        default:0
    },
    userSaved:{
        type:Boolean,
    },
    userLiked:{
        type:Boolean,
    },
    createdAt:{
        type:Date,
        default:new Date()
    },
    updatedAt:{
        type:Date,
        default:new Date()
    }
},
{
    timestamps:true
}
)

const postsModel = mongoose.model('posts',postSchema);

module.exports = postsModel;