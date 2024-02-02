import React, { useState } from "react";
import Question from "./Question";
import quiz from "../data/quiz";

function App() {
  const [questions, setQuestions] = useState(quiz);
  const [currentQuestionId, setCurrentQuestion] = useState(1);
  const [score, setScore] = useState(0);

  function addQuestion() {
    const newQuestion = {
      id: questions.length + 1,
      text: "New question",
      answers: [
        { id: 1, text: "Answer 1", correct: false },
        { id: 2, text: "Answer 2", correct: true },
        { id: 3, text: "Answer 3", correct: false },
        { id: 4, text: "Answer 4", correct: false },
      ],
    };
    setQuestions(prevQuestions => [...prevQuestions, newQuestion]);
  }

  const currentQuestion = questions.find((q) => q.id === currentQuestionId);

  function handleQuestionAnswered(correct) {
    if (currentQuestionId < questions.length) {
      setCurrentQuestion((currentQuestionId) => currentQuestionId + 1);
    } else {
      setCurrentQuestion(null);
    }
    if (correct) {
      setScore((score) => score + 1);
    }
  }

  return (
    <main>
      <section>
        {currentQuestion ? (
          <Question
            question={currentQuestion}
            onAnswered={handleQuestionAnswered}
          />
        ) : (
          <>
            <h1>Game Over</h1>
            <h2>Total Correct: {score}</h2>
          </>
        )}
      </section>
      <button onClick={addQuestion}>Add Question</button>
    </main>
  );
}

export default App;