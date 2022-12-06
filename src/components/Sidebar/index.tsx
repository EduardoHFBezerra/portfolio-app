import { Container } from "./styles";
import profileImage from "../../assets/images/profile-img.png";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import { useState } from "react";
import { NavItem } from '../../types/navItem';

export const Sidebar = () => {
  const [active, setActive] = useState(1);
  const [links, setLink] = useState<NavItem[]>([
    { 
      id: 1,
      to: "/home",
      text: "Início",
      icon: <Icon.HouseDoorFill />,
      section: "home"
    },
    {
      id: 2,
      to: "/about",
      text: "Sobre",
      icon: <Icon.PersonFill />,
      section: "about"
    },
    {
      id: 3,
      to: "/resume",
      text: "Resumo",
      icon: <Icon.FileEarmarkFill />,
      section: "resume"
    }
  ]);

  return (
    <>
      <Icon.MenuAppFill className="bi mobile-nav-toggle d-xl-none bi-list" />

      <Container>
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src={profileImage}
              alt={profileImage}
              className="img-fluid rounded-circle"
            />
            <h1>
              <a href="/" className="text-white text-decoration-none">
                Eduardo Bezerra
              </a>
            </h1>
            <div className="social-links mt-3 text-center">
              <a href="https://www.instagram.com/eduardonovilla/" target="_blank" rel="noreferrer">
                <Icon.Instagram />
              </a>
              <a href="https://www.linkedin.com/in/eduardo-bezerra-8a6400245/" target="_blank" rel="noreferrer">
                <Icon.Linkedin />
              </a>
              <a href="https://github.com/EduardoHFBezerra" target="_blank" rel="noreferrer">
                <Icon.Github />
              </a>
            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar">
            <ul>
              {links.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.to}
                    onClick={() => {
                      setActive(link.id);
                      let section = document.getElementById(`${link.section}`);
                      section && section.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className={`nav-link ${active === link.id ? 'active' : ''}`}
                  >
                    {link.icon} <span>{link.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </>
  );
};