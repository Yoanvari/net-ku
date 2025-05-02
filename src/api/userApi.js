import axios from "axios";
import { API_URL } from "../config/api";

export const loginUser = async (email, password) => {
  try {
    const res = await axios.get(
      API_URL + "/users?email=" + email + "&password=" + password
    );
    const user = res.data[0];

    console.log(res.data);

    if (!user) {
      throw new Error("Email or password is incorrect");
    }

    return user;
  } catch (err) {
    throw new Error(err.message || "Failed to fetch user data");
  }
};
