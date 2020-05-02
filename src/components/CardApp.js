import React, { useEffect, useReducer } from "react";

import CardList from "./CardList";
import AddCardForm from "./AddCardForm";
import cardsReducer from "../reducers/cards";
import cardsInitialState from "../database/cards";

import CardsContext from "../context/cards-context.js";

const CardApp = () => {
  const [cards, dispatch] = useReducer(cardsReducer, cardsInitialState);

  // Load "cards" from localStorage if "cards" exist and
  // dispatch action POPULATE_CARDS to reducer
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
      <section className="page">
        <AddCardForm dispatch={dispatch} />
        <CardList />
      </section>
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
