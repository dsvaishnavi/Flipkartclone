import axios from "axios";

const URL = "http://localhost:3000";

export const authenticateSignup = async (data) => {
  try {
    console.log("succesfully");
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log(error.message);
  }
};
export const authenticatelogin = async (data) => {
  try {
    console.log("succesfully");
    return await axios.post(`${URL}/login`, data);
  } catch (error) {
    console.log(error.message);
  }
};


