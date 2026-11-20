import { useState } from "react";
import { comunidades, situacoes } from "../data/solucao.js";
import { avaliar } from "../data/triagem";


const nomeUrgencia = { alta: "Alta", media: "Média", baixa: "Baixa" };

function Triagem() {
  const [comunidadeId, setComunidadeId] = useState("");
  const [situacaoId, setSituacaoId] = useState("");
  const [sinais, setSinais] = useState([]);
  const [erros, setErros] = useState({});
  const [resultado, setResultado] = useState(null);

  const situacao = situacoes.find((s) => s.id === Number(situacaoId));

  function mudarSituacao(evento) {
    setSituacaoId(evento.target.value);
    setSinais([]);
    setResultado(null);
  }

  function alternarSinal(sinal) {
    setSinais((atual) =>
      atual.includes(sinal) ? atual.filter((s) => s !== sinal) : [...atual, sinal]
    );
  }

  function enviar(evento) {
    evento.preventDefault();

    const novosErros = {};
    if (!comunidadeId) novosErros.comunidade = "Escolha a sua comunidade.";
    if (!situacaoId) novosErros.situacao = "Escolha o que você está sentindo.";
    setErros(novosErros);

    if (Object.keys(novosErros).length > 0) {
      setResultado(null);
      return;
    }

    const comunidade = comunidades.find((c) => c.id === Number(comunidadeId));
    setResultado(avaliar(comunidade, situacao, sinais));
  }

  return (
    <section className="triagem" aria-labelledby="titulo-triagem">
      <h2 id="titulo-triagem" className="triagem__titulo">Orientação de saúde</h2>

      <form className="triagem__form" onSubmit={enviar} noValidate>
        <div className="triagem__campo">
          <label htmlFor="comunidade">Comunidade</label>
          <select
            id="comunidade"
            value={comunidadeId}
            onChange={(e) => { setComunidadeId(e.target.value); setResultado(null); }}
            aria-describedby="erro-comunidade"
            aria-invalid={erros.comunidade ? "true" : "false"}
          >
            <option value="">Selecione</option>
            {comunidades.map((c) => (
              <option key={c.id} value={c.id}>{c.nome}</option>
            ))}
          </select>
          <p id="erro-comunidade" className="triagem__erro" role="alert">
            {erros.comunidade}
          </p>
        </div>

        <div className="triagem__campo">
          <label htmlFor="situacao">O que está acontecendo?</label>
          <select
            id="situacao"
            value={situacaoId}
            onChange={mudarSituacao}
            aria-describedby="erro-situacao"
            aria-invalid={erros.situacao ? "true" : "false"}
          >
            <option value="">Selecione</option>
            {situacoes.map((s) => (
              <option key={s.id} value={s.id}>{s.nome}</option>
            ))}
          </select>
          <p id="erro-situacao" className="triagem__erro" role="alert">
            {erros.situacao}
          </p>
        </div>

        {situacao && (
          <fieldset className="triagem__sinais">
            <legend>Marque se houver algum sinal de alerta</legend>
            {situacao.sinaisAlerta.map((sinal) => (
              <label key={sinal} className="triagem__opcao">
                <input
                  type="checkbox"
                  checked={sinais.includes(sinal)}
                  onChange={() => alternarSinal(sinal)}
                />
                {sinal}
              </label>
            ))}
          </fieldset>
        )}

        <button type="submit" className="triagem__botao">Ver orientação</button>
      </form>

      {resultado && (
        <article className={`resultado resultado--${resultado.urgencia}`} aria-live="polite">
          <p className="resultado__sucesso" role="status">
            Orientação gerada para {resultado.comunidade}.
          </p>
          <h3>Urgência: {nomeUrgencia[resultado.urgencia]}</h3>
          <p>{resultado.acao}</p>
          <p><strong>Cuidados iniciais:</strong> {resultado.orientacao}</p>
          <p><strong>Viagem até o atendimento:</strong> {resultado.viagem}</p>
          {resultado.viagemLonga && (
            <p>A viagem é longa. Saia o quanto antes e avise alguém da comunidade.</p>
          )}
          <p><strong>Leve:</strong> documento, cartão de vacina e os remédios que a pessoa usa.</p>
        </article>
      )}

      <p className="triagem__aviso">
        Esta ferramenta é uma demonstração para fins educacionais. As associações entre comunidades,
        trajetos, tempos e meios de transporte usadas na simulação são fictícias.
        Em caso de emergência, ligue 192 (SAMU).
      </p>
    </section>
  );
}

export default Triagem;
