import { Box, Heading } from "@chakra-ui/react";
import fotoPadrao from "@/assets/foto-padrao.jpg";

const WhoIAm = () => {
  const topics = [
    "Ex geração Tech;",
    "Formado em JavaScript pelas ruas;",
    "Especialista em gambiarras;",
    "Front End Developer;",
    "Desenvolvedor Full Stack (Fiec).",
  ];

  return (
    <>
      <section>
        <Heading
          as="h3"
          position="relative"
          w="fit-content"
          className="fragment fade-in"
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
          Quem sou eu?{" "}
        </Heading>
      </section>
      <section data-vertical-align-top>
        <Box as="div" w="100%" h="100%" display="flex" gap="10">
          <Box>
            <Heading as="h3" className="fragment">
              Carlos Eduardo
            </Heading>
            <ul>
              {topics.map((topic) => (
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
          <Box w="20rem">
            <img src={fotoPadrao} alt="Foto de perfil" width="100%" />
          </Box>
        </Box>
      </section>
    </>
  );
};

export default WhoIAm;
