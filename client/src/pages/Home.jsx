import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Lockin Launchpad 🚀</h1>
      <nav>
        <ul>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
