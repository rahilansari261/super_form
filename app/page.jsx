import Image from "next/image";
import Question from "@/components/Question";
import Mcq from "@/components/Mcq";
import Comprehension from "@/components/Comprehension";
import Cloze from "@/components/Cloze";
import Categorize from "@/components/Categorize";
export default function Home() {
  const questionArray = [{ quesNo: 1 }, { quesNo: 2 }];
  const mcqStyle = `rounded border border-gray-300`;
  return (
    <div>
      <Question>
        <Comprehension quiz={questionArray} mcqStyle={mcqStyle} />
      </Question>

       <Question>
        <Cloze />
      </Question>

      <Question>
        <Categorize />
      </Question> 
    </div>
  );
}
