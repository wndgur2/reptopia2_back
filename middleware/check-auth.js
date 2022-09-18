const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // Bearer d12f31a23s123d4l1c24a1s2dc
    const decodedToken = jwt.verify(token, "Everyday_Easier_With_The_Momentum");
    req.userData = { email: decodedToken.email, userId: decodedToken.userId };
    next();
  } catch (error) {
    res.status(401).json({ message: "Token Verification failed." });
  }
};
