import React, { useState } from "react";

export default function MyComponent() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });
  function handleYearChange(event) {
    setCar((c) => ({ ...c, year: event.target.value }));
  }

  function handleMakeChange(event) {
    setCar((c) => ({ ...car, make: event.target.value }));
  }
  function handleModelChange(event) {
    setCar((c) => ({ ...c, model: event.target.value }));
  }
  return (
    <div>
      <p>
        Your Favourite car is: {car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <br />
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <br />
      <input type="text" value={car.model} onChange={handleModelChange} />
      <br />
    </div>
  );
}
