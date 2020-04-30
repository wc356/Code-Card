import React from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../components/renderer/CodeBlock";
import Tag from "../components/Tag";

const Card = ({ card, removeCard }) => {
  const input = `
  # ${card.title}\n\n

  ${card.body}
  \`\`\`${card.language}
  ${card.code}
  \`\`\`
  `;

  return (
    <div className="card">
      <Tag language={card.language} />
      <ReactMarkdown source={input} renderers={{ code: CodeBlock }} />
      <button onClick={() => removeCard(card.title)}>X</button>
      <style jsx>
        {`
          .card {
            display: flex;
            flex-direction: column;
            padding: 1.5rem;
            border-radius: 15px;
            background-color: lightgray;
            max-width: 100vw;
          }

          .card button {
            padding: 1rem;
          }

          .card p {
            line-height: 1.5;
            padding-bottom: 1rem;
            font-size: 1.2rem;
          }
        `}
      </style>
    </div>
  );
};

export default Card;
