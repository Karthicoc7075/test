const mongoose = require("mongoose")

const postCommentSchema = new mongoose.Schema({
    user:{type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    post:{type: mongoose.Schema.Types.ObjectId, ref: 'posts'},
    message:{
        type:String,
        required:true
    },
    likes:{
        type:Array,
        default:[]
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
},
{
    timestamps:true
}
)


module.exports = mongoose.model('post_comments',postCommentSchema)