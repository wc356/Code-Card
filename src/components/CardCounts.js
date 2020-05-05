import React, { useContext } from "react";

import CardsContext from "../context/cards-context";
import CardsReviewContext from "../context/cards-review-context";

const CardCounts = () => {
  const { cards } = useContext(CardsContext);
  const { cardsCountCorrect, cardsCountIncorrect, isReviewing } = useContext(
    CardsReviewContext
  );
  const cardsToCount = isReviewing ? cardsCountIncorrect : cards;

  return (
    <>
      <h1>correct: {cardsCountCorrect.length}</h1>
      <h1>wrong: {cardsCountIncorrect.length}</h1>
      <h1>
        showing {cardsToCount.length}{" "}
        {cardsToCount.length === 1 ? "card" : "cards"}
      </h1>
    </>
  );
};

export default CardCounts;
