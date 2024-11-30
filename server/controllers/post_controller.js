const { postImagesContainerClient, postVideosContainerClient, profileImagesContainerClient } = require('../services/azure/azureService');
const postModel = require('../models/post_model')
const userModel = require('../models/user_model');
const postCommentModel = require('../models/post_comment_model');
const postLikeModel = require('../models/post_like_model')
const postSavedModel = require('../models/post_saved_model')
const generateSasToken = require('../utils/generateSasToken');
const customError = require('../errors');







const getAllPost = async (req, res, next) => {

    const page = req.query.page || 1
    const postLimit = 4
    const userId = req.userId
    try {
        const PostData = await postModel.find()
            .sort({ createdAt: -1 })
            .limit(postLimit)
            .skip((page - 1) * postLimit)
            .populate({ path: 'user', select: 'username profileImage _id' });
        console.log("post count:", page);

 

        const Posts = PostData.map(async (post) => {

            
            const results = await Promise.allSettled([
                generateSasToken(postImagesContainerClient.getBlobClient(post.image)),
                generateSasToken(profileImagesContainerClient.getBlobClient(post.user.profileImage)),
            ]);


            if (results[0].status === 'fulfilled') {
                post.image = results[0].value;
            }


            if (results[1].status === 'fulfilled') {
                post.user.profileImage = results[1].value;
            }
            const likeCount = await postLikeModel.find({ post: post._id }).countDocuments()
            post.likes = likeCount
            const userLiked = await postLikeModel.find({ post: post._id, user: userId })
            post.userLiked = userLiked.length > 0 ? true : false
            const savedCount = await postSavedModel.find({ post: post._id }).countDocuments()
            post.saved = savedCount
            const userSaved = await postSavedModel.find({ post: post._id, user: userId })
            post.userSaved = userSaved.length > 0 ? true : false
            const commentCount = await postCommentModel.find({ post: post._id }).countDocuments()
            post.comments = commentCount
            return post;
    
        });

        const optimizedPosts = await Promise.all(Posts);
        console.log("Posts sended!!");
        res.status(200).json(optimizedPosts)
    }
    catch (err) {
        next(err)
    }

}


const getSinglePost = async (req, res, next) => {
    console.log('get post');
    const { postId } = req.params
    const userId = req.userId

    try {
        const findPost = await postModel.findById(postId).populate({ path: 'user', select: 'username profileImage _id' })


        if (!findPost) {
            throw new customError.NotFoundError('Post not found!!');
        }

        const postBlobClient = postImagesContainerClient.getBlobClient(findPost.image);
        const postImageSasToken = await generateSasToken(postBlobClient);
        findPost.image = postImageSasToken

        const userBlobClient = profileImagesContainerClient.getBlobClient(findPost.user.profileImage);
        const profileImageSasToken = await generateSasToken(userBlobClient);
        findPost.user.profileImage = profileImageSasToken

        const likeCount = await postLikeModel.find({ post: findPost._id }).countDocuments()
        findPost.likes = likeCount
        const userLiked = await postLikeModel.find({ post: findPost._id, user: userId })
        findPost.userLiked = userLiked.length > 0 ? true : false
        const savedCount = await postSavedModel.find({ post: findPost._id }).countDocuments()
        findPost.saved = savedCount
        const userSaved = await postSavedModel.find({ post: findPost._id, user: userId })
        findPost.userSaved = userSaved.length > 0 ? true :false
        const commentCount = await postCommentModel.find({ post: findPost._id }).countDocuments()
        findPost.comments = commentCount
        res.status(200).json(findPost)
    } catch (err) {
        next(err)
    }
}


const getUserPost = async (req, res, next) => {
    const userId =  req.userId
    const postLimit = 5
    const query = req.query.page || 1

    try {
        const user = await userModel.find({ _id: userId })
        console.log(req.query);
        if (!user) {
            throw new customError.NotFoundError('User not found');
        }

        const PostData = await postModel.find({ user: userId })
            .sort({ createdAt: -1 })
            .limit(postLimit)
            .skip((query - 1) * postLimit)

        const Posts = PostData.map(async (post) => {

          
        const  postImageSasToken    =  await generateSasToken(postImagesContainerClient.getBlobClient(post.image))
            

            const likeCount = await postLikeModel.find({ post: post._id }).countDocuments()
            post.likes = likeCount
            const userLiked = await postLikeModel.find({ post: post._id, user: userId })
            post.userLiked = userLiked.length > 0 ? true : false
            const commentCount = await postCommentModel.find({ post: post._id }).countDocuments()
            post.comments = commentCount
            post.image = postImageSasToken

            return post;
        });

        const optimizedPosts = await Promise.all(Posts);
        console.log("Posts sended!!");
        res.status(200).json(optimizedPosts)
    } catch (err) {
        next(err);
    }
}


