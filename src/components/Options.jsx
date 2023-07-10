import { useQuiz } from "../context/QuizContext";

function Options() {
  const { questions, dispatch, index, answer } = useQuiz();
  const curQuestion = questions.at(index);
  const hasAnswer = answer !== null;
  return (
    <div className="options">
      {curQuestion.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswer
              ? index === curQuestion.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswer}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
