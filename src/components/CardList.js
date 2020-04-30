import React from "react";
import Card from "./Card";

const CardList = ({ cards, removeCard }) => (
  <>
    {cards.map((card) => (
      <Card key={card.title} card={card} removeCard={removeCard} />
    ))}
  </>
);

export { CardList as default };
