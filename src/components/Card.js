import React from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./components/renderer/CodeBlock";

const Card = (title) => {
  return (
    <div className="card">
      <ReactMarkdown source={input} renderers={{ code: CodeBlock }} />
    </div>
  );
};

export default Card;
