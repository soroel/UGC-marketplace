import { useState } from "react";

export default function SMSPopup({ showPopup, setShowPopup }) {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async () => {
    const trimmedPhone = phone.trim();
    if (!trimmedPhone) {
      setError("Phone number is required");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/sms/send-sms/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ phone: trimmedPhone }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("SMS sent successfully!");
        setPhone(""); // Clear input field
        setTimeout(() => setShowPopup(false), 2000);
      } else {
        setError(data.error || "Failed to send SMS. Please try again.");
      }
    } catch (error) {
      setError("Something went wrong! Check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-xl font-bold mb-4">Get Job Updates via SMS</h2>
        <p className="text-gray-600 mb-4">Enter your phone number to receive job alerts.</p>
        <input
          type="tel"
          placeholder="Enter phone number"
          className="w-full p-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          autoFocus
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-500 text-sm">{success}</p>}
        <div className="flex justify-between mt-4">
          <button onClick={() => setShowPopup(false)} disabled={loading} className="px-4 py-2 bg-gray-300 rounded">
            Cancel
          </button>
          <button onClick={handleSubmit} disabled={loading} className="px-4 py-2 bg-blue-500 text-white rounded">
            {loading ? "Sending..." : "Okay"}
          </button>
        </div>
      </div>
    </div>
  );
}
