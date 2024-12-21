import Button from "./components/Button";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
import Counter from "./components/Counter";
import ColorPicker from "./components/ColorPicker";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const items = [
    {
      id: 1,
      name: "Lesson One",
      shortDescription: "some description about lesson one",
    },
    {
      id: 2,
      name: "Lesson Two",
      shortDescription: "some description about lesson one",
    },
    {
      id: 3,
      name: "Lesson Three",
      shortDescription: "some description about lesson one",
    },
  ];
  const [names, setNames] = useState(["Ali", "Reza", "Hasan"]);

  const handleAddName = () => {
    const newName = document.getElementById("nameInput").value;
    document.getElementById("nameInput").value = "";
    setNames((oldNames) => [...oldNames, newName]); // push new name to the array
  };
  const handleRemoveName = (index) => {
    setNames((oldNames) => oldNames.filter((_, i) => i !== index));
  };

  return (
    <>
      <Header />
      <ul>
        {names.map((name, index) => (
          <li
            onClick={() => {
              handleRemoveName(index);
            }}
            key={index}
          >
            {name}
          </li>
        ))}
      </ul>
      <input type="text" id="nameInput" placeholder="Enter Your Name" />
      <button onClick={handleAddName}>Add Name To List</button>
      <Form />
      <ColorPicker />
      <Footer />
    </>
  );
}

export default App;
