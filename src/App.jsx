import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Inicio from "./pages/inicio.jsx";
import Solucao from "./pages/solucao.jsx";
import Impacto from "./pages/impacto.jsx";
import Contato from "./pages/contato.jsx";
import "./index.css";

function App() {
  const Router = window.location.protocol === "file:" ? HashRouter : BrowserRouter;

  function focarConteudo(evento) {
    evento.preventDefault();
    document.getElementById("conteudo-principal")?.focus();
  }

  return (
    <Router>
      <a className="skip-link" href="#conteudo-principal" onClick={focarConteudo}>
        Ir para o conteúdo principal
      </a>
      <Navbar />
      <main id="conteudo-principal" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/solucao" element={<Solucao />} />
          <Route path="/impacto" element={<Impacto />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
