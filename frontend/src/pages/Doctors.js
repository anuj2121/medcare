import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Doctors() {

  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/api/doctors")
      .then(res => setDoctors(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">

      <Navbar />

      <div className="p-10">

        <h1 className="text-4xl font-bold mb-8 text-center">
          Our Doctors 👨‍⚕️
        </h1>

        <div className="grid grid-cols-3 gap-8">

          {doctors.map((doc, index) => (

            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300"
            >

              <img
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54"
                alt="doctor"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <h2 className="text-xl font-bold">{doc.name}</h2>
              <p className="text-gray-500">{doc.specialization}</p>

              <button
                onClick={() => navigate("/appointment")}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                Book Appointment
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Doctors;