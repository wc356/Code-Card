import React, { useEffect, useReducer } from "react";

import CardList from "./CardList";
import AddCardForm from "../components/AddCardForm";
import cardsReducer from "../reducers/cards";
import cardsInitialState from "../database/cards";

const CardsList = () => {
  const [cards, dispatch] = useReducer(cardsReducer, cardsInitialState);

  const removeCard = (title) => {
    dispatch({ type: "REMOVE_CARD", title });
  };

  useEffect(() => {
    const cards = JSON.parse(localStorage.getItem("cards"));
    if (!cards) return;

    dispatch({ type: "POPULATE_CARDS", cards });
  }, []);

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  return (
    <div className="page">
      <AddCardForm dispatch={dispatch} />
      <CardList cards={cards} removeCard={removeCard} />
      <style jsx>
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
    </div>
  );
};

export default CardsList;
