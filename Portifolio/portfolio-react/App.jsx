import Header from "./components/Header";
import Sobre from "./components/Sobre";
import Projects from "./components/Projects";
import "./css/style.css";

function App() {
  return (
    <>
      <Header />
      
      <main>
        <Sobre />
        <Projects />
      </main>

      <footer>
        <p>© 2026 - Meu Nome</p>
      </footer>
    </>
  );
}

export default App;