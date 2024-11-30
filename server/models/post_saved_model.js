const mongoose = require('mongoose');


const postSavedSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user',
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


module.exports = mongoose.model('post_saved',postSavedSchema);
