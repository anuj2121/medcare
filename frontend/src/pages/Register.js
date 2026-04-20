import { useState } from "react";
import axios from "axios";

function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {

    axios.post("http://localhost:8080/api/auth/register", {
      email,
      password
    })
    .then(() => alert("Registered ✅"))
    .catch(() => alert("Error ❌"));
  };

  return (
    <div className="flex justify-center items-center h-screen">

      <div className="bg-white p-8 shadow rounded">

        <h1 className="text-xl mb-4">Register</h1>

        <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <br /><br />

        <input placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <br /><br />

        <button onClick={register}>Register</button>

      </div>
    </div>
  );
}

export default Register;