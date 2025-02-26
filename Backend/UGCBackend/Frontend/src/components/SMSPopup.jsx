import { useState } from "react";
import axios from "axios";

const SMSPopup = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResponse(null);

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/send_sms/", {
        phone_number: phoneNumber,
        message: message,
      });
      setResponse(res.data);
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div>
      <h2>Send SMS</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
      {response && <p>Response: {JSON.stringify(response)}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default SMSPopup;