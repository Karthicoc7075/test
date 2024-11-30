
import axiosInstance from "./axiosConfig"
import { addToast } from '../features/toast/actions/toastAction'


export const getSinglePostApi = async (dispatch) => {
    try {
        const response = await axiosInstance.get('/post/getPost/:postId');
        return response.data;
    } catch (error) {
        dispatch(addToast(error.response?.data.message || error.message , 'error'));
    }
}

export const getPostsApi = async (dispatch,currentPage) => {
    try {
        const response = await axiosInstance.get(`/post/getPosts?page=${currentPage}`,);
        return response.data;
    } catch (error) {
        dispatch(addToast(error.response?.data.message || error.message , 'error'));
    }
}

export const getUserPostApi = async (dispatch, userId) => {
    try {
        const response = await axiosInstance.get(`/post/getPost/user/${userId}`);
        return response.data;
    } catch (error) {
        dispatch(addToast(error.response?.data.message || error.message , 'error'));
    }
}

export const createPostApi = async (dispatch, data) => {
    try {
        const response = await axiosInstance.post('/post/create', data);
        dispatch(addToast(response.data.message, 'success'));
        return response.data;
    } catch (error) {
        dispatch(addToast(error.response?.data.message || error.message , 'error'));
    }
}

export const updatePostApi = async (dispatch, postId, data) => {
    try {
        const response = await axiosInstance.put(`/post/updatePost/${postId}`, data);
        dispatch(addToast(response.data.message, 'success'));
        return response.data;
    } catch (error) {
        dispatch(addToast(error.response?.data.message || error.message , 'error'));
    }
}

export const deletePostApi = async (dispatch, postId) => {
    try {
        const response = await axiosInstance.delete(`/post/deletePost/${postId}`);
        dispatch(addToast(response.data.message, 'success'));
        return response.data;
    } catch (error) {
        dispatch(addToast(error.response?.data.message || error.message , 'error'));
    }
}

export const likePostApi = async (dispatch, postId) => {
    try {
        const response = await axiosInstance.post(`/post/likePost/${postId}`);
        dispatch(addToast(response.data.message, 'success'));
        return response.data;
    } catch (error) {
        dispatch(addToast(error.response?.data.message || error.message , 'error'));
    }
}

export const postCommentLikeApi = async (dispatch, commentId) => {
    try {
        const response = await axiosInstance.post(`/post/postCommentLike/${commentId}`);
        dispatch(addToast(response.data.message, 'success'));
        return response.data;
    } catch (error) {
        dispatch(addToast(error.response?.data.message || error.message , 'error'));
    }
}

export const createPostCommentApi = async (dispatch, postId, data) => {
    try {
        const response = await axiosInstance.post(`/post/createPostComment/${postId}`, data);
        dispatch(addToast(response.data.message, 'success'));
        return response.data;
    } catch (error) {
        dispatch(addToast(error.response?.data.message || error.message , 'error'));
    }
}

export const getPostCommentsApi = async (dispatch, postId,currentPage) => {
    try {
        const response = await axiosInstance.get(`/post/getPostComments/${postId}?page=${currentPage}`);
        return response.data;
    } catch (error) {
        dispatch(addToast(error.response?.data.message || error.message , 'error'));
    }
}

export const deletePostCommentApi = async (dispatch, commentId) => {
    try {
        const response = await axiosInstance.delete(`/post/deletePostComment/${commentId}`);
        dispatch(addToast(response.data.message, 'success'));
        return response.data;
    } catch (error) {
        dispatch(addToast(error.response?.data.message || error.message , 'error'));
    }
}

export const savedPostApi = async (dispatch, postId) => {
    try {
        const response = await axiosInstance.post(`/post/savedPost/${postId}`);
        dispatch(addToast(response.data.message, 'success'));
        return response.data;
    } catch (error) {
        dispatch(addToast(error.response.data.message || error.message , 'error'));
    }
}

export const getSavedPostApi = async (dispatch) => {
    try {
        const response = await axiosInstance.get('/post/getSavedPost');
        return response.data;
    } catch (error) {
        dispatch(addToast(error.response.data.message || error.message , 'error'));
    }
}
