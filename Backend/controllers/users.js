import Users from "../schemas/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const hashpsw = ({ password }) => {
  return bcrypt.hashSync(password, 5, function (err, hash) {});
};

export const Register = async (req, res) => {
  const { email, number } = req.body;
  const existingemail = await Users.findOne({ email: email });
  const existingnumber = await Users.findOne({ number: number });
  try {
    if (!existingemail) {
      if (!existingnumber) {
        const userdata = req.body;
        userdata.password = hashpsw(userdata);
        const createduser = await Users.create(userdata);
        const { password, ...rest } = createduser._doc;
        jwt.sign(
          { id: createduser._id },
          process.env.JWT_SECRET,
          { expiresIn: "14 days" },

          (err, token) => {
            if (err)
              return res.status(500).json({ error: "error in the token" });
            res.status(201).json({ token, user: rest });
          }
        );
      } else {
        res.status(409).json({ message: "phone number already taken" });
      }
    } else {
      res.status(409).json({ message: "email already taken" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "error in the register controller", error });
    console.log(error);
  }
};

export const Login = async (req, res) => {
  try {
    const { password, email } = req.body;
    const existinguser = await Users.findOne({ email: email });
    if (existinguser) {
      const compare = bcrypt.compareSync(password, existinguser.password);
      if (compare) {
        const { password: psw, ...rest } = existinguser._doc;
        jwt.sign(
          { id: existinguser.id },
          process.env.JWT_SECRET,
          { expiresIn: "14days" },

          (err, token) => {
            if (err)
              return res.status(500).json({ error: "error in the token" });
            res.status(201).json({ token, user: rest });
          }
        );
      } else {
        res
          .status(400)
          .json("password or email incorrect please verify your information");
      }
    } else {
      res.status(400).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "error in the login controller", error });
  }
};

export const GetAllUsers = async (req, res) => {
  try {
    const users = await Users.find({});
    const returnedusers = [];
    users.map((usr) => {
      const { password, ...rest } = usr._doc;
      returnedusers.push(rest);
    });
    res.status(200).json(returnedusers);
  } catch (error) {
    res
      .status(500)
      .json({ message: "error in the getAllUSers controller", error });
  }
};

export const GetUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Users.findById(id);
    const { password, ...rest } = user._doc;
    res.status(200).json(rest);
  } catch (error) {
    res.status(404).json({ message: "User not found" });
  }
};

export const UpdateUser = async (req, res) => {
  const { id } = req.params;
  const newuser = req.body;
  try {
    const user = await Users.findByIdAndUpdate(id, newuser);
    res.status(200).json("user updated");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const DeleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Users.findByIdAndDelete(id);
    res.status(200).json("deleted user");
  } catch (error) {
    res.status(500).json(error);
  }
};
