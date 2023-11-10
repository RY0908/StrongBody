import express from "express";
import {
  DeleteUser,
  GetAllUsers,
  GetUserById,
  Login,
  Register,
  UpdateUser,
} from "../controllers/users.js";
import { isAdmin } from "../middlewares/isadmin.js";
import { IsLoggedIn } from "../middlewares/isLoggedIn.js";
import { ValidateUser } from "../middlewares/users.js";
const router = express.Router();
router.get("/getall", GetAllUsers);
router.get("/find/:id", GetUserById);
router.post("/login", Login);
router.post("/register", ValidateUser, Register);
router.put("/update/:id", UpdateUser);
router.delete("/delete/:id", DeleteUser);
//check token
router.post("/checktoken", IsLoggedIn, async (req, res) => {
  const { password, ...rest } = req.user._doc;
  res.send(rest);
});

export default router;
