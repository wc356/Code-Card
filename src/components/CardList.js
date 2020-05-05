import React, { useContext } from "react";

import CardsContext from "../context/cards-context";
import CardsReviewContext from "../context/cards-review-context";

import CardCounts from "../components/CardCounts";
import Card from "./Card";

const CardList = () => {
  const { cards } = useContext(CardsContext);
  const { cardsCountIncorrect, isReviewing, setIsReviewing } = useContext(
    CardsReviewContext
  );

  const Cards = () =>
    cards.map((card) => <Card key={card.title} card={card} />);

  const CardsToReview = () =>
    isReviewing &&
    cardsCountIncorrect.map((card) => <Card key={card.title} card={card} />);

  const ReviewButtons = () =>
    cards.length === 0 && (
      <div className="button-wrapper">
        <button
          onClick={() => {
            setIsReviewing(true);
          }}
        >
          <h1>Review Incorrect</h1>
        </button>
        <button>
          <h1>Review All</h1>
        </button>
      </div>
    );

  return (
    <div className="cards-container">
      <CardCounts />
      <Cards />
      <CardsToReview />
      <ReviewButtons />
      <style jsx="true">
        {`
          .cards-container {
            padding: 0 2rem;
            width: 100%;
          }

          .cards-container .button-wrapper {
            display: flex;
            justify-content: center;
          }

          .cards-container button {
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

          .cards-container button:hover {
            background: #fff;
          }
        `}
      </style>
    </div>
  );
};

export { CardList as default };
