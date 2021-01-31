import React from "react";
import styles from "./ActiveQuestion.module.css";

export default function ActiveQuestion({
  activeAnswer,
  handleClick,
  questionsLength,
}) {
  return (
    <div
      className={styles.questions}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <p style={{ marginTop: "1rem", fontSize: "1.1rem" }}>
        Вопрос {activeAnswer.id + 1} из {questionsLength}
      </p>
      <p
        style={{
          marginBottom: "20px",
          marginTop: "1rem",
          textAlign: "center",
          fontSize: "1.5rem",
        }}
      >
        {activeAnswer.question}
      </p>
      {activeAnswer.answers.map((elem, index) => (
        <p
          className={styles.question}
          key={index}
          onClick={() => handleClick(elem)}
          style={{ padding: "5px" }}
        >
          {elem.text}
        </p>
      ))}
    </div>
  );
}
