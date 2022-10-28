//Packages
import { useState, useEffect } from "react";

//Component
function QuestionComponent(props) {
  const [question, setQuestion] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const [questionType, setQuestionType] = useState("");

  //Init 
  useEffect(() => {
    if (props.question) {
      setQuestion(props.question);
    }
    if (props.answers) {
      setAnswers(props.answers);
    }
    if (props.selectedAnswer) {
      setSelectedAnswer(props.selectedAnswer);
    }
    if (props.questionType) {
      setQuestionType(props.questionType);
    }
  }, []);

  return null;
}

export default QuestionComponent;
