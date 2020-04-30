import React, { useState } from "react";

const AddCardForm = ({ dispatch }) => {
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [body, setBody] = useState("");
  const [code, setCode] = useState("");

  const addCard = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_CARD",
      title,
      language,
      body,
      code,
    });
    setTitle("");
    setLanguage("");
    setBody("");
    setCode("");
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={addCard}>
        <input
          type="text"
          placeholder="enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="enter Language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        />
        <input
          type="text"
          placeholder="enter Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <textarea
          name="code-block"
          placeholder="enter Code..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button>Add Card</button>
      </form>
      <style jsx>
        {`
          .form-wrapper {
            padding: 1.5rem;
            width: 100%;
            background-image: linear-gradient(
              0deg,
              #695af5 0%,
              #ff99cc 74%,
              white 100%;
            );
            height: 100%:
          }

          form {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            font-size: 1rem;
            padding: 3.5rem 2rem 2rem 2rem;
            border-radius: 2.5rem;
            background: #ecf0f3;
            box-shadow: 13px 13px 20px #cbced1,
                        -13px -13px 20px #ffffff;
          }

          form input {
            height: 2rem;
            font-size: inherit;
          }

          form textarea {
            min-width: 15rem;
            height: 8rem;
            font-size: inherit;
          }

          form button {
            font-size: 1rem;
            padding: 1rem;
            background-color: lightgray;
          }
        `}
      </style>
    </div>
  );
};

export { AddCardForm as default };
