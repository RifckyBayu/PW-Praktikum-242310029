"use client";
import React, { useState } from 'react'

export default function latihan1_state() {
const [count, setCount] = useState(0);

  return (
    <div>
      <p>Latihan 1 Menghitung menggunakan State</p>
      <h1> {count} </h1>
      <div className="btn-group">
        <button className="btn-primary" onClick={() => setCount(count + 1)} >
          Increment
        </button>
        <button className="btn-secondary" onClick={() => setCount(count - 1)} >
          Decrement
        </button>
      </div>
    </div>
  )
}
