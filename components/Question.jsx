import Categorize from "./Categorize";
import Cloze from "./Cloze";
import Comprehension from "./Comprehension";
import Mcq from "./Mcq/McqQuestion";

const Question = (props) => {
  console.log(props);
  const componentObj = {
    mcq: <Mcq quest={props.question} />,
    comprehension: <Comprehension quest={props.question} />,
    cloze: <Cloze quest={props.question} />,
    categorize: <Categorize quest={props.question} />,
  };

  return <>{componentObj[props.question.questionType]}</>;
};

export default Question;
