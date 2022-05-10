import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const istoken = localStorage.getItem("token") ? true : false;

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    isUserLoggedIn: istoken,
    tokenVal: localStorage.getItem("token"),
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
