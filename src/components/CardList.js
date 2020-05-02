import React, { useContext } from "react";
import Card from "./Card";
import CardsContext from "../context/cards-context";

const CardList = () => {
  const { cards } = useContext(CardsContext);

  return cards.map((card) => <Card key={card.title} card={card} />);
};

export { CardList as default };
