import axios from "axios";

export const LogInHandler = ({ email, password }, setUser, navigator) => {
  (async () => {
    console.log(email,password)
    try {
      const { data, status } = await axios.post("/api/auth/login",{
        email: email,
        password: password,
      });
      if (status === 200) {
        localStorage.setItem("token", JSON.stringify(data.encodedToken));
        setUser({tokenVal:JSON.stringify(data.encodedToken), isUserLoggedIn: true });
        navigator("/");
      }
    } catch (error) {
      console.error("Invalid email or password", error);
    }
  })();
};

export const LogoutHandler = (setUser) => {
  localStorage.removeItem("token");
  setUser({ isUserLoggedIn: false });
};
