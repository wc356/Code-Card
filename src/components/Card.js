import React, { useContext, useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

import CardsContext from "../context/cards-context";

import CodeBlock from "./renderer/CodeBlock";
import Tag from "./Tag";

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.pageX,
        y: e.pageY,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return position;
};

const Card = ({ card }) => {
  const { dispatch } = useContext(CardsContext);

  const position = useMousePosition();

  const input = `
    # ${card.title}\n\n

    ${card.body}
    \`\`\`${card.language}
    ${card.code}
    \`\`\`
    `;

  useEffect(() => {
    console.log(card);
  }, [card]);

  return (
    <div className="card">
      <Tag language={card.language} />
      <ReactMarkdown source={input} renderers={{ code: CodeBlock }} />
      <p>
        {position.x}, {position.y}
      </p>
      <button
        onClick={() => dispatch({ type: "REMOVE_CARD", title: card.title })}
      >
        X
      </button>
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
          }

          .card button {
            padding: 1rem;
            border-radius: 2rem;
            outline: none;
            border: none;
            cursor: pointer;
            background: linear-gradient(145deg, #fdffff, #d4d8db);
            box-shadow: 13px 13px 20px #b8bbbe, -13px -13px 20px #ffffff;
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
