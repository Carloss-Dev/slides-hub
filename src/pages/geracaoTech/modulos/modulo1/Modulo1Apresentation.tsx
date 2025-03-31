import BaseSlide from "@/components/baseSlide/BaseSlide";
import { Box } from "@chakra-ui/react";

interface ITopics {
  id: number;
  content: string;
}
const Modulo1Apresentation = () => {
  const topics: ITopics[] = [
    {
      id: 1,
      content: "Introdução",
    },
  ];
  return (
    <BaseSlide>
      <section>
        <h3>Módulo 1 </h3>
      </section>
      <Box as="section" style={{ display: "flex" }}>
        <ul>
          {topics.map((topic) => (
            <Box as="li" key={topic.id} _marker={{ color: "cyan" }}>
              {topic.content}
            </Box>
          ))}
        </ul>
      </Box>
    </BaseSlide>
  );
};

export default Modulo1Apresentation;
