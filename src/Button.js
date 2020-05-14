// https://colorhunt.co/palette/182054
import React from 'react';

export default function Button({ children }) {
  return (
    <button>
      {children}
      <style jsx>{`
        button {
          display: inline-block;
          padding: 0 10px;
          line-height: 35px;
          min-width: 100px;
          background-color: #d9455f;
          color: white;
          border: none;
          border-radius: 5px;
          text-align: center;
          cursor: pointer;
          font-size: 14px;
          font-weight: bold;
        }
      `}</style>
    </button>
  )
}
