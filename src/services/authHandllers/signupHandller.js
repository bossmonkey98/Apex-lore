import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignUpHandler = async (
  { firstName, lastName, email, password },navigator
) => {
  try {
    const { data } = await axios.post(`/api/auth/signup`, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });
    // saving token in the localStorage
    localStorage.setItem("token", data.encodedToken);
    navigator("/");
  } catch (error) {
    console.log(error);
  }
};
