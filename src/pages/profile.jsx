import Navbar from "../components/Navigation";
import React from "react";

const Profile = () => {
    const shareProfile = () => {
        const shareData = {
          title: "UGC Creator Profile",
          text: "Check out my UGC portfolio!",
          url: window.location.href, // Current page URL
        };
        if (navigator.share) {
            navigator.share(shareData).catch((error) => console.error("Error sharing:", error));
          } else {
            navigator.clipboard.writeText(shareData.url);
            alert("Profile link copied to clipboard!");
          }
        };
  return (
    
    <div className="bg-blue-50 text-gray-900 font-sans p-6 mx-auto relative">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full bg-blue-700 shadow-md z-50">
        <Navbar />
      </div>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center bg-blue-700 text-white p-6 rounded-lg shadow-md mt-16">
        <img
          src="profile.png"
          alt="user profile"
          className="w-32 h-32 rounded-full border-4 border-white object-cover"
        />
        <div className="md:ml-6 text-center md:text-left">
          <h1 className="text-2xl font-bold">Hi, I'm [User Name]</h1>
          <p className="text-lg">UGC Content Creator Specializing in [Niche]</p>
           {/* Share Button */}
           <button
            onClick={shareProfile}
            className="mt-3 px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
          >
            Share Profile
          </button>
          <div className="flex space-x-3 justify-center md:justify-start mt-2">
            <i className="fab fa-twitter text-xl"></i>
            <i className="fab fa-tiktok text-xl"></i>
            <i className="fab fa-linkedin text-xl"></i>
            <i className="fab fa-instagram text-xl"></i>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-blue-700">Previous Work</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
  <div className="bg-white shadow-md p-4 rounded-lg">
    <video controls className="w-full rounded">
      <source src="unboxing.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <p className="text-center mt-2 font-medium">Unboxing</p>
  </div>

  <div className="bg-white shadow-md p-4 rounded-lg">
    <video controls className="w-full rounded">
      <source src="vlog.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <p className="text-center mt-2 font-medium">Vlog</p>
  </div>

  <div className="bg-white shadow-md p-4 rounded-lg">
    <video controls className="w-full rounded">
      <source src="review.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <p className="text-center mt-2 font-medium">Review</p>
  </div>

  <div className="bg-white shadow-md p-4 rounded-lg">
    <video controls className="w-full rounded">
      <source src="voiceover.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <p className="text-center mt-2 font-medium">Voiceover</p>
  </div>
</div>

      </div>

      {/* Why Work with Me Section */}
      <div className="mt-6 bg-blue-700 text-white p-6 rounded-lg">
        <h2 className="text-xl font-semibold">Why You'll Love Working with Me</h2>
        <ul className="list-disc mt-2 ml-6">
          <li>High-quality, engaging UGC tailored for brands</li>
          <li>Professional storytelling and brand voice alignment</li>
          <li>Quick turnaround and clear communication</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
