import User from "../model/user_schema.js";

export const signupUser = async (req, res) => {
  const { firstname, email, username, mobile, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create and save the new user
    const newUser = new User({ firstname, email, username, mobile, password });
    await newUser.save();

    res.status(201).json({ message: "Signup successful", user: newUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error during signup", error: error.message });
  }
};

export const userLogin = async (req, res) => {
  try {
    const username = req.body.username;

    let user = await User.findOne({ username: username });
    if (user) {
      res.status(200).json({ data: user });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error.message);
  }
};
