const mongoose = require('mongoose');


const postLikeSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'users',
        required:true
    },
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts',
        required:true        
    },
   cretaedAt:{
       type:Date,
       default:new Date()
   }
}
)


module.exports = mongoose.model('post_likes',postLikeSchema);
