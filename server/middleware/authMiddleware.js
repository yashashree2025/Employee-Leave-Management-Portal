const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    // Get token from request header
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        message: "Access Denied. No Token Provided.",
      });
    }

    // Extract token
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "Invalid Token",
      });
    }

    // Verify token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // Store user details in request
    req.user = decoded;

    next();

  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized Access",
    });
  }
};

module.exports = authMiddleware;