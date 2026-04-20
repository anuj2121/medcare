import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  return (
    <div className="flex justify-between items-center px-10 py-4 bg-white shadow">

      <h1 className="text-2xl font-bold text-blue-600 cursor-pointer"
          onClick={() => navigate("/dashboard")}>
        MedCare
      </h1>

      <div className="space-x-6">
        <button onClick={() => navigate("/dashboard")}>Home</button>
        <button onClick={() => navigate("/doctors")}>Doctors</button>
        <button onClick={() => navigate("/my-appointments")}>Appointments</button>

        {role === "admin" && (
          <button onClick={() => navigate("/admin")}>Admin</button>
        )}
      </div>

    </div>
  );
}

export default Navbar;