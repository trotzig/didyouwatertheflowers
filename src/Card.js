import React from 'react';

export default function Card({ children }) {
  return (
    <div className="card">
      {children}
      <style jsx>{`
        .card {
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
      `}</style>
    </div>
  )
}
