import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { caminho: "/", nome: "Início" },
  { caminho: "/solucao", nome: "Solução" },
  { caminho: "/impacto", nome: "Impacto" },
  { caminho: "/contato", nome: "Equipe" },
];

function Navbar() {
  const [aberto, setAberto] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-custom" aria-label="Navegação principal">
      <div className="container navbar-container">
        <Link className="navbar-brand" to="/" onClick={() => setAberto(false)}>
          Projeto tech
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="menu"
          aria-expanded={aberto}
          aria-label="Menu de navegação"
          onClick={() => setAberto(!aberto)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse navbar-menu${aberto ? " show" : ""}`} id="menu">
          <ul className="navbar-nav navbar-links">
            {links.map(({ caminho, nome }) => (
              <li className="nav-item" key={caminho}>
                <NavLink className="nav-link" to={caminho} end onClick={() => setAberto(false)}>
                  {nome}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
