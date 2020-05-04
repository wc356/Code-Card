import React, { useContext } from "react";

import CardsContext from "../context/cards-context";
import Card from "./Card";

const CardList = () => {
  const { cards } = useContext(CardsContext);

  return (
    <div className="cards-container">
      <h1 className="cards-count">
        showing {cards.length} {cards.length === 1 ? "card" : "cards"}
      </h1>
      {cards.map((card) => (
        <Card key={card.title} card={card} />
      ))}
      <style jsx="true">
        {`
          .cards-container {
            padding: 0 2rem;
            width: 100%;
          }

          .cards-count {
            text-align: right;
          }
        `}
      </style>
    </div>
  );
};

export { CardList as default };
