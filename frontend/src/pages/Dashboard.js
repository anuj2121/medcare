import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Chatbot from "../components/Chatbot";

function Dashboard() {

  const navigate = useNavigate();

  // ✅ ADDED
  const username = localStorage.getItem("username") || "User";

  // ✅ ADDED
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="bg-gray-50 min-h-screen">

      <Navbar />

      {/* ✅ ADDED (WELCOME + LOGOUT) */}
      <div className="flex justify-between items-center px-10 pt-6">
        <h2 className="text-xl font-semibold">
          Welcome, <span className="text-blue-600">{username}</span> 👋
        </h2>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* HERO SECTION */}
      <div className="flex items-center justify-between px-10 py-16">

        <Chatbot />

        <div className="max-w-xl">

          <h1 className="text-5xl font-bold leading-tight">
            Excellence in <span className="text-blue-600">Healthcare</span>
          </h1>

          <p className="mt-6 text-gray-600">
            Book appointments, consult doctors, and get AI-powered guidance.
          </p>

          {/* STATS */}
          <div className="flex space-x-8 mt-6">
            <div>
              <h2 className="text-2xl font-bold text-blue-600">15+</h2>
              <p className="text-gray-500">Years Experience</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-600">5000+</h2>
              <p className="text-gray-500">Patients</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-600">50+</h2>
              <p className="text-gray-500">Doctors</p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="mt-8 space-x-4">

            <button
              onClick={() => navigate("/doctors")}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              Book Appointment
            </button>

            <button className="border px-6 py-3 rounded-lg">
              Learn More
            </button>

          </div>
        </div>

        {/* IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1582750433449-648ed127bb54"
          alt="doctor"
          className="rounded-2xl shadow-lg w-[400px]"
        />

      </div>

      {/* ✅ ADDED FEATURE CARDS */}
      <div className="px-10 pb-10 grid grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">Find Doctors 👨‍⚕️</h2>
          <p className="text-gray-600">Search and consult top specialists.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">Book Appointment 📅</h2>
          <p className="text-gray-600">Schedule visits easily.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">AI Assistant 🤖</h2>
          <p className="text-gray-600">Get instant health guidance.</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;