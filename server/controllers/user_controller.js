const UserModel = require('../models/user_model');
const CustomError = require('../errors/index')

const getUser = async (req, res) => {
    res.send('Welcome to the user get route');
}

const getUserById = async (req, res) => {
    const userId = req.params.userId;

    const user = await UserModel.findById({ _id: userId });

    if (!user) {
       CustomError.NotFoundError('User not found');
    }

    res.status(200).json(user);
}       

const updateUser = async (req, res) => {
    const userId = req.params.userId;

    const user = await UserModel.findByIdAndUpdate({ _id: userId }, req.body, { new: true });

    if (!user) {
        CustomError.NotFoundError('User not found');
    }

    res.status(200).json(user);
}

const deleteUser = async (req, res) => {
    res.send('Welcome to the user delete route');
}

const followUser = async (req, res) => {
    res.send('Welcome to the user follow route');
}

const unfollowUser = async (req, res) => {
    res.send('Welcome to the user unfollow route');
}

const getFollowers = async (req, res) => {
    res.send('Welcome to the user followers route');
}

const getFollowing = async (req, res) => {
    res.send('Welcome to the user following route');
}

const getSuggestions = async (req, res) => {
    res.send('Welcome to the user suggestions route');
}

const search = async (req, res) => {
    res.send('Welcome to the user search route');
}



module.exports = { getUser, getUserById, updateUser, deleteUser, followUser, unfollowUser, getFollowers, getFollowing, getSuggestions, search };

