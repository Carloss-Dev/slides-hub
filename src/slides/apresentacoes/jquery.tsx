import BaseSlide from "@/components/baseSlide/BaseSlide";
import CodeBlock from "@/components/codeBlock/CodeBlock";
import { Heading } from "@chakra-ui/react";
import dogsClab from "./assets/dogs-clap.gif";
import chicken from "./assets/galo-vinho.gif";

const JQueryApresentationSlide = () => {
  function renderHTMLAjaxCode() {
    return `
  <!-- Navegador controla -->

  <form 
    action="/user/create" 
    method="POST">
    <input name="email">
    <button>Submit</button>
  </form>
    `;
  }

  function renderFetchAjaxCode() {
    return `
  // Js controla

  fetch("/user/create", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      Content: "application/json"
    }
  })
    `;
  }

  function renderXMLHtttpRequest() {
    return `
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.exemplo.com/dados", true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log("Resposta:", xhr.responseText);
    }
  };

  xhr.send();
    `;
  }

  function renderAjaxRequest() {
    return `
  // Com JQuery

  $.ajax({
    url: "/user/create",
    method: "POST",
    data: { nome: "Carlos" },
    success: function (resposta) {
      console.log("Sucesso!", resposta);
    },
  });
    `;
  }

  function renderJqueryError() {
    return `
  // Tudo em um só script
  $(".btn").click(() => {
    const nome = $("#nome").val();
    $("#resposta").text("Olá " + nome);
    // Validação inline, sem modularização
  });
    `;
  }

  return (
    <BaseSlide>
      <section data-background-color="white">
        <Heading as="h2">JQuery: o futuro do passado</Heading>
      </section>
      <section data-background-color="white">
        <Heading as="h3">
          Me senti um gênio escrevendo esse título, então... aplausos
        </Heading>

        <div className="flex items-center justify-center">
          <img src={dogsClab} alt="" />
        </div>
      </section>
      <section data-background-color="white">
        <Heading as="h3">Indo para o que importa...</Heading>
        <Heading as="h4">O que veremos hoje?</Heading>
        <ul>
          <li className="fragment">O que é JQuery</li>
          <li className="fragment">Qual foi sua importância</li>
          <li className="fragment">
            Pontos positivos e negativos da utilização dele em projetos antigos
            e atuais
          </li>
          <li className="fragment">Aplicação no clube do vinho</li>
        </ul>
      </section>
      <section>
        <Heading as="h3">O que é JQuery?</Heading>
        <p>
          "jQuery is a fast, small, and feature-rich JavaScript library. It
          makes things like HTML document traversal and manipulation, event
          handling, animation, and Ajax much simpler with an easy-to-use API
          that works across a multitude of browsers. With a combination of
          versatility and extensibility, jQuery has changed the way that
          millions of people write JavaScript."
        </p>
      </section>
      <section data-background-color="white">
        <Heading as="h2">Ou Seja</Heading>
        <Heading as="h3">Ele melhorava: </Heading>
        <ul>
          <li className="fragment">Integração entre diferentes navegadores</li>
          <li className="fragment">Manipulação de elementos do DOM</li>
          <li className="fragment">
            Manipulação de classes, atributos, estilos e conteúdo
          </li>
          <li className="fragment">Criação de animações simples</li>
          <li className="fragment">
            Fazer requisições <span className="underline">AJAX</span>
          </li>
        </ul>
      </section>
      <section data-background-color="white" data-align="top">
        <Heading as="h2">AJAX</Heading>
        <p>Asynchronous JavaScript XML</p>
        <ul>
          <li>
            Entregar o controle das requisições http para o JS e tirar do
            navegador
          </li>
        </ul>
        <ul className="w-full" style={{ display: "flex" }}>
          <li className="fragment w-full list-none">
            <CodeBlock theme={"dracula"} className="language-html">
              {renderHTMLAjaxCode()}
            </CodeBlock>
          </li>
          <li className="fragment w-full list-none">
            <CodeBlock theme={"dracula"} className="language-js">
              {renderFetchAjaxCode()}
            </CodeBlock>
          </li>
        </ul>
      </section>
      <section>
        <Heading as="h2">Porém...</Heading>
        <ul>
          <li className="fragment">
            Até <span className="underline">2015</span> não existia o
            <span> fetch( ) </span>
            que conhecemos hoje
          </li>
          <li className="fragment">Então como requisições HTTP eram feitas?</li>

          <li className="fragment w-full list-none">
            <CodeBlock theme={"gruvbox-light-medium"} className="language-js">
              {renderXMLHtttpRequest()}
            </CodeBlock>
          </li>
        </ul>
      </section>

      <section data-background-color="white">
        <Heading as="h2">Requisição com JQuery: </Heading>

        <CodeBlock theme={"dracula"} className="language-js">
          {renderAjaxRequest()}
        </CodeBlock>
      </section>
      <section data-background-color="white">
        <Heading as="h2"> Pontos negativos do JQuery</Heading>
        <ul>
          <li>Falta de estrutura e organização</li>
          <li className="fragment">Difícil trabalhar em equipe</li>
          <li className="fragment list-none">
            <CodeBlock theme={"dracula"} className="language-js">
              {renderJqueryError()}
            </CodeBlock>
          </li>
          <li className="fragment">Baixa reutilização de código</li>
        </ul>
      </section>
      <section data-background-color="white">
        <Heading as="h3">Agora vamos para a parte boa</Heading>
        <div className="flex justify-center">
          <img src={chicken} alt="" />
        </div>
      </section>
    </BaseSlide>
  );
};

export default JQueryApresentationSlide;
