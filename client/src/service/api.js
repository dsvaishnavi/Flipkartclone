import axios from "axios";

const URL = "http://localhost:5000";

export const authenticateSignup = async (data) => {
  try {
    console.log("succesfully");
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log(error.message);
  }
};
