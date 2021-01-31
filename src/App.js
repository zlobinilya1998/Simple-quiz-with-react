import "./App.css";
import { useState, Fragment } from "react";

import ActiveQuestion from "./ActiveQuestion";

function App() {
  let [currentQuestion, setCurrentQuestion] = useState(0);
  let [userAnswers, setUserAnswers] = useState([]);
  let questions = [
    {
      id: 0,
      question: "Как вас зовут?",
      answers: [
        { text: "Илья", id: 1 },
        { text: "Федор", id: 2 },
        { text: "Емель", id: 3 },
      ],
      rightAnswer: 1,
    },
    {
      id: 1,
      question: "Сколько у вас рук?",
      answers: [
        { text: "Три", id: 1 },
        { text: "Две", id: 2 },
        { text: "Восемь", id: 3 },
      ],
      rightAnswer: 2,
    },
    {
      id: 2,
      question: "Зачем вы живёте?",
      answers: [
        { text: "Чтобы есть", id: 1 },
        { text: "Чтобы спать", id: 2 },
        { text: "Чтобы продолжить род", id: 3 },
      ],
      rightAnswer: 3,
    },
    {
      id: 3,
      question: "Чем играют в футбол?",
      answers: [
        { text: "Лицом", id: 1 },
        { text: "Ногами", id: 2 },
        { text: "Руками", id: 3 },
      ],
      rightAnswer: 2,
    },
    {
      id: 4,
      question: "Сколько стоит проезд в метро?",
      answers: [
        { text: "50 руб.", id: 1 },
        { text: "100 руб.", id: 2 },
        { text: "150 руб.", id: 3 },
      ],
      rightAnswer: 1,
    },
  ];

  let handleClick = (elem) => {
    if (currentQuestion !== questions.length) {
      setCurrentQuestion(++currentQuestion);
      setUserAnswers([...userAnswers, elem]);
    }
  };
  let allAnswersRight = () => {
    if (
      userAnswers.filter(
        (elem, index) => elem.id === questions[index].rightAnswer
      ).length === questions.length
    ) {
      return true;
    } else return false;
  };
  let endQuestions = () => {
    if (userAnswers.length === questions.length) {
      return true;
    } else return false;
  };
  let getRightAnswers = () =>
    userAnswers.filter(
      (elem, index) => elem.id === questions[index].rightAnswer
    ).length;
  return (
    <>
      <div
        style={{
          padding: "20px",
          background: "skyblue",
          width: "40%",
          margin: "40px auto",
          minHeight: "200px",
        }}
      >
        <div className="wrapper">
          {!endQuestions() && (
            <ActiveQuestion
              activeAnswer={questions[currentQuestion]}
              handleClick={handleClick}
              questionsLength={questions.length}
            />
          )}
          {endQuestions() && (
            <div>
              <p
                style={{
                  textAlign: "center",
                  marginBottom: "2rem",
                  fontSize: "1.5rem",
                }}
              >
                Результаты
              </p>
              <p style={{ marginBottom: "2rem", textAlign: "center" }}>
                Вы ответили правильно на {getRightAnswers()} из{" "}
                {questions.length} вопросов
              </p>
              {allAnswersRight() && (
                <p
                  style={{
                    fontSize: "1.2rem",
                    textAlign: "center",
                    marginBottom: "1rem",
                  }}
                >
                  Поздравляем, Вы ответили правильно на все вопросы!
                </p>
              )}
              {userAnswers.map((elem, index) => (
                <Fragment key={index}>
                  <p>{questions[index].question}</p>
                  <p
                    style={{
                      color:
                        elem.id === questions[index].rightAnswer
                          ? "green"
                          : "red",
                    }}
                  >
                    {elem.text}
                  </p>
                </Fragment>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
