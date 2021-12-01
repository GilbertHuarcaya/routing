import "./App.css";
import { Link, Outlet, useLocation } from "react-router-dom";

function App() {
  return (
    <section className="app">
      <nav className="nav">
        <Link
          to="/home"
          className={useLocation().pathname === "/home" ? "pressed" : ""}>
          Home
        </Link>
        <Link
          to="/about"
          className={useLocation().pathname === "/about" ? "pressed" : ""}>
          About
        </Link>
        <Link
          to="/pricing"
          className={useLocation().pathname === "/pricing" ? "pressed" : ""}>
          Pricing
        </Link>
      </nav>
      <Outlet />
    </section>
  );
}

export default App;
