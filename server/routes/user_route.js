const express = require('express');
const routes = express.Router()
const { getUser, getUserById, updateUser, deleteUser, followUser, unfollowUser, getFollowers, getFollowing, getSuggestions, search } = require('../controllers/user_controller');


routes.get('/', getUser);
routes.get('/:userId', getUserById);
routes.put('/:userId', updateUser);
routes.delete('/:userId', deleteUser);
routes.post('/follow/:userId', followUser);
routes.post('/unfollow/:userId', unfollowUser);
routes.get('/followers/:userId', getFollowers);
routes.get('/following/:userId', getFollowing);
routes.get('/suggestions/:userId', getSuggestions);
routes.get('/search', search);







module.exports = routes;
