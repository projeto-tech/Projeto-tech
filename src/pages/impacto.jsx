import heroCyberpun from "../assets/imgs/hero-cyberpunk.png";
import iconeLista from "../assets/imgs/icone-lista.png";
import Terminal from "../components/terminal";

const paragrafos = [
  "A triagem e orientação foi pensada para quem vive a horas ou dias do atendimento mais próximo.",
  "Ao indicar o nível de urgência, os cuidados iniciais e o caminho até a unidade de saúde, a ferramenta ajuda a família a decidir com mais segurança e mais cedo. O impacto esperado é reduzir deslocamentos desnecessários e antecipar a busca por atendimento nos casos graves, contribuindo para os ODS 3 e 10.",
  "Esse impacto pode ser acompanhado pelo tempo até a decisão, pelo número de orientações realizadas e pela proporção de casos urgentes identificados. A solução não faz diagnóstico: ela apoia a decisão, e o profissional de saúde continua sendo a referência.",
  "Este projeto foi feito como um desafio de inovação social, entregando uma solução de baixo custo, de fácil acesso e que pode ser replicada em diferentes contextos. A ideia é que a tecnologia seja uma aliada da saúde, especialmente para quem mais precisa.",
];

function Impacto() {
  return (
    <div className="impacto">
      <header className="impacto__topo">
        <h1 className="impacto__titulo">Os impactos do Projeto tech</h1>
        <p className="impacto__subtitulo">
          Como a solução muda a vida de quem vive longe dos centros urbanos
        </p>
        <img className="impacto__icone" src={iconeLista} alt="" />
      </header>

      <Terminal paragrafos={paragrafos} velocidade={15} />

      <img className="impacto__cidade" src={heroCyberpun} alt="" />
    </div>
  );
}

export default Impacto;
