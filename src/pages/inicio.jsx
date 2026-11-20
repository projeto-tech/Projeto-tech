import { Link } from "react-router-dom";
import iconeConexao from "../assets/imgs/icone-conexao.png";
import heroCidade from "../assets/imgs/hero-cidade.png";
import botaoSolucao from "../assets/imgs/botao-solucao.png";
import Terminal from "../components/terminal";

const paragrafos = [
  "Para quem vive em uma comunidade remota, uma emergência de saúde pode significar horas, ou até dias, de viagem até o atendimento mais próximo.",
  [
    { t: "Tendo em vista que 119 povos indígenas vivem isolados no Brasil, sem contato permanente com a sociedade, uma das ameaças à saúde dessas comunidades é a " },
    { t: "vulnerabilidade imunológica a doenças infecciosas trazidas de fora", c: "destaque-ciano" },
    { t: ", que podem causar epidemias devastadoras e dizimar grupos inteiros em pouco tempo." },
  ],
  [
    { t: "A pergunta que faço a você é: " },
    { t: "“O que você faria se o posto de saúde mais próximo ficasse a horas de distância e a internet não chegasse até você?”", c: "destaque-rosa" },
  ],
  "Claro que muitas aldeias têm uma Starlink, mas imagine ter internet na sua comunidade e, ainda assim, não saber quantas horas de viagem separam você do atendimento de saúde. A conexão chegou. A informação para decidir, não.",
  "O Projeto tech, por meio da tecnologia, leva orientação de saúde e acesso a serviços para quem vive longe dos centros urbanos.",
];

function Inicio() {
  return (
    <div className="inicio">
      <header className="inicio__topo">
        <h1 className="inicio__titulo">
          Saúde e direitos ao alcance de quem vive longe
        </h1>
        <p className="inicio__subtitulo">
          Orientação de saúde e acesso a serviços, mesmo com internet limitada
        </p>
        <img className="inicio__icone" src={iconeConexao} alt="" />
      </header>

      <Terminal paragrafos={paragrafos} velocidade={15}>
        <p className="terminal__fonte">
          Referências:{" "}
          <a
            href="https://www.scielo.br/j/sausoc/a/FCbgWRhHQPs9TfxXkwZdqzh/?lang=pt"
            target="_blank"
            rel="noreferrer"
          >
            SciELO
          </a>,{" "}
          <a
            href="https://agenciabrasil.ebc.com.br/radioagencia-nacional/direitos-humanos/audio/2025-03/brasil-tem-119-povos-indigenas-vivendo-isolados"
            target="_blank"
            rel="noreferrer"
          >
            Agência Brasil
          </a>{" "}
          e{" "}
          <a
            href="https://www.nationalgeographicbrasil.com/meio-ambiente/2024/08/o-que-sao-povos-indigenas-isolados"
            target="_blank"
            rel="noreferrer"
          >
            National Geographic Brasil
          </a>.
        </p>
        <Link className="botao-solucao" to="/solucao">
          <img src={botaoSolucao} alt="Testar a simulação" />
        </Link>
      </Terminal>

      <img className="inicio__cidade" src={heroCidade} alt="" />
    </div>
  );
}

export default Inicio;
