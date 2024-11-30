export const getSinglePostSelector = (state) => state.post.posts.single;
export const getPostsSelector = (state) => state.post.posts.all;
export const getUserPostsSelector = (state) => state.post.posts.user;

export const getPostCommentsSelector = (state) => state.post.comments
export const savedPostSelector = (state) => state.post.posts.savedPost;

export const getPostLoadingSelector = (state) => state.post.loading.getPosts;
export const getUserPostLoadingSelector = (state) => state.post.loading.getUserPosts;
export const getSinglePostLoadingSelector = (state) => state.post.loading.getSinglePost;
export const createPostLoadingSelector = (state) => state.post.loading.createPost;
export const updatePostLoadingSelector = (state) => state.post.loading.updatePost;
export const deletePostLoadingSelector = (state) => state.post.loading.deletePost;
export const likePostLoadingSelector = (state) => state.post.loading.likePost;
export const getPostCommentsLoadingSelector = (state) => state.post.loading.getPostComments;
export const createPostCommentLoadingSelector = (state) => state.post.loading.createPostComment;
export const deletePostCommentLoadingSelector = (state) => state.post.loading.deletePostComment;
export const savedPostLoadingSelector = (state) => state.post.loading.savedPost;

export const getPostErrorSelector = (state) => state.post.errors.getPosts;
export const getUserPostErrorSelector = (state) => state.post.errors.getUserPosts;
export const getSinglePostErrorSelector = (state) => state.post.errors.getSinglePost;
export const createPostErrorSelector = (state) => state.post.errors.createPost;
export const updatePostErrorSelector = (state) => state.post.errors.updatePost;
export const deletePostErrorSelector = (state) => state.post.errors.deletePost;
export const likePostErrorSelector = (state) => state.post.errors.likePost;
export const getPostCommentsErrorSelector = (state) => state.post.errors.getPostComments;
export const createPostCommentErrorSelector = (state) => state.post.errors.createPostComment;
export const deletePostCommentErrorSelector = (state) => state.post.errors.deletePostComment;
export const savedPostErrorSelector = (state) => state.post.errors.savedPost;

export const getPostStopSelector = (state) => state.post.getPostStop;
export const getPostCommentsStopSelector = (state) => state.post.getPostCommentsStop;