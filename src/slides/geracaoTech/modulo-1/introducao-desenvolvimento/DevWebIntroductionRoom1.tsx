import BaseSlide from "@/components/baseSlide/BaseSlide";
import WhoIAm from "@/components/slideWhoIAm/WhoIAm";
import { Box, Heading } from "@chakra-ui/react";
import picapau from "@/assets/picapau-biruta.jpg";
import logoGT from "@/assets/logo-gt.png";

const DevWebIntroductionRoom1 = () => {
  const aboutTheCourseTopics = [
    "Html",
    "Css",
    "git",
    "Lógica",
    "JavaScript",
    "React",
    "Node",
    "Express",
    "Banco de dados",
    "Testes",
  ];

  const howAreTheRooms = [
    "Teoria",
    "Exemplos",
    "Prática",
    "Mais prática",
    "Mais Prática ainda",
  ];

  const studantApresentationTopics = [
    "Seu nome;",
    "O que lhe até trouxe aqui;",
    "O que você gosta de fazer;",
    "O que mais lhe interessa no desenvolvimento web;",
    "Expectativas para o Curso.",
  ];
  return (
    <BaseSlide>
      <section>
        <ul className="*:list-none">
          <li>
            <Heading
              as="h3"
              position="relative"
              w="fit-content"
              _after={{
                content: "''",
                w: "20%",
                h: "1",
                bg: "cyan",
                position: "absolute",
                bottom: "0",
                left: "0",
              }}
            >
              Bem-vindos ao Geração Tech!{" "}
            </Heading>
          </li>
          <li className="flex w-full items-center justify-center">
            <Box w="10rem" as="div">
              <img
                src={logoGT}
                alt=""
                width="100%"
                className="animate-spin-2"
              />
            </Box>
          </li>
        </ul>
      </section>
      <WhoIAm />
      <section>
        <Heading
          as="h3"
          position="relative"
          w="fit-content"
          _after={{
            content: "''",
            w: "30%",
            h: "1",
            bg: "cyan",
            position: "absolute",
            bottom: "0",
            left: "0",
          }}
        >
          Sobre o curso:
        </Heading>
        <Heading
          as="h4"
          position="relative"
          w="fit-content"
          className="fragment"
          _after={{
            content: "''",
            w: "30%",
            h: "1",
            bg: "cyan",
            position: "absolute",
            bottom: "0",
            left: "0",
          }}
        >
          Como serão as aulas?
        </Heading>
        <Heading
          as="h4"
          position="relative"
          w="fit-content"
          className="fragment"
          _after={{
            content: "''",
            w: "30%",
            h: "1",
            bg: "cyan",
            position: "absolute",
            bottom: "0",
            left: "0",
          }}
        >
          O que aprenderemos?
        </Heading>
      </section>
      <section className="place-items-start" data-vertical-align-top>
        <Heading
          as="h4"
          position="relative"
          w="fit-content"
          className="fragment"
          _after={{
            content: "''",
            w: "30%",
            h: "1",
            bg: "cyan",
            position: "absolute",
            bottom: "0",
            left: "0",
          }}
        >
          As Aulas
        </Heading>
        <ul>
          {howAreTheRooms.map((room) => (
            <Box
              key={room}
              as="li"
              fontSize="4xl"
              className="fragment"
              _marker={{ color: "cyan" }}
            >
              {room}
            </Box>
          ))}
        </ul>
      </section>
      <section>
        <Heading
          as="h4"
          position="relative"
          w="fit-content"
          className="fragment"
          _after={{
            content: "''",
            w: "30%",
            h: "1",
            bg: "cyan",
            position: "absolute",
            bottom: "0",
            left: "0",
          }}
        >
          O que aprenderemos?
        </Heading>
      </section>
      <section>
        <ul>
          {aboutTheCourseTopics.map((topic) => (
            <Box
              key={topic}
              as="li"
              fontSize="4xl"
              className="fragment"
              _marker={{ color: "cyan" }}
            >
              {topic}
            </Box>
          ))}
        </ul>
      </section>
      <section>
        <Heading
          as="h3"
          position="relative"
          w="fit-content"
          _after={{
            content: "''",
            w: "30%",
            h: "1",
            bg: "cyan",
            position: "absolute",
            bottom: "0",
            left: "0",
          }}
        >
          Como estaremos no final do curso:
        </Heading>
      </section>
      <section className="place-items-center">
        <img src={picapau} alt="picapau" />
      </section>
      <section>
        <Heading
          as="h3"
          position="relative"
          w="fit-content"
          _after={{
            content: "''",
            w: "30%",
            h: "1",
            bg: "cyan",
            position: "absolute",
            bottom: "0",
            left: "0",
          }}
        >
          Agora é com vocês:
        </Heading>
        <ul>
          <Box
            as="li"
            fontSize="4xl"
            className="fragment"
            _marker={{ color: "cyan" }}
          >
            Faça uma breve apresentação sobre você:
            <ul>
              {studantApresentationTopics.map((topic) => (
                <Box
                  key={topic}
                  as="li"
                  fontSize="4xl"
                  className="fragment"
                  _marker={{ color: "cyan" }}
                >
                  {topic}
                </Box>
              ))}
            </ul>
          </Box>
        </ul>
      </section>
      <section>
        <Heading
          as="h3"
          position="relative"
          w="fit-content"
          _after={{
            content: "''",
            w: "30%",
            h: "1",
            bg: "cyan",
            position: "absolute",
            bottom: "0",
            left: "0",
          }}
        >
          Mas o que diacho é full stack?
        </Heading>
        <p>Antes de irmos para esse conceito vamos entender alguns tópicos</p>
      </section>
      <section>
        <Heading
          as="h3"
          position="relative"
          w="fit-content"
          _after={{
            content: "''",
            w: "30%",
            h: "1",
            bg: "cyan",
            position: "absolute",
            bottom: "0",
            left: "0",
          }}
        >
          A história da internet
        </Heading>
      </section>

      <section>
        <Heading as="h4">Como tudo começou?</Heading>
        <p>
          A internet surgiu a partir de um projeto militar chamado ARPANET na
          década de 1960.
        </p>
      </section>

      <section>
        <Heading as="h4">Principais marcos</Heading>
        <ul>
          <Box
            as="li"
            fontSize="4xl"
            className="fragment"
            _marker={{ color: "cyan" }}
          >
            1969 - Criação da ARPANET
          </Box>
          <Box
            as="li"
            fontSize="4xl"
            className="fragment"
            _marker={{ color: "cyan" }}
          >
            1983 - Surge o protocolo TCP/IP
          </Box>
          <Box
            as="li"
            fontSize="4xl"
            className="fragment"
            _marker={{ color: "cyan" }}
          >
            1989 - Tim Berners-Lee cria a World Wide Web
          </Box>
          <Box
            as="li"
            fontSize="4xl"
            className="fragment"
            _marker={{ color: "cyan" }}
          >
            1993 - O primeiro navegador web (Mosaic)
          </Box>
          <Box
            as="li"
            fontSize="4xl"
            className="fragment"
            _marker={{ color: "cyan" }}
          >
            2000+ - Expansão global da internet
          </Box>
        </ul>
      </section>

      <section>
        <Heading as="h4">A internet hoje</Heading>
        <p>
          Hoje a internet conecta bilhões de pessoas, possibilitando
          comunicação, negócios, entretenimento e muito mais.
        </p>
      </section>
      <section>
        <Heading as="h4">A internet hoje</Heading>
      </section>
    </BaseSlide>
  );
};

export default DevWebIntroductionRoom1;
