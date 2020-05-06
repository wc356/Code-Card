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
      <h1>
        correct: <span>{`${cardsCountCorrect.length}`}</span>
      </h1>
      <h1>
        wrong: <span>{`${cardsCountIncorrect.length}`}</span>
      </h1>
      <h1>
        showing <span>{`${cardsToCount.length}`}</span>{" "}
        {cardsToCount.length === 1 ? "card" : "cards"}
      </h1>
    </>
  );
};

export default CardCounts;
