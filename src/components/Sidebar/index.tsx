import { Container } from "./styles";
import profileImage from "../../assets/images/profile-img.png";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import { useState } from "react";
import { NavItem } from '../../model/sidebar';

export const Sidebar = () => {
  const [active, setActive] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const ToggleSidebar = () => {
      setIsOpen(!isOpen);
  }

  const links: NavItem[] = [
    {to: "/home", name: "Início", icon: <Icon.HouseDoorFill />, section: "home"},
    {to: "/about", name: "Sobre", icon: <Icon.PersonFill />, section: "about"},
    {to: "/resume", name: "Resumo", icon: <Icon.FileEarmarkFill />, section: "resume"}
  ];

  return (
    <>
      {isOpen ?
        <Icon.X
          className="mobile-nav-toggle d-lg-none"
          onClick={ToggleSidebar}
        />
        :
        <Icon.List
          className="mobile-nav-toggle d-lg-none"
          onClick={ToggleSidebar}
        />
      }

      <Container isOpen={isOpen} className={isOpen ? 'active' : ''}>
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
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    onClick={() => {
                      setActive(index);
                      let section = document.getElementById(`${link.section}`);
                      section && section.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className={`nav-link ${active === index ? 'active' : ''}`}
                  >
                    {link.icon} <span>{link.name}</span>
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