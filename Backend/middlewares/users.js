import { z } from "zod";

const userschema = z.object({
  password: z.string(),
  email: z.string(),
  fullname: z.string(),
  gender: z.string(),
  number: z.string(),
  adress: z.string().optional(),
  profile: z.object().optional(),
  role: z
    .union([z.literal("user"), z.literal("admin"), z.literal("coach")])
    .optional(),
});

export const ValidateUser = (req, res, next) => {
  const { error } = userschema.safeParse(req.body);
  if (error) {
    res.status(400).json({
      message: "invalid user please enter all the required informations",
    });
  } else {
    next();
  }
};
