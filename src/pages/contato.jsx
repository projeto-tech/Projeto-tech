import { useState } from "react";
import iconeLocalizacao from '../assets/imgs/icone-localizacao.png';

function Contato() {
  const [erros, setErros] = useState({});
  const [status, setStatus] = useState("");

  function editar(evento) {
    const { name } = evento.target;
    setErros((atuais) => ({ ...atuais, [name]: "" }));
    setStatus("");
  }

  function enviar(evento) {
    evento.preventDefault();
    const formulario = evento.currentTarget;
    const { nome, email, mensagem } = formulario.elements;
    const novosErros = {};

    if (!nome.value.trim()) novosErros.nome = "Informe seu nome.";
    if (!email.value.trim()) {
      novosErros.email = "Informe seu e-mail.";
    } else if (!email.validity.valid) {
      novosErros.email = "Informe um e-mail válido.";
    }
    if (!mensagem.value.trim()) novosErros.mensagem = "Escreva uma mensagem.";

    setErros(novosErros);
    const primeiroErro = Object.keys(novosErros)[0];
    if (primeiroErro) {
      setStatus("");
      formulario.elements.namedItem(primeiroErro).focus();
      return;
    }

    formulario.reset();
    setStatus("Mensagem validada. O envio foi apenas simulado.");
  }

  return (
    <div className="contato">
      <header className="contato__topo">
        <h1 className="contato__titulo">
          Equipe do Projeto Tech
        </h1>
        <p className="contato__subtitulo">
          Equipe envolvida no projeto:
        </p>
        <img className="contato__icone" src={iconeLocalizacao} alt="" />
      </header>
      <div className="contato__informacoes">
        <ul className="contato__lista">
            <li className="contato__integrante">Artur Iwasaki Lourenço - RM569149</li>
            <li className="contato__integrante">Rodrigo Arieira Alvarenga - RM572835</li>
            <li className="contato__integrante">Pedro Lopes Barros Batista - RM572324</li>
            <li className="contato__integrante">Lukas Farinchon - RM571512</li>      
        </ul>
        <p className="contato__descricao">
         Este é apenas um projeto acadêmico desenvolvido como parte do curso de Engenharia de Software, com o objetivo de aplicar os conhecimentos adquiridos em cada fase do curso. O projeto não tem fins comerciais e não representa uma solução oficial para problemas de saúde. A equipe envolvida no projeto é composta por estudantes do curso de Engenharia de Software, que se dedicaram a desenvolver uma solução inovadora para auxiliar na triagem e orientação de pacientes em áreas remotas.
        </p>
        <section className="contato__secao">
          <h2 className="contato__titulo-secundario">
            Dúvidas ou sugestões
          </h2>
          <p className="contato__subtitulo-secundario">
            Formulário de demonstração. Os dados ficam no navegador durante o preenchimento.
          </p>
          <form className="contato__formulario" onSubmit={enviar} onChange={editar} noValidate>
            <div className="contato__campo">
              <label htmlFor="contato-nome">Nome</label>
              <input id="contato-nome" name="nome" autoComplete="name" required
                aria-invalid={Boolean(erros.nome)} aria-describedby="contato-erro-nome" />
              <p id="contato-erro-nome" className="contato__erro" role="alert">{erros.nome}</p>
            </div>
            <div className="contato__campo">
              <label htmlFor="contato-email">E-mail</label>
              <input id="contato-email" name="email" type="email" autoComplete="email" required
                aria-invalid={Boolean(erros.email)} aria-describedby="contato-erro-email" />
              <p id="contato-erro-email" className="contato__erro" role="alert">{erros.email}</p>
            </div>
            <div className="contato__campo">
              <label htmlFor="contato-mensagem">Mensagem</label>
              <textarea id="contato-mensagem" name="mensagem" rows={5} required
                aria-invalid={Boolean(erros.mensagem)} aria-describedby="contato-erro-mensagem" />
              <p id="contato-erro-mensagem" className="contato__erro" role="alert">{erros.mensagem}</p>
            </div>
            <button type="submit" className="triagem__botao">Simular envio</button>
            <p className="contato__status" role="status">{status}</p>
          </form>
        </section>
      </div>
    </div>
  );
}
export default Contato;
