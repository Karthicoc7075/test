const express = require('express');
const router = express.Router();
const {uploadImage,uploadUpdateImage,allowedFormats} = require('../utils/multer')
const { createPost,  getPost, updatePost, deletePost, getAllPost, getSinglePost, getUserPost, likePost,getPostLikes,createPostComment,getPostComments,deletePostComment, postCommentLike, savedPost } = require('../controllers/post_controller');
const auth = require('../middleware/auth') 
 
router.post('/create',auth(),uploadImage(allowedFormats.IMAGE),createPost)
router.get('/getPosts', auth(), getAllPost)
router.get('/getPost/user/:userId', auth(), getUserPost)
router.get('/getPost/:postId', auth(), getSinglePost)
router.put('/updatePost/:postId', auth(), uploadUpdateImage(allowedFormats.IMAGE), updatePost)
router.delete('/deletePost/:postId', auth(), deletePost)
router.post('/likePost/:postId', auth(), likePost)
router.get('/getPostLikes/:postId', auth(), getPostLikes)
router.post('/createPostComment/:postId', auth(), createPostComment)
router.get('/getPostComments/:postId', auth(), getPostComments)
router.delete('/deletePostComment/:commentId', auth(), deletePostComment)
router.post('/postCommentLike/:commentId', auth(), postCommentLike)
router.post('/savedPost/:postId', auth(), savedPost)

module.exports = router;