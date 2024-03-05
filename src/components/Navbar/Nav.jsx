import { Link } from "react-router-dom";
import "../Styles.css/nav.css";

export default function Nav() {
  return (
    <div className="Navbar">
      {/* <h1 className="title">Portfolio</h1> */}
      <div class="logo">
        <span>Portfo</span>lio
      </div>

      <div className="links">
        <Link to="/Home">
          <button>Home</button>
        </Link>
        <Link to="/About">
          <button>About</button>
        </Link>
        <Link to="/Skill">
          <button>Skill</button>
        </Link>
        <Link to="/Project">
          <button>Project</button>
        </Link>
        <Link to="/Contact">
          <button>Contact</button>
        </Link>

        {/* <li><Link to="/Home"></Link>Home</li>
               <li><Link to="/About"></Link>About</li>
               <li><Link to="/Skill"></Link>Skill</li>
               <li><Link to="/Project"></Link>Project</li>
               <li><Link to="/Contact"></Link>Contact</li> */}
      </div>
    </div>
  );
}
