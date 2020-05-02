import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../components/renderer/CodeBlock";

const Markdown = ({ card }) => {
  const input = `
    # ${card.title}\n\n

    ${card.body}
    \`\`\`${card.language}
    ${card.code}
    \`\`\`
    `;

  useEffect(() => {
    console.log(card);
  }, []);

  return <ReactMarkdown source={input} renderers={{ code: CodeBlock }} />;
};

export { Markdown as default };
