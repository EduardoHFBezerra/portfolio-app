import { Section, FadeIn } from "./styles";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export const Home = () => {
  // Create Ref element.
  const el = useRef(null!);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["I'm a Full Stack Developer", "I Love Software Development", "I Love to code"],
      startDelay: 500,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 200,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Section
      id="home"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <FadeIn className="home-container">
        <h1>Eduardo Bezerra</h1>
        <p>
          <span ref={el}></span>
        </p>
      </FadeIn>
    </Section>
  );
};
