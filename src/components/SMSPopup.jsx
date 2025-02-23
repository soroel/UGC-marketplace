import { useState } from "react";
import { Button } from "./ui/button";

export default function SMSPopup({ showPopup, setShowPopup, setPhoneNumber }) {
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    setPhoneNumber(phone);
    localStorage.setItem("hasSeenPopup", "true");
    setShowPopup(false);
    console.log("Phone Number Submitted: ", phone);
  };

  if (!showPopup) return null; // Hide popup if showPopup is false

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-xl font-bold mb-4">Get Job Updates via SMS</h2>
        <p className="text-gray-600 mb-4">Enter your phone number to receive job alerts.</p>
        <input
          type="tel"
          placeholder="Enter phone number"
          className="w-full p-2 border rounded-md mb-4"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <div className="flex justify-between">
          <Button onClick={() => setShowPopup(false)} variant="outline">
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Okay</Button>
        </div>
      </div>
    </div>
  );
}
