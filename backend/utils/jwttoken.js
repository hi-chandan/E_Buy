// Create token and Save in the cookie

const sendtoken = (user, statusCode, res) => {
  const token = user.getJWTToken();
  // options for cookie
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  res.status(statusCode).cookie("token", token, options).json({
    sucess: true,
    user,
    token,
  });
};

module.exports = sendtoken;
