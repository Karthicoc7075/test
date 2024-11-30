import * as actionTypes from '../constants/actionTypes';
import {getSinglePostApi,getPostsApi,getUserPostApi,createPostApi,updatePostApi,deletePostApi,likePostApi,postCommentLikeApi,getPostCommentsApi,createPostCommentApi,deletePostCommentApi,savedPostApi } from '../../../api/postApi'
import {addToast} from '../../toast/actions/toastAction'



export const getSinglePost = (postId) => async (dispatch) => {
    dispatch({ type: actionTypes.GET_SIGNLE_POST_REQUEST });

    try {
        const response = await getSinglePostApi(dispatch, postId);
        const payload = response;
        dispatch({ type: actionTypes.GET_SIGNLE_POST_SUCCESS, payload });
    } catch (error) {
        dispatch({ type: actionTypes.GET_SIGNLE_POST_FAILURE, error });
    }
}

export const getPosts = (currentPage) => async (dispatch) => {
    dispatch({ type: actionTypes.GET_POSTS_REQUEST });

    try {
        const response = await getPostsApi(dispatch, currentPage); 
        const payload = response;
        if(payload.length === 0){
            dispatch({ type: actionTypes.GET_POSTS_FAILURE, error: 'No more posts' });
        }else{ 
                   dispatch({ type: actionTypes.GET_POSTS_SUCCESS, payload });
        }
    } catch (error) {
        dispatch({ type: actionTypes.GET_POSTS_FAILURE, error });
    }
}

export const getUserPost = (userId) => async (dispatch) => {
    dispatch({ type: actionTypes.GET_USER_POSTS_REQUEST });

    try {
        const response = await getUserPostApi(dispatch, userId);
        const payload = response;
        dispatch({ type: actionTypes.GET_USER_POSTS_SUCCESS, payload });
    } catch (error) {
        dispatch({ type: actionTypes.GET_USER_POSTS_FAILURE, error });
    }
}


export const createPost = (data) => async (dispatch) => {
    dispatch({ type: actionTypes.CREATE_POST_REQUEST });

    try {
        const response = await createPostApi(dispatch, data);
        const payload = response;
        dispatch({ type: actionTypes.CREATE_POST_SUCCESS, payload });
        dispatch(addToast(response.message, 'success'));
    } catch (error) {
        dispatch({ type: actionTypes.CREATE_POST_FAILURE, error });
    }
}


export const updatePost = (postId, data) => async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_POST_REQUEST });

    try {
        const response = await updatePostApi(dispatch, postId, data);
        const payload = response;
        dispatch({ type: actionTypes.UPDATE_POST_SUCCESS, payload });
        dispatch(addToast(response.message, 'success'));
    } catch (error) {
        dispatch({ type: actionTypes.UPDATE_POST_FAILURE, error });
    }
}

export const deletePost = (postId) => async (dispatch) => {
    dispatch({ type: actionTypes.DELETE_POST_REQUEST });

    try {
        const response = await deletePostApi(dispatch, postId);
        const payload = response;
        dispatch({ type: actionTypes.DELETE_POST_SUCCESS, payload });
        dispatch(addToast(response.message, 'success'));
    } catch (error) {
        dispatch({ type: actionTypes.DELETE_POST_FAILURE, error });
    }
}


export const likePost = (postId) => async (dispatch) => {
    dispatch({ type: actionTypes.LIKE_POST_REQUEST });

    try {
        const response = await likePostApi(dispatch, postId);
        const payload = response.likePost;
        dispatch({ type: actionTypes.LIKE_POST_SUCCESS, payload });
    } catch (error) {
        dispatch({ type: actionTypes.LIKE_POST_FAILURE, error });
    }
}

export const postCommentLike = (commentId) => async (dispatch) => {
    dispatch({ type: actionTypes.LIKE_POST_COMMENT_REQUEST });

    try {
        const response = await postCommentLikeApi(dispatch, commentId);
        const payload = response;
        dispatch({ type: actionTypes.LIKE_POST_COMMENT_SUCCESS, payload });
    } catch (error) {
        dispatch({ type: actionTypes.LIKE_POST_COMMENT_FAILURE, error });
    }
}

export const getPostComments = (postId,currentPage) => async (dispatch) => {
    dispatch({ type: actionTypes.GET_POST_COMMENTS_REQUEST });

    try {
        const response = await getPostCommentsApi(dispatch, postId,currentPage );
        const payload = response;
       if(payload.length === 0){
            dispatch({ type: actionTypes.GET_POST_COMMENTS_FAILURE, error: 'No more comments' });
       }else{
        dispatch({ type: actionTypes.GET_POST_COMMENTS_SUCCESS, payload });
       }
    } catch (error) {
        dispatch({ type: actionTypes.GET_POST_COMMENTS_FAILURE, error });
    }
}

export const createPostComment = (postId, data) => async (dispatch) => {
    dispatch({ type: actionTypes.CREATE_POST_COMMENT_REQUEST });

    try {
        const response = await createPostCommentApi(dispatch, postId, data);
        const payload = response;
        dispatch({ type: actionTypes.CREATE_POST_COMMENT_SUCCESS, payload });
        dispatch(addToast(response.message, 'success'));
    } catch (error) {
        dispatch({ type: actionTypes.CREATE_POST_COMMENT_FAILURE, error });
    }
}


export const deletePostComment = (commentId) => async (dispatch) => {
    dispatch({ type: actionTypes.DELETE_POST_COMMENT_REQUEST });

    try {
        const response = await deletePostCommentApi(dispatch, commentId);
        const payload = response;
        dispatch({ type: actionTypes.DELETE_POST_COMMENT_SUCCESS, payload });
        dispatch(addToast(response.message, 'success'));
    } catch (error) {
        dispatch({ type: actionTypes.DELETE_POST_COMMENT_FAILURE, error });
    }
}

export const clearComments = () => (dispatch) => {
    dispatch({ type: actionTypes.CLEAR_POST_COMMENTS });
}





export const savedPost = (postId) => async (dispatch) => {
    dispatch({ type: actionTypes.SAVED_POST_REQUEST });

    try {
        const response = await savedPostApi(dispatch, postId);
        const payload = response.savedPost;
        dispatch({ type: actionTypes.SAVED_POST_SUCCESS, payload });
    } catch (error) {
        dispatch({ type: actionTypes.SAVED_POST_FAILURE, error });
    }
}
