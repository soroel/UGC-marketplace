import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/jobs">Jobs</Link>
      <p>Welcome to the dashboard</p>
    </div>
  );
}

export default Dashboard;