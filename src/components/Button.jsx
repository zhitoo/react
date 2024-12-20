function Button() {
  const handleClick = (e) => {
    console.log(e);
    if (e.target.textContent == "Ouch!!!") {
      e.target.textContent = "Click Me !";
    } else {
      e.target.textContent = "Ouch!!!";
    }
  };

  const handleClick2 = (name) => {
    console.log("Hello " + name);
  };

  return <button onClick={(e) => handleClick(e)}>Click Me!</button>;
}

export default Button;
