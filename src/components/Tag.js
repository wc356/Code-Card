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
          padding: 1rem;
          border-radius: 0.6rem;
          background: linear-gradient(145deg, #fdffff, #d4d8db);
          box-shadow: 13px 13px 20px #b8bbbe, -13px -13px 20px #ffffff;
        }

        .container span {
          font-size: 1.2rem;
        }
      `}
    </style>
  </div>
);

export { Tag as default };
