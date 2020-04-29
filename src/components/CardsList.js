import React, { useState } from "react";

const CardsList = () => {
  const [cards, setCards] = useState([
    { title: "Frequeny Counters", body: "", code: "" },
    { title: "Frequeny Counters", body: "", code: "" },
    { title: "Frequeny Counters", body: "", code: "" },
  ]);

  `
  # ${title}\n\n

  ${body}
  \`\`\`js
  ${code}
  \`\`\`
  `;

  const input = `
  # Frequency Counters\n\n

  Write a function called **same( )**, which accepts two arrays. The
  function should return true if every value in the array has its
  corresponding value squared in the second array. The frequency of
  values must be the same.
  \`\`\`js
  var React = require('react');
  var Markdown = require('react-markdown');
  
  React.render(
    <Markdown source="# Your markdown here" />,
    document.getElementById('content')
  );
  \`\`\`
  `;

  render(
    <>
      {cards.map((card) => (
        <Card title={} body={} code={} />
      ))}
    </>
  );
};

export default CardsList;
