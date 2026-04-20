import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function MyAppointments() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/appointments")
      .then(res => setData(res.data));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">

      <Navbar />

      <div className="p-6">

        <h1 className="text-3xl mb-6">My Appointments</h1>

        {data.map((a, i) => (
          <div key={i} className="bg-white p-4 mb-3 shadow rounded">
            <p>{a.name}</p>
            <p>{a.doctor}</p>
            <p>{a.date}</p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default MyAppointments;