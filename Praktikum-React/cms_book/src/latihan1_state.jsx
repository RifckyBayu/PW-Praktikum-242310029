"use client";

import React, { useState } from "react";

export default function Latihan1State() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mt-5 text-center">
      <p>Latihan 1 Menghitung menggunakan State</p>

      <h1>{count}</h1>

      <div className="btn-group">
        <button
          className="btn btn-primary"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>

        <button
          className="btn btn-secondary"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}