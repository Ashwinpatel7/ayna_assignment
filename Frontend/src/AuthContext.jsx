import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    if (token) {
      axios
        .get("http://localhost:1337/api/users/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => setUser(response.data))
        .catch(() => {
          setUser(null);
          localStorage.removeItem("token");
        });
    }
  }, [token]);

  const login = async (identifier, password) => {
    try {
      const { data } = await axios.post("http://localhost:1337/api/auth/local", {
        identifier,
        password,
      });
      setToken(data.jwt);
      setUser(data.user);
      localStorage.setItem("token", data.jwt);
      return data;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const register = async (username, email, password) => {
    try {
      const { data } = await axios.post("http://localhost:1337/api/auth/local/register", {
        username,
        email,
        password,
      });
      console.log("Data ", data);
      
      setToken(data.jwt);
      setUser(data.user);
      localStorage.setItem("token", data.jwt);
      return data;
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
