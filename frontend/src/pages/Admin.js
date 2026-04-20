import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Admin() {

  const [name, setName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [doctors, setDoctors] = useState([]);

  // 🔁 Load doctors
  const fetchDoctors = () => {
    axios.get("http://localhost:8080/api/doctors")
      .then(res => setDoctors(res.data));
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  // ➕ Add doctor
  const addDoctor = () => {
    axios.post("http://localhost:8080/api/doctors", {
      name,
      specialization
    })
    .then(() => {
      alert("Doctor Added ✅");
      setName("");
      setSpecialization("");
      fetchDoctors();
    })
    .catch(() => alert("Error ❌"));
  };

  // ❌ Delete doctor
  const deleteDoctor = (id) => {
    axios.delete(`http://localhost:8080/api/doctors/${id}`)
      .then(() => {
        alert("Deleted ✅");
        fetchDoctors();
      });
  };

  return (
    <div className="bg-gray-50 min-h-screen">

      <Navbar />

      <div className="p-10">

        <h1 className="text-3xl font-bold mb-6">Admin Panel 👑</h1>

        {/* ADD DOCTOR */}
        <div className="bg-white p-6 rounded shadow mb-8 w-96">
          <h2 className="text-xl mb-4">Add Doctor</h2>

          <input
            value={name}
            placeholder="Doctor Name"
            className="border p-2 w-full mb-3"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            value={specialization}
            placeholder="Specialization"
            className="border p-2 w-full mb-3"
            onChange={(e) => setSpecialization(e.target.value)}
          />

          <button
            onClick={addDoctor}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add Doctor
          </button>
        </div>

        {/* LIST DOCTORS */}
        <h2 className="text-2xl mb-4">All Doctors</h2>

        {doctors.map((doc) => (
          <div key={doc.id} className="bg-white p-4 mb-3 shadow rounded flex justify-between">
            <div>
              <p className="font-bold">{doc.name}</p>
              <p className="text-gray-500">{doc.specialization}</p>
            </div>

            <button
              onClick={() => deleteDoctor(doc.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Admin;