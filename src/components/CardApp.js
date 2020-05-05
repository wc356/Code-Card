import React, { useEffect, useReducer, useState } from "react";

import CardsContext from "../context/cards-context.js";
import CardsReviewContext from "../context/cards-review-context";

import cardsReducer from "../reducers/cards";
import cardsInitialState from "../database/cards";
import CardList from "./CardList";
import AddCardForm from "./AddCardForm";

const CardApp = () => {
  const [cards, dispatch] = useReducer(cardsReducer, cardsInitialState);
  const [cardsCountCorrect, setCardsCountCorrect] = useState([]);
  const [cardsCountIncorrect, setCardsCountIncorrect] = useState([]);
  const [isReviewing, setIsReviewing] = useState(false);

  // Load "cards" from localStorage if "cards" exist and
  useEffect(() => {
    const cards = JSON.parse(localStorage.getItem("cards"));
    if (!cards) return;

    dispatch({ type: "POPULATE_CARDS", cards });
    setCardsCountCorrect(
      JSON.parse(localStorage.getItem("cards-count-correct"))
    );
    setCardsCountIncorrect(
      JSON.parse(localStorage.getItem("cards-count-incorrect"))
    );
  }, []);

  // Save cards as "cards" to localStorage when [cards]DidUpdate
  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
    localStorage.setItem(
      "cards-count-correct",
      JSON.stringify(cardsCountCorrect)
    );
    localStorage.setItem(
      "cards-count-incorrect",
      JSON.stringify(cardsCountIncorrect)
    );
  }, [cards]);

  return (
    <CardsContext.Provider value={{ cards, dispatch }}>
      <CardsReviewContext.Provider
        value={{
          cardsCountCorrect,
          setCardsCountCorrect,
          cardsCountIncorrect,
          setCardsCountIncorrect,
          isReviewing,
          setIsReviewing,
        }}
      >
        <main>
          <AddCardForm />
          <CardList />
        </main>
      </CardsReviewContext.Provider>
      <style jsx="true">
        {`
          main {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            width: 100vw;
          }
        `}
      </style>
    </CardsContext.Provider>
  );
};

export default CardApp;
