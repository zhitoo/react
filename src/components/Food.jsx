function Food() {
  const food1 = "Ornge";
  const food2 = "Banana";

  return (
    <ul>
      <li> {food1} </li>
      <li> {food2.toUpperCase()} </li>
    </ul>
  );
}

export default Food;