const createPost = async (req, res, next) => {
     const userId = req.userId 
     const {  desc } = req.body
    try {
        const blobName = `${Date.now()}-${req.file.originalname}`
        const blockBlobClient = postImagesContainerClient.getBlockBlobClient(blobName)
        await blockBlobClient.upload(req.file.buffer, req.file.size)

        const image = blobName

        

        const user = await userModel.findById(userId)
        if (!user) {
            throw new customError.NotFoundError('User not found');
        }
        console.log(req.body);
        const post = new postModel({ user: userId, desc, image })


        await post.save()

        const PostData = await postModel.find({ _id: post.id }).populate({ path: 'user', select: 'username profileImage _id', })
        const newPost = PostData[0]
        const profileBlobClient = profileImagesContainerClient.getBlobClient(newPost.user.profileImage);
        const profileImageSasToken = await generateSasToken(profileBlobClient);
        newPost.user.profileImage = profileImageSasToken
        const postBlobClient = postImagesContainerClient.getBlobClient(image);
        const postImageSasToken = await generateSasToken(postBlobClient);
        newPost.image = postImageSasToken
        console.log(PostData);
        res.status(201).json({ message: 'Post created', newPost })
    } catch (err) {
        next(err)
    }

}


const updatePost = async (req, res) => {
    const { postId } = req.params
    const { desc } = req.body

    try {

        const post = await postModel.findById(postId)

        if (!post) {
            throw new customError.NotFoundError('Post not found');
        }

        if (req.file) {
            const blobName = `${Date.now()}-${req.file.originalname}`
            const blockBlobClient = postImagesContainerClient.getBlockBlobClient(blobName)

            console.log(blockBlobClient);
            console.log('end!!!!!!!!!!!');

            0 -
                await blockBlobClient.upload(req.file.buffer, req.file.size)

            const oldImage = post.image
            const oldBlobClient = postImagesContainerClient.getBlockBlobClient(oldImage)
            await oldBlobClient.delete()
            post.image = blobName
        }

        post.desc = desc

        const updatedPost = await postModel.findByIdAndUpdate(post._id, post, { new: true }).populate({ path: 'user', select: 'username profileImage _id', })


        const profileBlobClient = profileImagesContainerClient.getBlobClient(updatedPost.user.profileImage);
        console.log("profileBlobClient !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");


        const profileImageSasToken = await generateSasToken(profileBlobClient);
        updatedPost.user.profileImage = profileImageSasToken
        const postBlobClient = postImagesContainerClient.getBlobClient(updatedPost.image);
        const postImageSasToken = await generateSasToken(postBlobClient);
        updatedPost.image = postImageSasToken
        const likeCount = await postLikeModel.find({ post: updatedPost._id }).countDocuments()
        updatedPost.likes = likeCount
        const userLiked = await postLikeModel.find({ post: updatedPost._id, user: userId })
        updatedPost.userLiked = userLiked.length > 0 ? true : false
        const savedCount = await postSavedModel.find({ post: updatedPost._id }).countDocuments()
        updatedPost.saved = savedCount
        const userSaved = await postSavedModel.find({ post: updatedPost._id, user: userId })
        updatedPost.userSaved = userSaved.length > 0 ? true : false
        const commentCount = await postCommentModel.find({ post: updatedPost._id }).countDocuments()
        updatedPost.comments = commentCount


        res.status(200).json({ message: 'Post updated', updatedPost })

    } catch (error) {
        console.error(error);
    }
}

