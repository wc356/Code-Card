import React, { useState } from "react";
import Card from "./Card";

const CardsList = () => {
  const [cards, setCards] = useState([
    {
      title: `Frequeny Counters`,
      body: `Write a function called **same( )**, which accepts two arrays. The
      function should return true if every value in the array has its
      corresponding value squared in the second array. The frequency of
      values must be the same.`,
      code: `
      var React = require('react');
      var Markdown = require('react-markdown');
  
      React.render(
        <Markdown source="# Your markdown here" />,
        document.getElementById('content')
      );
      `,
    },
    { title: "Frequeny Counters", body: "", code: "" },
    { title: "Frequeny Counters", body: "", code: "" },
  ]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [code, setCode] = useState("");

  const addCard = (e) => {
    e.preventDefault();
    setCards([
      ...cards,
      {
        title,
        body,
        code,
      },
    ]);
    setTitle("");
    setBody("");
    setCode("");
  };

  return (
    <>
      <form onSubmit={addCard}>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <textarea
          name="code-block"
          placeholder="enter code block"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button>Add Card</button>
      </form>
      {cards.map((card) => (
        <Card title={card.title} body={card.body} code={card.code} />
      ))}
    </>
  );
};

export default CardsList;
