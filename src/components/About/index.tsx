import { Section } from "./styles";
import profileImage from "../../assets/images/profile-img.png";
import * as Icon from "react-bootstrap-icons";

export const About = () => {
  return (
    <>
      <Section id="about" className="about">
        <div className="container">
          <div className="pb-3">
            <h2>Sobre</h2>
            <p>
              Eu sou Eduardo Bezerra! Sempre amei programação, além de estudar/aprender cada vez mais coisas novas! Sinta-se à vontade para entrar em contato ou dar uma olhada no meu trabalho.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-3">
              <img
                src={profileImage}
                className="img-fluid"
                alt={profileImage}
              />
            </div>
            <div className="col-lg-9 pt-4 pt-lg-0 content">
              <h3>Informações Pessoais</h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <Icon.ArrowRightCircleFill /> <strong>Birthday:</strong>{" "}
                      <span>1 May 1995</span>
                    </li>
                    <li>
                      <Icon.ArrowRightCircleFill /> <strong>Website:</strong>{" "}
                      <span>www.example.com</span>
                    </li>
                    <li>
                      <Icon.ArrowRightCircleFill /> <strong>Phone:</strong>{" "}
                      <span>+123 456 7890</span>
                    </li>
                    <li>
                      <Icon.ArrowRightCircleFill /> <strong>City:</strong>{" "}
                      <span>New York, USA</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <Icon.ArrowRightCircleFill /> <strong>Age:</strong>{" "}
                      <span>30</span>
                    </li>
                    <li>
                      <Icon.ArrowRightCircleFill /> <strong>Degree:</strong>{" "}
                      <span>Master</span>
                    </li>
                    <li>
                      <Icon.ArrowRightCircleFill /> <strong>PhEmailone:</strong>{" "}
                      <span>email@example.com</span>
                    </li>
                    <li>
                      <Icon.ArrowRightCircleFill /> <strong>Freelance:</strong>{" "}
                      <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};
