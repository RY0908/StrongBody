import jwt from "jsonwebtoken";
import Users from "../schemas/users.js";
export const IsLoggedIn = (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    res.status(401).json({
      message: "unauthorized",
    });
  } else {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        res.status(401).json({
          message: "unauthorized",
        });
      } else {
        req.user = await Users.findById(decoded.id);
        next();
      }
    });
  }
};
