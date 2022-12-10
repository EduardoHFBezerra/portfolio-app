import { Container } from "./styles";
import profileImage from "../../assets/images/profile-img.png";
import * as Icon from "react-bootstrap-icons";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const About = () => {
  return (
    <>
      <Container
        id="about"
        className="about"
      >
        <div className="container">
          <div className="pb-3">
            <h2>Sobre</h2>
            <p>
              Meu nome é Eduardo Bezerra! Sempre amei programação, e estou
              sempre em busca de estudar/aprender cada vez mais coisas novas!
              Sou Dev. Full Stack há mais de 10 anos, e sempre busco novos desafios.
              Sinta-se à vontade para entrar em contato ou dar uma olhada no meu
              trabalho.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-3">
              <AnimationOnScroll
                initiallyVisible={true}
                animateIn="animate__flip"
              >
                <img
                  src={profileImage}
                  className="img-fluid"
                  alt={profileImage}
                />
              </AnimationOnScroll>
            </div>
            <div className="col-lg-9 pt-4 pt-lg-0 content">
              <AnimationOnScroll
                delay={200}
                animateIn="animate__fadeInLeftBig"
              >
                <h3>Informações Pessoais</h3>
                <p className="fst-italic">
                  Estou sempre em busca de oportunidades desafiadoras que exigem
                  minhas habilidades, que proporcione desenvolvimento
                  profissional, experiências interessantes e crescimento
                  pessoal. Fala comigo, o papo é grátis!
                </p>
              </AnimationOnScroll>
              <div className="row">
                <div className="col-lg-6">
                  <AnimationOnScroll
                    delay={400}
                    animateIn="animate__fadeInRightBig"
                  >
                    <ul>
                      <li>
                        <Icon.ChevronRight />
                        <strong>Data de Nascimento:</strong>
                        <span>30 Out 1995</span>
                      </li>
                      <li>
                        <Icon.ChevronRight />
                        <strong>Contato:</strong>
                        <span>+55 81 9.9928-8405</span>
                      </li>
                      <li>
                        <Icon.ChevronRight />
                        <strong>Cidade:</strong>
                        <span>Recife, BR</span>
                      </li>
                    </ul>
                  </AnimationOnScroll>
                </div>
                <div className="col-lg-6">
                  <AnimationOnScroll
                    delay={600}
                    animateIn="animate__fadeInRightBig"
                  >
                    <ul>
                      <li>
                        <Icon.ChevronRight />
                        <strong>Idade:</strong>
                        <span>27</span>
                      </li>
                      <li>
                        <Icon.ChevronRight />
                        <strong>E-mail:</strong>
                        <span>eduardohfbezerra@gmail.com</span>
                      </li>
                      <li>
                        <Icon.ChevronRight />
                        <strong>Freelancer:</strong>
                        <span>Disponível</span>
                      </li>
                    </ul>
                  </AnimationOnScroll>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};