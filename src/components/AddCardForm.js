import React, { useState } from "react";

const AddCardForm = ({ dispatch }) => {
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [body, setBody] = useState("");
  const [code, setCode] = useState("");

  const addCard = (e) => {
    e.preventDefault();

    // Dispatch action ADD_CARD to reducer
    dispatch({
      type: "ADD_CARD",
      title,
      language,
      body,
      code,
    });

    // Clear input fields
    setTitle("");
    setLanguage("");
    setBody("");
    setCode("");
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={addCard}>
        <h3>Add Card</h3>
        <input
          className="placeholder"
          type="text"
          placeholder="Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="placeholder"
          type="text"
          placeholder="Language..."
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        />
        <input
          className="placeholder"
          type="text"
          placeholder="Body..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <textarea
          className="placeholder"
          name="code-block"
          placeholder="Code..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button>Add Card</button>
      </form>

      <style jsx="true">
        {`
          .form-wrapper {
            padding: 7rem 2rem;
            width: 100%;
            height: 100%:
          }

          form {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            font-size: 1rem;
            padding: 3.5rem 2rem 2rem 2rem;
            min-width: 16rem;
            border-radius: 2.5rem;
            background-color: #c8efc3;
            box-shadow: 13px 13px 20px #aacba6,
                        -13px -13px 20px #e6ffe0;
          }

          form h3 {
            text-align: center;
            font-size: 2rem;
            letter-spacing: 0.5px;
          }

          form input {
            height: 2rem;
            font-size: inherit;
          }

          form textarea {
            height: 8rem;
            font-size: inherit;
            font-family: inherit;
          }

          form input,
          form textarea {
            border: none;
            outline: none;
            background: none;
            color: #555;
            padding: 20px 10px 20px 5px;
            margin-bottom: 1.5rem;
            border-radius: 1rem;
            box-shadow: inset 8px 8px 8px #aacba6,
                        inset -8px -8px 8px #e6ffe0;
          }
          
          input.placeholder::placeholder,
          textarea.placeholder::placeholder {
            padding-left: 12px;
          }

          form button {
            font-size: 1rem;
            padding: 1rem;
            outline: none;
            border: none;
            cursor: pointer;
            border-radius: 2rem;
            font-weight: 700;
            font-family: 'Lato', sans-serif;
            font-size: 1.1rem;
            color: #fff;
            background-color: #98c5a6;
            box-shadow: 8px 8px 8px #aacba6,
                        -8px -8px 8px #e6ffe0;
            transition: all 0.3s;
          }

          form button:hover {
            background: #2fdbb6;
          }

          form button:active {
            background: #1da88a;
          }
        `}
      </style>
    </div>
  );
};

export { AddCardForm as default };