const deletePost = async (req, res, next) => {
    const { postId } = req.params
    try {

        const post = await postModel.findById({_id:postId})

        if (!post) {
            throw new customError.NotFoundError('Post not found');
        }

console.log(post);


        const blobClient = postImagesContainerClient.getBlockBlobClient(post.image)
        await blobClient.delete()

        await postLikeModel.deleteMany({ post: postId })
        await postSavedModel.deleteMany({ post: postId })
        await postCommentModel.deleteMany({post:postId})

        const deletePost = await postModel.findByIdAndDelete({_id:postId})

        res.status(200).json({ message: 'Post deleted', deletePost: { _id: postId } })
    } catch (err) {
        next(err)
    }
}


const likePost = async (req, res) => {
    const { postId } = req.params
    const userId = req.userId
console.log(userId);


    const findUser = await userModel.findOne({ _id: userId });
    if (!findUser) {
        throw new customError.NotFoundError('User not found');
    }
    console.log(findUser);
    console.log(postId);
    


    const findPost = await postModel.findOne({ _id: postId });

    if (!findPost) {
        throw new customError.NotFoundError('Post not found');
    }

    console.log(findPost);
    
console.log(userId);

    const findUserLikedPost = await postLikeModel.find({ post: postId, user: userId })
console.log(findUserLikedPost);
console.log(userId);

console.log(typeof userId);

    if (findUserLikedPost.length > 0) {
        const postLikeDelete = await postLikeModel.findByIdAndDelete(findUserLikedPost[0]._id)
        res.status(200).json({ message: 'Post unliked', likePost: postLikeDelete })
    } else {
        const postLike = await  postLikeModel.create({ post: postId, user: userId })
        res.status(201).json({ message: 'Post liked', likePost: postLike })
    }

    
}

const getPostLikes = async (req, res,next) => {
    const { postId } = req.params

  try{
    const findPost = await postModel.findById({ _id: postId })

    if (!findPost) {
        throw new customError.NotFoundError('Post not found');
    }

    const postLikes = await postLikeModel.find({ post: postId }).populate({ path: 'user', select: 'username profileImage _id', })
    console.log(postLikes);

    const likeWithImgToken = postLikes.map(async (like) => {
        const profileImaageSasToken = await Promise.allSettled([
            generateSasToken(profileImagesContainerClient.getBlobClient(like.user.profileImage))
        ]);


        if (profileImaageSasToken[0].status === 'fulfilled') {
            like.user.profileImage = profileImaageSasToken[0].value
        }


        return like
    })

    const optimizedLikes = await Promise.all(likeWithImgToken)

    res.status(200).json(optimizedLikes)
  }catch(err){
      next(err)
  }
}

const savedPost = async (req, res,next) => {
    const { postId } = req.params
    const userId = req.userId

    try{
        const post = await postModel.findById({ _id: postId })

    if (!post) {
        throw new customError.NotFoundError('Post not found');
    }

    const user = await userModel.findById(userId)

    if (!user) {
        throw new customError.NotFoundError('User not found');
    }

    const userSavedPost = await postSavedModel.find({ user: userId, post: postId })
    if (userSavedPost.length >0) {
     const savedPostDelete = await postSavedModel.findOneAndDelete({ user: userId, post: postId })
        res.status(200).json({ message: 'Post unsaved', savedPost: savedPostDelete })
    } else {
        const savedPost = new postSavedModel({ user: userId, post: postId })
        await savedPost.save()
        res.status(201).json({ message: 'Post saved', savedPost })
    }
    }catch(err){
        next(err)
    }


}






const getPostComments = async (req, res,next) => {
    const { postId } = req.params
    const page = req.query.page || 1
    const commentLimit = 4;

    try {
        
        const findpost = await postModel.findById({ _id: postId})
        if (!findpost) {
            throw new customError.NotFoundError('Post not found');
        }

        const findPostComments = await postCommentModel.find({ post: postId }).sort({ _id: -1 }).limit(commentLimit).skip((page - 1) * commentLimit).populate({ path: 'user', select: 'username profileImage _id', })
   
        const postComments =findPostComments.map(async (comment) => {
            const userBlobClient = profileImagesContainerClient.getBlobClient(comment.user.profileImage);
            const profileImaageSasToken = await generateSasToken(userBlobClient);
            comment.user.profileImage = profileImaageSasToken
            return comment
        })
        const optimizedComments = await Promise.all(postComments)
        res.status(200).json(optimizedComments)
      
    } catch (err) {
        next(err)
    }
}


