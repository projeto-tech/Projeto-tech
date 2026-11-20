import image from "../assets/imgs/divisor.png";
import iconesaude from "../assets/imgs/icone-saude.png";
import Triagem from "../components/triagem";

function Solucao() {
  return (
    <div className="solucao">
      <header className="solucao__topo">
        <h1 className="solucao__titulo">
          Orientação de saúde para quem vive longe
        </h1>
        <p className="solucao__subtitulo">
          Saiba o que fazer, quanto tempo leva a viagem e o que levar antes de sair da sua comunidade.
        </p>
        <img className="solucao__icone" src={iconesaude} alt="Ícone de saúde" />
      </header>
      <p className="solucao__conteudo">
        A triagem e orientação é uma ferramenta simples que ajuda o morador de uma comunidade isolada a decidir o que fazer quando alguém passa mal. Hoje ela funciona com regras claras e dados organizados. Com o avanço das inteligências artificiais, ela poderá evoluir para entender melhor cada situação, orientar em diferentes idiomas e funcionar com pouca conexão. Em qualquer cenário, ela não faz diagnóstico e não substitui um profissional de saúde: ela indica o nível de urgência, os cuidados iniciais e o caminho até o atendimento.
      </p>
      <img className="solucao__divisor" src={image} alt="Divisor" />
      <section className="solucao__secao">
        <h2 className="solucao__titulo-secundario">
          Simulação
        </h2>
        <p className="solucao__subtitulo-secundario">
            Aqui nesta simulação colocamos apenas algumas das comunidades indígenas isoladas do Brasil. A ideia é que a triagem e orientação de saúde funcione para qualquer comunidade isolada, em qualquer lugar do mundo.
        </p>
        <Triagem />
      </section>
    </div>
  );
}
export default Solucao;
