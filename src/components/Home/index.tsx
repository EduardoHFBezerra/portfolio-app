import { Section, FadeIn } from "./styles";
import Typed from "react-typed";

export const Home = () => {
  return (
    <Section
      id="home"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <FadeIn className="home-container">
        <h1>Eduardo Bezerra</h1>
        <p>
          <Typed
            strings={[
              "I'm a Full Stack Developer",
              "I Love Software Development",
              "I Love to code",
            ]}
            typeSpeed={100}
            backSpeed={40}
            loop
          />
        </p>
      </FadeIn>
    </Section>
  );
};
