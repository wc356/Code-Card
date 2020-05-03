import React, { useContext } from "react";

import CardsContext from "../context/cards-context";
import Card from "./Card";

const CardList = () => {
  const { cards } = useContext(CardsContext);

  return (
    <div className="cards-container">
      {cards.map((card) => (
        <Card key={card.title} card={card} />
      ))}
      <style jsx="true">
        {`
          .cards-container {
            padding: 0 2rem;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
};

export { CardList as default };
