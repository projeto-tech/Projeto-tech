import { useState, useEffect } from "react";

const normalizar = (p) => (typeof p === "string" ? [{ t: p }] : p);
const textoPlano = (p) => normalizar(p).map((s) => s.t).join("");

function parcial(p, quantas) {
  let resto = quantas;
  return normalizar(p).map((seg, k) => {
    const parte = seg.t.slice(0, Math.max(resto, 0));
    resto -= seg.t.length;
    if (!parte) return null;
    return (
      <span key={k} className={seg.c}>
        {parte}
      </span>
    );
  });
}

function Terminal({
  paragrafos,
  prompt = "c:\\projeto-tech>",
  velocidade = 15,
  classeSecao = "terminal",
  classeCorpo = "terminal__corpo",
  classePrompt = "terminal__prompt",
  children,
}) {
  const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [linha, setLinha] = useState(reduzir ? paragrafos.length : 0);
  const [letras, setLetras] = useState(0);

  useEffect(() => {
    if (linha >= paragrafos.length) return;
    const total = textoPlano(paragrafos[linha]).length;
    const fim = letras >= total;

    const id = setTimeout(
      () => {
        if (!fim) {
          setLetras(letras + 1);
        } else {
          setLinha(linha + 1);
          setLetras(0);
        }
      },
      fim ? 300 : velocidade
    );

    return () => clearTimeout(id);
  }, [linha, letras, velocidade, paragrafos]);

  const ultima = Math.min(linha, paragrafos.length - 1);

  return (
    <section className={classeSecao} aria-label="Apresentação do projeto">
      <div className={classeCorpo}>
        {paragrafos.map((p, i) => {
          if (i > linha) return null;
          return (
            <p key={i} aria-hidden="true">
              {i === 0 && <span className={classePrompt}>{prompt}</span>}{" "}
              {parcial(p, i < linha ? Infinity : letras)}
              {i === ultima && <span className="terminal__cursor"></span>}
            </p>
          );
        })}

        <div className="terminal__leitor">
          {paragrafos.map((p, i) => (
            <p key={i}>{textoPlano(p)}</p>
          ))}
        </div>

        {children}
      </div>
    </section>
  );
}

export default Terminal;
