import { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
        console.log(username, email, password);
        
      await register(username, email, password);
      navigate("/chat");
    } catch (err) {
      setError("Registration failed. Try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-lg font-bold text-center mb-4">📝 Register</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 border rounded-lg mb-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded-lg mb-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded-lg mb-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-green-500 text-white p-2 rounded-lg" type="submit">
            Register
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account? <a href="/login" className="text-blue-500">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
