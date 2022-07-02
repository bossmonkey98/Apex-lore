import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignUpHandler = async (
  { firstName, lastName, email, password },navigator,setUser
) => {
  try {
    const { data,status } = await axios.post(`/api/auth/signup`, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });
    // saving token in the localStorage
    if (status === 201) {
      localStorage.setItem("token", JSON.stringify(data.encodedToken));
      setUser({tokenVal:JSON.stringify(data.encodedToken), isUserLoggedIn: true });
      navigator("/");
    }
  } catch (error) {
    console.log(error);
  }
};
