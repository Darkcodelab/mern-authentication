import { API_URL } from "../config";
import axios, { AxiosError } from "axios";

interface UserObj {
  name?: string;
  password: string;
  email: string;
}

export const loginUser = async (userObj: UserObj) => {
  try {
    const response = await axios.post(API_URL + "/auth/login", userObj);
    const data = response.data;
    return data;
  } catch (error: any | AxiosError) {
    if (error.response) return error.response.data;
    return { success: false, message: "Login failed" };
  }
};

export const registerUser = async (userObj: UserObj) => {
  try {
    const response = await axios.post(API_URL + "/auth/register", userObj);
    const data = response.data;
    return data;
  } catch (error: any | AxiosError) {
    if (error.response) return error.response.data;
    return { success: false, message: "Registration failed" };
  }
};
