import { z } from "zod";

const Coachprofileschema = z.object({
  profilepic: z.string().optional(),
  bio: z.string().optional(),
  classes: z.string().optional(),
  sports: z.string().optional(),
  memberscoaching: z.object().optional(),
});

export const ValidateCoachProfile = (req, res, next) => {
  const { error } = Coachprofileschema.safeParse(req.body);
  if (error) {
    res.status(400).json({
      message: "invalid user please enter all the required informations",
    });
  } else {
    next();
  }
};
