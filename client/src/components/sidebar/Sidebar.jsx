import { Link } from "react-router-dom";
import "./sidebar.css";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  });

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/1557652/pexels-photo-1557652.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <p>
          Hello! I'm Nalin Yadav, a fourth-year student at DTU (Delhi
          Technological University) pursuing a Bachelor's degree in Information
          Technology. I have a strong passion for competitive programming and
          enjoy the challenges it presents. As a full-stack developer, I have
          honed my skills in both front-end and back-end development, allowing
          me to create complete solutions. I am particularly drawn to
          problem-solving and thrive on tackling complex issues that require
          analytical thinking and innovative approaches
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <li className="sidebarListItem">
              <Link className="link" to="/posts?cat=Life">
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <Link to="https://www.linkedin.com/in/nalin05/">
            <i className="fab fa-linkedin sidebarIcon"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
