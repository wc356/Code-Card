import React, { useEffect, useReducer } from "react";

import CardsContext from "../context/cards-context.js";
import cardsReducer from "../reducers/cards";
import cardsInitialState from "../database/cards";
import CardList from "./CardList";
import AddCardForm from "./AddCardForm";

const CardApp = () => {
  const [cards, dispatch] = useReducer(cardsReducer, cardsInitialState);
  // 3 States/Pages—Dashboard(), Correct()
  // two buttons—one for Correct and Incorrect
  // When pressed Correct,

  // Load "cards" from localStorage if "cards" exist and
  useEffect(() => {
    const cards = JSON.parse(localStorage.getItem("cards"));
    if (!cards) return;

    dispatch({ type: "POPULATE_CARDS", cards });
  }, []);

  // Save cards as "cards" to localStorage when [cards]DidUpdate
  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  return (
    <CardsContext.Provider value={{ cards, dispatch }}>
      <main className="page">
        <AddCardForm />
        <CardList />
      </main>
      <style jsx="true">
        {`
          .page {
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
