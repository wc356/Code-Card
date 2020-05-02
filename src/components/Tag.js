import React from "react";

const Tag = ({ language }) => (
  <div className="wrapper">
    <div className="container">
      <span>{language}</span>
    </div>
    <style jsx="true">
      {`
        .wrapper {
          display: flex;
          justify-content: flex-end;
        }

        .container {
          display: block;
          color: purple;
          padding: 1rem;
          border-radius: 0.6rem;
          background-color: pink;
          border: 1px solid magenta;
        }

        .container span {
          font-size: 1.2rem;
        }
      `}
    </style>
  </div>
);

export { Tag as default };
