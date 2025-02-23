import Dashboard from "../components/Dashboard";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to Our Website</h1>
        <p className="text-lg text-gray-700 mt-4">This is a simple homepage built with React and Tailwind CSS.</p>
        <button
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700"
        onClick={() => navigate("/about")} // Navigate to About page
      >
        Get Started
      </button>
      {/* Include the Trial component here */}
      <Dashboard />
      </div>
    );
  }