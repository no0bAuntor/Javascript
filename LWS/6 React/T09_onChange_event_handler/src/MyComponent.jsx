import React, { useState } from "react";

export default function MyComponent() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("Choose one option");
  function handleChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleShippingChange(event) {
    setShipping(event.target.value);
  }
  return (
    <div>
      <input value={name} onChange={handleChange}></input>
      <p>Name: {name}</p>

      <input value={quantity} onChange={handleQuantityChange} type="number" />
      <p>Quantity: {quantity}</p>

      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Enter delivery instructions"
      />
      <p>Comment: {comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select payment method</option>
        <option value="Bkash">Bkash</option>
        <option value="Rocket">Rocket</option>
        <option value="Nagad">Nagad</option>
      </select>
      <p>Payment: {payment}</p>

      <label>
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={handleShippingChange}
        />
        Pick up
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  );
}
