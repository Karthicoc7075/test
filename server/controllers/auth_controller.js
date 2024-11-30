const usersModel = require("../models/user_model");
const appConfig = require("../config/appConfig");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const CustomError = require("../errors");

const signup = async (req, res,next) => {
  const { firstname,lastname,username, email,password } = req.body;

  try {
  if(!firstname || !lastname || !username || !email || !password){
    throw new CustomError.BadRequestError("All fields are required")
  }

  const oldUsername = await usersModel.findOne({ username });

  if (oldUsername) {
    throw new CustomError.BadRequestError("Already username exists");
  }
  console.log("username verified!!");

  const oldEmail = await usersModel.findOne({ email });

  if (oldEmail) {
    throw new CustomError.BadRequestError("Already  email exists");
  }

  console.log("email verified!!");

  const SALTING_ROUNDS = Number(process.env.SALTING_ROUNDS);
  const encryptPassword = await bcrypt.hashSync(
    password,
    SALTING_ROUNDS
  );
  req.body.password = encryptPassword;
  console.log("password encrypt verified!!");

 
    const newUser = await usersModel.create(req.body);
    const token = jwt.sign(
      { email: newUser.email, id: newUser._id },
      appConfig.JWTKEY,
      { expiresIn: "1h" }
    );
    console.log("token created!!");
    res.status(200).json({ user: newUser, token });
  } catch (err) {
    next(err);
    
  }
};
 
const signin = async (req, res,next) => {
  const { username, email } = req.body;
  let user;


  try {
  if (username) {
    user = await usersModel.findOne({ username });
  } else {
    user = await usersModel.findOne({ email });
  }
  console.log(user);

  if (!user) {
    throw new CustomError.NotFoundError("User not found!");
  }

  const vaildity = await bcrypt.compare(req.body.password, user.password);

  if (!vaildity) {
    throw new CustomError.BadRequestError("Password wrong");
  }
    const token = jwt.sign(
      { username: user.username, id: user._id },
      appConfig.JWTKEY,
      { expiresIn: "1h" }
    );

    res.status(200).json({ user, token });
    console.log({ user, token });

  } catch (error) {
   next(error)
  }
};


module.exports = {
  signup,
  signin,
};
