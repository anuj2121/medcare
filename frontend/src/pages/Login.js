import { useState } from "react";
import axios from "axios";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {

    axios.post("http://localhost:8080/api/auth/login", {
      email,
      password
    })
    .then(res => {

      if (res.data === "Login success") {

        // ROLE LOGIC
        if (email === "admin@gmail.com") {
          localStorage.setItem("role", "admin");
        } else {
          localStorage.setItem("role", "user");
        }

        window.location.href = "/dashboard";

      } else {
        alert(res.data);
      }

    })
    .catch(() => alert("Error ❌"));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">

      <div className="bg-white p-8 rounded-xl shadow-lg w-80">

        <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
          MedCare Login
        </h1>

        <input
          placeholder="Email"
          className="border p-2 w-full mb-3 rounded"
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-4 rounded"
          onChange={e => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="bg-blue-600 text-white w-full py-2 rounded"
        >
          Login
        </button>

        <p
          onClick={() => window.location.href = "/register"}
          className="text-center text-blue-500 mt-4 cursor-pointer"
        >
          New user? Register
        </p>

      </div>
    </div>
  );
}

export default Login;