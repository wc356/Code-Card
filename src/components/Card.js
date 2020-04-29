import React from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../components/renderer/CodeBlock";

const Card = ({ title, body, code }) => {
  const input = `
  # ${title}\n\n

  ${body}
  \`\`\`js
  ${code}
  \`\`\`
  `;

  return (
    <div className="card">
      <ReactMarkdown source={input} renderers={{ code: CodeBlock }} />
    </div>
  );
};

export default Card;
