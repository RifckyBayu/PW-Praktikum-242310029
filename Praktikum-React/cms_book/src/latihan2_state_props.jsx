"use client";

import React, { useState } from "react";

const ViewName = ({ name }) => {
  return (
    <div className="text-center py-5">
      <p className="fw-bold">
        Hello <span className="text-primary">{name}</span>
      </p>
    </div>
  );
};

export default function Latihan2StateProps() {
  const [name, setName] = useState("");

  return (
    <div className="container bg-light p-3 border rounded mt-5">
      <div>
        <h3>Enter your name:</h3>

        <input
          type="text"
          name="name"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {name && <ViewName name={name} />}
    </div>
  );
}