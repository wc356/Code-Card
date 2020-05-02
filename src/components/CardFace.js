import React, { useState } from "react";
import Markdown from "./Markdown";
import Tag from "./Tag";

const CardFace = ({ card }) => {
  return (
    <div>
      <Tag language={card.language} />
      <Markdown card={card} />
    </div>
  );
};

export default CardFace;
