import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Appointment() {

  const [name, setName] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    axios.post("http://localhost:8080/api/appointments", {
      name,
      doctor,
      date
    })
    .then(() => {
      alert("Appointment booked successfully ✅");
      setName("");
      setDoctor("");
      setDate("");
    })
    .catch(() => {
      alert("Error ❌");
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">

      <Navbar />

      <div className="flex justify-center items-center py-16">

        <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">

          <h1 className="text-2xl font-bold mb-6 text-center">
            Book Appointment 🩺
          </h1>

          <input
            value={name}
            placeholder="Your Name"
            className="border p-3 mb-4 w-full rounded-lg"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            value={doctor}
            placeholder="Doctor Name"
            className="border p-3 mb-4 w-full rounded-lg"
            onChange={(e) => setDoctor(e.target.value)}
          />

          <input
            type="date"
            value={date}
            className="border p-3 mb-4 w-full rounded-lg"
            onChange={(e) => setDate(e.target.value)}
          />

          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-700"
          >
            Book Appointment
          </button>

        </div>

      </div>

    </div>
  );
}

export default Appointment;