# Projeto Tech — CitizenTech

Projeto acadêmico da Global Solution 2026/2 da FIAP, alinhado ao ODS 3 — Saúde e Bem-Estar. A aplicação apresenta um terminal interativo de orientação educativa para comunidades afastadas dos centros urbanos.

O projeto é uma demonstração. Ele não realiza diagnóstico médico, não substitui profissionais de saúde e não possui integração real com serviços de atendimento. Os trajetos e tempos usados na simulação são fictícios.

## Funcionalidades

- Quatro páginas: Início, Solução, Impacto e Equipe.
- Navegação responsiva com indicação da página atual.
- Simulação renderizada pelo DOM a partir de 10 comunidades e 10 situações.
- Formulário de contato com validação e mensagens exibidas na própria página.
- Recursos de acessibilidade, incluindo navegação semântica, rótulos de formulário, mensagens associadas aos campos, foco visível, link para pular ao conteúdo e suporte a movimento reduzido.
- Layout adaptado para celulares, tablets e computadores.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- React
- React Router
- Bootstrap
- Vite

## Como executar

É necessário ter o Node.js instalado.

```bash
npm ci
npm run dev
```

O terminal mostrará o endereço local da aplicação, normalmente **http://localhost:5173**.

## Verificações

```bash
npm run lint
npm run build
```

O comando de build gera uma versão independente em **dist/index.html**. Os estilos, scripts e imagens necessários para a interface são incorporados ao HTML.

Para testar a versão final, abra **dist/index.html** diretamente pelo explorador de arquivos. Nessa modalidade, a navegação utiliza a parte após **#** no endereço para manter as quatro páginas funcionando sem servidor.

## Estrutura principal

```text
src/
  assets/       imagens do projeto
  components/   navegação, terminal e simulação
  data/         dados e regras da simulação
  pages/        páginas da aplicação
scripts/
  build.mjs     geração do HTML compilado independente
```

## Equipe

- Artur Iwasaki Lourenço — RM569149
- Rodrigo Arieira Alvarenga — RM572835
- Pedro Lopes Barros Batista — RM572324
- Lukas Farinchon — RM571512

## Fontes

- [SciELO — desafios e iniquidades na assistência à saúde indígena](https://www.scielo.br/j/sausoc/a/FCbgWRhHQPs9TfxXkwZdqzh/?lang=pt)
- [Agência Brasil — Brasil tem 119 povos indígenas vivendo isolados](https://agenciabrasil.ebc.com.br/radioagencia-nacional/direitos-humanos/audio/2025-03/brasil-tem-119-povos-indigenas-vivendo-isolados)
- [National Geographic Brasil — o que são povos indígenas isolados](https://www.nationalgeographicbrasil.com/meio-ambiente/2024/08/o-que-sao-povos-indigenas-isolados)
