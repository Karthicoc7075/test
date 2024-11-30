import axios from "axios";

// export const API = axios.create({baseURL:'https://socialmedia123-5957e284a109.herokuapp.com/api'});
export const API = axios.create({baseURL:'http://localhost:8000/api'});
// export const API = axios.create({baseURL:'http://192.168.11.99:8000/api'});


API.interceptors.request.use((req) => {
    if (localStorage.getItem('authReducer')) {
      // console.log('token check');ata?.token}`;

      req.headers.Authorization = `${JSON.parse(localStorage.getItem('authReducer')).userData?.token}`
    }
  return req;
  },
  (error) => {
    return Promise.reject(error);
  }
  );
  
//Auth api 
export const signIn = (formData)=> API.post('/auth/signIn',formData);
export const signUp = (formData)=> API.post('/auth/signUp',formData);

//Post api
export const getPosts = (page)=> API.get(`/posts?page=${page}`);
export const getUserPosts = (page)=> API.get(`/posts?page=${page}`);
export const createPost = (postData)=> API.post(`/posts/`,postData);

export const likePost = (id)=> API.post(`/posts/likePost/${id}`);
export const savedPost = (id)=> API.post(`/posts/savedPost/${id}`);
export const getComments = (id,page)=> API.post(`/posts/getComments/${id}?page=${page}`);
export const addComment = (data)=> API.post(`/posts/addComment/`,data);

export const userProfile = (userId)=> API.get(`/user/profile/${userId}`);