const jwt = require('jsonwebtoken');
const appConfig = require("../config/appConfig");
const CustomError = require('../errors/index');

const auth =()=>
 (req, res, next) => {
    let token = req.header('Authorization')
    if (!token) return CustomError.UnauthorizedError('Access denied. No token provided.');
    console.log(token);
    try {
      token = token.split(' ')[1];
      const decoded = jwt.verify(token, appConfig.JWTKEY);
      req.userId = decoded.id;
      console.log(decoded);
   
      
      next();
    } catch (err) {
      return CustomError.UnauthorizedError('Invalid token');
    }
    };
    
    
    module.exports = auth;