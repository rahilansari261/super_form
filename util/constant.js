import Categorize from "@/components/Categorize";
import Cloze from "@/components/Cloze";
import Comprehension from "@/components/Comprehension";
import Mcq from "@/components/Mcq/McqQuestion";

export const ComponentArray = {
  mcq: <Mcq />,
  comprehension: <Comprehension mcqs={[{ id: "1" }]} />,
  cloze: <Cloze />,
  categorize: <Categorize />,
};
