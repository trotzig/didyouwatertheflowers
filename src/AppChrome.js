import Head from 'next/head';
import React from 'react';

export default function AppChrome({ children }) {
  return (
    <div className="root">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
        input[type="text"], input[type="password"] {
          padding: 5px;
          font-size: 14px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
}
