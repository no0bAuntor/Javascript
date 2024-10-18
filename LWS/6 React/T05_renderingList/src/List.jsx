import React from "react";

export default function List() {
  const fruits = [
    { id: 1, name: "apple", rating: 7 },
    { id: 2, name: "mango", rating: 10 },
    { id: 3, name: "orange", rating: 8 },
    { id: 4, name: "banana", rating: 8.5 },
    { id: 5, name: "pineapple", rating: 9 },
  ];

  // fruits.sort((a, b)=>a.name.localeCompare(b.name)); // Alphabetical

  // fruits.sort((a, b)=>b.name.localeCompare(a.name)); // Reverse Alphabetical

  // fruits.sort((a, b)=>a.rating- b.rating); // Ascending rating
  
  fruits.sort((a, b) => b.rating - a.rating); // Descending rating

  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp;
      <b>{fruit.rating}</b>
    </li>
  ));

  return <ol>{listItems}</ol>;
}
