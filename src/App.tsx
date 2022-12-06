import { Container } from './App.styles';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { About } from './components/About';
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Home />
        <main id="main">
          <About />
        </main>
      </Container>
    </BrowserRouter>
  );
}

export default App;
