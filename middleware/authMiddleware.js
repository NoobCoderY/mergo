import  jwt  from "jsonwebtoken";
import { User } from "../model/user.js";
import ErrorHandler from "../utils/ErrorHandler.js";

export const isAuthenticatedUser= async (req, res, next) => {
   try {
       const token = req.cookies.token ;
       
  
    if (!token) {
      return next(new ErrorHandler("Please Login to access this resource", 401));
    }
  
        if (req.cookies.token)
       {
        const decodedData = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decodedData.user._id);
        }
    next();
    
   } catch (error) {
         return next(new ErrorHandler (error,400));
   }
  };