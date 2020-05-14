import React from 'react';

export default function AppChrome({ children }) {
  return (
    <div className="root">
      {children}
      <style jsx>{`
        .root {
          margin: 0 auto;
          max-width: 900px;
          padding: 0 10px;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
