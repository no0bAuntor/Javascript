import React, { useState } from "react";

export default function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed]=useState(false);    
  const updateName = () => {
    setName("Auntor");
  };

  const incrementAge = () => {
    setAge(age + 1);
  };

  const toggleEmpolyedStatus=()=>{
    setIsEmployed(!isEmployed);
  }
  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>

      <p>Is employed: {isEmployed? "Yes" : "No"}</p>
      <button onClick={toggleEmpolyedStatus}>Toggle Status</button>
    </div>
  );
}
