import { z } from "zod";

const Userprofileschema = z.object({
  profilepic: z.string().optional(),
  bio: z.string().optional(),
  Membership: z.string().optional(),
  sports: z.string().optional(),
  bookedclass: z.string().optional(),
  Points: z.number().optional(),
  Workoutplan: z.string().optional(),
});

export const ValidateUserProfile = (req, res, next) => {
  const { error } = Userprofileschema.safeParse(req.body);
  if (error) {
    res.status(400).json({
      message: "invalid user please enter all the required informations",
    });
  } else {
    next();
  }
};
