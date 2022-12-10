import { Container } from './App.styles';
import { Home } from './components/Home';
import { About } from './components/About';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <Container>
      <Sidebar />
      <main id ="main">
        <Home />
        <About />
      </main>
    </Container>
  );
}

export default App;
