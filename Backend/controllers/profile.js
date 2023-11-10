import Users from "../schemas/users.js";

export const createprofile = async (req, res) => {
  const profiledata = req.body.profile;
  console.log(profiledata);
  const { id } = req.params;
  const user = await Users.findById(id);
  if (user) {
    try {
      const newuser = await Users.findOneAndUpdate(
        { _id: id },
        { profile: { ...profiledata } }
      );

      const tst = await Users.findById(id);
      console.log(newuser);
      res.status(200).json(tst);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ messaage: "error in the createprofile controller" });
    }
  } else {
    res.status(500).json({ messaage: "user not found" });
  }
};