const createPostComment = async (req, res,next) => {
    const {postId} = req.params;
    const {message,} = req.body
    const userId = req.userId 
    console.log(message);
    try {

        const user = await userModel.findById({ _id: userId })

        if (!user) {
            throw new customError.NotFoundError('User not found');
        }

        const post = await postModel.findById({ _id: postId})

        if (!post) {
            throw new customError.NotFoundError('Post not found');
        }


        const createComment = new postCommentModel({ post:postId, user: userId, message }) 

        await createComment.save()

        const findComment = await postCommentModel.findById({ _id: createComment._id }).populate({ path: 'user', select: 'username profileImage _id', })

       
        const userBlobClient = profileImagesContainerClient.getBlobClient(findComment.user?.profileImage);
        const profileImageSasToken = await generateSasToken(userBlobClient);
        findComment.user.profileImage = profileImageSasToken

        res.status(201).json({ message: 'Comment created', comment:findComment })
    } catch (err) {
       next(err)
    }
}

const deletePostComment = async (req, res,next) => {
    const { commentId } = req.params
    const userId = req.userId

    try {


        const comment = await postCommentModel.findById({ _id: commentId })

        if(!comment){
            throw new customError.NotFoundError('Comment not found');
        }
        
        if (comment.user != userId) {
            throw new customError.UnauthorizedError('You are not authorized to delete this comment');
        }
        
        await postCommentModel.findByIdAndDelete({ _id: commentId })
       

        res.status(200).json({ message: 'Comment deleted', deleteComment:{_id:commentId} })

    } catch (err) {
        next(err)
    }

}

const postCommentLike = async (req, res,next) => {
    const { commentId } = req.params
    const likeUserId = req.body.likeUserId

    try {
        const findUser = await userModel.findById({ _id: likeUserId })

        if (!findUser) {
            throw new customError.NotFoundError('User not found');
        }

        const findComment = await postCommentModel.findById({ _id: commentId })

        if (!findComment) {
            throw new customError.NotFoundError('Comment not found');
        }

        const findUserLikedComment = await postCommentModel.find({ _id: commentId, likes: likeUserId })

        if (findUserLikedComment.length > 0) {
            const commentLikeDelete = await postCommentModel.findByIdAndUpdate({ _id: commentId }, { $pull: { likes: likeUserId } }, { new: true })
            res.status(200).json({ message: 'Comment unliked', likeComment: commentLikeDelete })
        } else {
            const commentLike = await postCommentModel.findByIdAndUpdate({ _id: commentId }, { $addToSet: { likes: likeUserId } }, { new: true })
            res.status(201).json({ message: 'Comment liked', likeComment: commentLike })
        }
    } catch (err) {
        next(err)
    }
}


const test = async (req, res) => {
    // try {
    //     const posts = await postModel.find()
    //     console.log("process start");
    //     const test = posts.map(async (post) => {
    //         if (post?.user) {
    //             await postModel.findByIdAndUpdate(post._id, post)
    //             console.log("updated post updated");
    //         } else {
    //             const { _id, desc, imageUrl, likes, comments, views, userId } = post
    //             console.log(post.userId);
    //             const postsss = {
    //                 _id, desc, imageUrl, likes, comments, views, user: userId
    //             }

    //             // console.log(postsss);

    //             await postModel.findByIdAndUpdate(post._id, postsss)
    //             console.log("old post updated");
    //         }
    //     })
    //     //     const users= await userModel.find()
    //     //     console.log(users);
    //     // console.log('datas geted')
    //     //  const test=users.map(async (user) => {
    //     //      const { _id, username, profileImage } = user;
    //     //      const userInfo = new user_info_model({ userId: _id, username:username, profileImage:profileImage });
    //     //      await userInfo.save();
    //     //  })

    //     console.log('process success');
    // } catch (e) {
    //     console.log(e);
    // }
}




module.exports = { getSinglePost, getUserPost, createPost, updatePost, deletePost, getAllPost, likePost, getPostLikes, savedPost, getPostComments, createPostComment, deletePostComment,postCommentLike ,savedPost,test }  