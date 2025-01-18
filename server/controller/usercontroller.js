import User from "../model/user_schema.js";

export const usersignup = async (req, res) => {
  try {
    const exist = await User.findOne({ username: req.body.username });
    if (exist) {
      return res.status(401).json({ message: "username already exist" });
    }

    const user = req.body;
    const newuser = new User(user);
    await newuser.save();

    res.status(200).json({ message: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
