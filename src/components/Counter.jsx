import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const [comment, setComment] = useState("");

  const [payment, setPayment] = useState("cash");

  const [shipping, setShipping] = useState("");

  const handleShippingChange = (e) => {
    setShipping(e.target.value);
  };

  const handlePaymentChange = (e) => {
    setPayment(e.target.value);
  };

  const handleCountInputChange = (e) => {
    setCount(Number(e.target.value));
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <div>
      <input
        type="number"
        value={count}
        onChange={(e) => handleCountInputChange(e)}
      />
      <p>Count: {count}</p>
      <button className="ml-2" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className="ml-2" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <div>
        <textarea
          value={comment}
          onChange={(e) => handleCommentChange(e)}
          placeholder="please leave a comment!!!!!"
        />
        <p>your comment: {comment}</p>
      </div>
      <select value={payment} onChange={(e) => handlePaymentChange(e)}>
        <option value="cash">cash</option>
        <option value="card">card</option>
        <option value="online">online</option>
      </select>
      <p>payment method: {payment}</p>
      <label>
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={(e) => handleShippingChange(e)}
        />
        Pick Up
      </label>
      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={(e) => handleShippingChange(e)}
        />
        Delivery
      </label>
      <p>your shipping type is: {shipping}</p>
    </div>
  );
}
export default Counter;
