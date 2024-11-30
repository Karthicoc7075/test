import { getPostComments, savedPost } from '../actions/postActions';
import * as actionTypes from '../constants/actionTypes';

const initialState = {
    posts: {
        all: [],
        user: [],
        single: {},
        savedPost:[]
    },
    loading: {
        getPosts: false,
        getUserPosts: false,
        getSinglePost: false,
        createPost: false,
        updatePost: false,
        deletePost: false,
        likePost: false,
        getPostComments: false,
        createPostComment: false,
        deletePostComment: false,
        savedPost: false,
    },
    errors: {
        getPosts: null,
        getUserPosts: null,
        getSinglePost: null,
        createPost: null,
        updatePost: null,
        deletePost: null,
        likePost: null,
        getPostComments: null,
        createPostComment: null,
        deletePostComment: null,
        savedPost: null,
    },
    comments: [],
    getPostStop:false,
    getPostCommentsStop:false,
};



const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_POSTS_REQUEST:
            return {
                ...state,
                loading: { ...state.loading, getPosts: true },
            };
        case actionTypes.GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: { ...state.posts, all: [...action.payload, ...state.posts.all] },
                loading: { ...state.loading, getPosts: false },
                getPostStop:false
            };
        case actionTypes.GET_POSTS_FAILURE:
            return {
                ...state,
                errors: { ...state.errors, getPosts: action.error },
                loading: { ...state.loading, getPosts: false },
                getPostStop:true
            };
        case actionTypes.GET_USER_POSTS_REQUEST:
            return {
                ...state,
                loading: { ...state.loading, getUserPosts: true},
            };
        case actionTypes.GET_USER_POSTS_SUCCESS:
            return {
                ...state,
                posts: { ...state.posts, user: action.payload },
                loading: { ...state.loading, getUserPosts: false },
                
            };
        case actionTypes.GET_USER_POSTS_FAILURE:
            return {
                ...state,
                errors: { ...state.errors, getUserPosts: action.error,getPostStop:true },
                loading: { ...state.loading, getUserPosts: false },
            };
        case actionTypes.GET_SIGNLE_POST_REQUEST:
            return {
                ...state,
                loading: { ...state.loading, getSinglePost: true },
            };
        case actionTypes.GET_SIGNLE_POST_SUCCESS:
            return {
                ...state,
                posts: { ...state.posts, single: action.payload },
                loading: { ...state.loading, getSinglePost: false },
            };
        case actionTypes.GET_SIGNLE_POST_FAILURE:
            return {
                ...state,
                errors: { ...state.errors, getSinglePost: action.error },
                loading: { ...state.loading, getSinglePost: false },
            };
        case actionTypes.CREATE_POST_REQUEST:
            return {
                ...state,
                loading: { ...state.loading, createPost: true },
            };
        case actionTypes.CREATE_POST_SUCCESS:
            return {
                ...state,
                posts: { ...state.posts, all: [action.payload, ...state.posts.all] },
                loading: { ...state.loading, createPost: false },
            };
        case actionTypes.CREATE_POST_FAILURE:
            return {
                ...state,
                errors: { ...state.errors, createPost: action.error },
                loading: { ...state.loading, createPost: false },
            };
        case actionTypes.UPDATE_POST_REQUEST:
            return {
                ...state,
                loading: { ...state.loading, updatePost: true },
            };
        case actionTypes.UPDATE_POST_SUCCESS:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    all: state.posts.all.map((post) => (post._id === action.payload._id ? action.payload : post)),
                },
                loading: { ...state.loading, updatePost: false },
            };

        case actionTypes.UPDATE_POST_FAILURE:
            return {
                ...state,
                errors: { ...state.errors, updatePost: action.error },
                loading: { ...state.loading, updatePost: false },
            };
        case actionTypes.DELETE_POST_REQUEST:
            return {
                ...state,
                loading: { ...state.loading, deletePost: true },
            };
        case actionTypes.DELETE_POST_SUCCESS:
            return {
                ...state,
                posts: { ...state.posts, all: state.posts.all.filter((post) => post._id !== action.payload) },
                loading: { ...state.loading, deletePost: false },
            };
        case actionTypes.DELETE_POST_FAILURE:
            return {
                ...state,
                errors: { ...state.errors, deletePost: action.error },
                loading: { ...state.loading, deletePost: false },
            };

        case actionTypes.LIKE_POST_REQUEST:
            return {
                ...state,
                loading: { ...state.loading, likePost: true },
            };

        case actionTypes.LIKE_POST_SUCCESS:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    all: state.posts.all.map((post) => (post._id === action.payload.post ? {...post, userLiked: !post.userLiked, likes: post.userLiked ? post.likes - 1 : post.likes + 1 } : post)),
                },
                loading: { ...state.loading, likePost: false },
            };
        case actionTypes.LIKE_POST_FAILURE:
            return {
                ...state,
                errors: { ...state.errors, likePost: action.error },
                loading: { ...state.loading, likePost: false },
            };
        case actionTypes.GET_POST_COMMENTS_REQUEST:
            return {
                ...state,
                loading: { ...state.loading, getPostComments: true },
            };
        case actionTypes.GET_POST_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: action.payload,
                loading: { ...state.loading, getPostComments: false },
                getPostCommentsStop:false
            };
        case actionTypes.GET_POST_COMMENTS_FAILURE:
            return {
                ...state,
                errors: { ...state.errors, getPostComments: action.error },
                loading: { ...state.loading, getPostComments: false },
                getPostCommentsStop:true
            };
        case actionTypes.CREATE_POST_COMMENT_REQUEST:
            return {
                ...state,
                loading: { ...state.loading, createPostComment: true },
            };
        case actionTypes.CREATE_POST_COMMENT_SUCCESS:
            return {
                ...state,
               comments: [action.payload, ...state.comments],
                loading: { ...state.loading, createPostComment: false },
            };
        case actionTypes.CREATE_POST_COMMENT_FAILURE:
            return {
                ...state,
                errors: { ...state.errors, createPostComment: action.error },
                loading: { ...state.loading, createPostComment: false },
            };
        case actionTypes.DELETE_POST_COMMENT_REQUEST:
            return {
                ...state,
                loading: { ...state.loading, deletePostComment: true },
            };
        case actionTypes.DELETE_POST_COMMENT_SUCCESS:
            return {
                ...state,
                comments: state.comments.filter((comment) => comment._id !== action.payload),
                loading: { ...state.loading, deletePostComment: false },
            };
        case actionTypes.DELETE_POST_COMMENT_FAILURE:
            return {
                ...state,
                errors: { ...state.errors, deletePostComment: action.error },
                loading: { ...state.loading, deletePostComment: false },
            };
      
        case actionTypes.CLEAR_POST_COMMENTS:
            return {
                ...state,
                comments: [],
            };

        case actionTypes.SAVED_POST_REQUEST:
            return {
                ...state,
                loading: { ...state.loading, savedPost: true },
            };
        case actionTypes.SAVED_POST_SUCCESS:
            return {
                ...state,
                posts: { ...state.posts,  all: state.posts.all.map((post) => (post._id === action.payload.post ? {...post, userSaved: !post.userSaved,  } : post)), },
                loading: { ...state.loading, savedPost: false },
            };
        case actionTypes.SAVED_POST_FAILURE:
            return {
                ...state,
                errors: { ...state.errors, savedPost: action.error },
                loading: { ...state.loading, savedPost: false },
            };
        default:
            return state;
    }
}

export default postReducer;