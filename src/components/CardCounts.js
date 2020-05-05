import React, { useContext } from "react";

import CardsContext from "../context/cards-context";
import CardsReviewContext from "../context/cards-review-context";

const CardCounts = () => {
  const { cards } = useContext(CardsContext);
  const { cardsMemorized, cardsToReview } = useContext(CardsReviewContext);
  return (
    <>
      <h1>correct: {cardsMemorized.length}</h1>
      <h1>wrong: {cardsToReview.length}</h1>
      <h1 className="cards-count">
        showing {cards.length} {cards.length === 1 ? "card" : "cards"}
      </h1>
      <style jsx="true">
        {`
          .cards-count {
            text-align: right;
          }
        `}
      </style>
    </>
  );
};

export default CardCounts;
