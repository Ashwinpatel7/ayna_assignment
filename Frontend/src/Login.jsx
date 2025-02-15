import { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        console.log(identifier, password);
        
      await login(identifier, password);
      navigate("/chat");
    } catch (err) {
      setError("Invalid login credentials.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-lg font-bold text-center mb-4">🔐 Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email or Username"
            className="w-full p-2 border rounded-lg mb-2"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded-lg mb-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-blue-500 text-white p-2 rounded-lg" type="submit">
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account? <a href="/register" className="text-blue-500">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
