import React, { useContext, useState } from "react";
import ReactMarkdown from "react-markdown";

import CardsContext from "../context/cards-context";
import CardsReviewContext from "../context/cards-review-context";

import CodeBlock from "./renderer/CodeBlock";
import Tag from "./Tag";

const Card = ({ card: { title, body, language, code } }) => {
  const { dispatch } = useContext(CardsContext);
  const {
    cardsMemorized,
    setCardsMemorized,
    cardsToReview,
    setCardsToReview,
  } = useContext(CardsReviewContext);
  const [cardFlipped, setCardFlipped] = useState(false);

  const CardFace = () => {
    const cardSideFront = `
  # ${title}
  `;
    const cardSideBack = `
  # ${title}\n\n

  ${body}
  \`\`\`${language}
  ${code}
  \`\`\`
  `;

    return (
      <>
        <ReactMarkdown
          source={cardFlipped ? cardSideBack : cardSideFront}
          renderers={{ code: CodeBlock }}
        />
        {cardFlipped && (
          <div className="button-container">
            <button
              onClick={() => {
                setCardsMemorized([
                  ...cardsMemorized,
                  { title, body, language, code },
                ]);
                dispatch({ type: "REMOVE_CARD", title });
              }}
            >
              <span id="correct" role="img" aria-label="button-correct">
                ✔️
              </span>
            </button>
            <button
              onClick={() => {
                setCardsToReview([
                  ...cardsToReview,
                  { title, body, language, code },
                ]);
                dispatch({ type: "REMOVE_CARD", title });
              }}
            >
              <h1 id="incorrect">X</h1>
            </button>
            <style jsx="true">
              {`
                .card .button-container {
                  display: flex;
                  width: 100%;
                  justify-content: center;
                }

                .card .button-container span {
                  font-size: 1.5rem;
                  font-weight: 900;
                }

                span#correct {
                  fill: green;
                }

                h1#incorrect {
                  color: red;
                  font-size: 1.7rem;
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
                }

                .card button:hover {
                  background: #fff;
                }
              `}
            </style>
          </div>
        )}
      </>
    );
  };

  return (
    <div
      className="card"
      onClick={() =>
        cardFlipped ? setCardFlipped(false) : setCardFlipped(true)
      }
    >
      <Tag language={language} />
      <CardFace />
      <style jsx="true">
        {`
          .card {
            display: flex;
            flex-direction: column;
            padding: 1.5rem;
            border-radius: 15px;
            max-width: 100vw;
            min-width: 16rem;
            min-height: 20rem;
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
