import React, { useContext, useState } from "react";
import ReactMarkdown from "react-markdown";

import CardsContext from "../context/cards-context";

import CodeBlock from "./renderer/CodeBlock";
import Tag from "./Tag";

const Card = ({ card }) => {
  const { dispatch } = useContext(CardsContext);
  const [cardFlipped, setCardFlipped] = useState(false);

  const renderCardFace = () => {
    const cardSideFront = `
  # ${card.title}
  `;
    const cardSideBack = `
  # ${card.title}\n\n

  ${card.body}
  \`\`\`${card.language}
  ${card.code}
  \`\`\`
  `;

    return (
      <ReactMarkdown
        source={cardFlipped ? cardSideBack : cardSideFront}
        renderers={{ code: CodeBlock }}
      />
    );
  };

  return (
    <div
      className="card"
      tabIndex="0"
      onClick={() =>
        cardFlipped ? setCardFlipped(false) : setCardFlipped(true)
      }
    >
      <Tag language={card.language} />
      {renderCardFace()}
      <div className="button-container">
        <button
          onClick={() => dispatch({ type: "REMOVE_CARD", title: card.title })}
        >
          ✔
        </button>
      </div>
      <style jsx="true">
        {`
          .card {
            display: flex;
            flex-direction: column;
            padding: 1.5rem;
            border-radius: 15px;
            max-width: 100vw;
            min-width 16rem:
            background-color: #ecf0f3;
            box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #ffffff;
            margin-bottom: 3rem;
            cursor: pointer;
            transition: all 0.2s;
          }

          .card:hover {
            background-color: #fff;
            transform: translateY(-10px);
          }

          .card .button-container {
            display: flex;
            width: 100%;
            justify-content: center;
          }

          .card button {
            padding: 1rem;
            border-radius: 2rem;
            outline: none;
            border: none;
            cursor: pointer;
            background: linear-gradient(145deg, #fdffff, #d4d8db);
            box-shadow: 13px 13px 20px #b8bbbe, -13px -13px 20px #ffffff;
            margin: 1rem 1rem 0.5rem 1rem;
            width: 10rem;
            transition: all 1s;
          }

          .card button:hover {
            background-color: #fff;
          }

          .card p {
            line-height: 1.5;
            padding-bottom: 1rem;
            font-size: 1.2rem;
          }

          .card h1 {
            text-align: center;
          }
        `}
      </style>
    </div>
  );
};

export default Card;
