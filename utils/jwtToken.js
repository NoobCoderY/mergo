import jwt from "jsonwebtoken";


const sendToken = async (user, statusCode, res) => {
    const token = await  jwt.sign({user}, process.env.JWT_SECRET, {
        expiresIn:"5d",
      });
  
    // options for cookie
    const options = {
      expires: new Date(
        Date.now() + 7 * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
  };
  
  
    res.status(statusCode).cookie("token", token, options).json({
      success: true,
      user,
      token,
    });
};

  
export default sendToken;