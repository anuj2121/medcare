import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-blue-600">MedCare</h1>

        <div className="space-x-6">
          <button onClick={() => navigate("/")} className="hover:text-blue-500">Home</button>
          <button onClick={() => navigate("/doctors")} className="hover:text-blue-500">Doctors</button>
          <button onClick={() => navigate("/dashboard")} className="hover:text-blue-500">Dashboard</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex items-center justify-between px-10 py-16">

        {/* LEFT */}
        <div className="max-w-xl">

          <h1 className="text-5xl font-bold leading-tight">
            Excellence in <span className="text-blue-600">Healthcare</span> With Compassionate Care
          </h1>

          <p className="mt-6 text-gray-600">
            Your trusted healthcare partner. Book appointments, consult doctors, and get AI-based guidance.
          </p>

          {/* Stats */}
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

          {/* Buttons */}
          <div className="mt-8 space-x-4">
            <button
              onClick={() => navigate("/doctors")}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              Book Appointment
            </button>

            <button className="border px-6 py-3 rounded-lg">
              Watch Video
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1582750433449-648ed127bb54"
            alt="doctor"
            className="rounded-2xl shadow-lg w-[400px]"
          />
        </div>

      </div>

    </div>
  );
}

export default Home;