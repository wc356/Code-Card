import React, { useContext } from "react";
import CardFace from "./CardFace";
import CardsContext from "../context/cards-context";

const Card = ({ card }) => {
  // if isFlipped is False, pass True to isVisible for CardFace 1 and
  // pass False to isVisible for CardFace 2.

  // import ReactMarkdown from 'react-markdown';
  // import REACT_MARKDOWN_TEMPLATE from '';

  // <CardFace />
  // const CardFace = ({isVisible, title}) => {
  //   render (
  /* <>
      <div className="container">
        <ReactMarkdown source={REACT_MARKDOWN_TEMPLATE} renderers
      </div>
      <style jsx="true">
        {`
        .container {
          display: {isVisible ? block : none};
        }
        `}
      </style>
    </>
  )
  // } */

  const { dispatch } = useContext(CardsContext);

  return (
    <div className="card">
      <CardFace card={card} />
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
            background-color: #ecf0f3;
            box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #ffffff;
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
