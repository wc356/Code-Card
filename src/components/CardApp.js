import React, { useEffect, useReducer, useState } from "react";

import CardsContext from "../context/cards-context.js";
import CardsReviewContext from "../context/cards-review-context";

import cardsReducer from "../reducers/cards";
import cardsInitialState from "../database/cards";
import CardList from "./CardList";
import AddCardForm from "./AddCardForm";

const CardApp = () => {
  const [cards, dispatch] = useReducer(cardsReducer, cardsInitialState);
  const [cardsMemorized, setCardsMemorized] = useState([]);
  const [cardsToReview, setCardsToReview] = useState([]);

  // Load "cards" from localStorage if "cards" exist and
  useEffect(() => {
    const cards = JSON.parse(localStorage.getItem("cards"));
    if (!cards) return;

    dispatch({ type: "POPULATE_CARDS", cards });
    setCardsMemorized(JSON.parse(localStorage.getItem("cards-memorized")));
    setCardsToReview(JSON.parse(localStorage.getItem("cards-to-review")));
  }, []);

  // Save cards as "cards" to localStorage when [cards]DidUpdate
  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
    localStorage.setItem("cards-memorized", JSON.stringify(cardsMemorized));
    localStorage.setItem("cards-to-review", JSON.stringify(cardsToReview));
  }, [cards]);

  return (
    <CardsContext.Provider value={{ cards, dispatch }}>
      <CardsReviewContext.Provider
        value={{
          cardsMemorized,
          setCardsMemorized,
          cardsToReview,
          setCardsToReview,
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
