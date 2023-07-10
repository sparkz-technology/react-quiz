import { useQuiz } from "../context/QuizContext";
import Options from "./Options";

function Question() {
  const { questions, index } = useQuiz();
  const curQuestion = questions.at(index);

  return (
    <div>
      <h4>{curQuestion.question}</h4>
      <Options />
    </div>
  );
}

export default Question;
