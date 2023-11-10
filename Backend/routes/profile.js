import express from "express";
import { createprofile } from "../controllers/profile.js";
import { IsLoggedIn } from "../middlewares/isLoggedIn.js";
import { ValidateUserProfile } from "../middlewares/Userprofile.js";
import { ValidateCoachProfile } from "../middlewares/Coachprofile.js";

const router = express.Router();

router.get("/find/:id", IsLoggedIn);

router.post("/create/user/:id", IsLoggedIn, ValidateUserProfile, createprofile);

router.post("/create/coach/:id", IsLoggedIn, ValidateCoachProfile, createprofile);

router.put("/update/:id", IsLoggedIn);

export default router;
