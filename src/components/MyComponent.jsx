import { useState } from "react";

function MyComponent() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  const handleAddCar = () => {
    setCars((oldCard) => [
      ...oldCard,
      { year: carYear, make: carMake, model: carModel },
    ]);
  };
  const handleRemoveCar = (index) => {
    setCars((oldCard) => oldCard.filter((_, i) => i !== index));
  };
  const handleYearChange = (e) => {
    setCarYear(e.target.value);
  };
  const handleMakeChange = (e) => {
    setCarMake(e.target.value);
  };
  const handleModelChange = (e) => {
    setCarModel(e.target.value);
  };
  return (
    <div>
      <h2>List of car objects</h2>
      <ul>
        {cars.map((car, index) => {
          return (
            <li onClick={() => handleRemoveCar(index)} key={index}>
              {car.year} {car.make} {car.model}
            </li>
          );
        })}
      </ul>
      <div>
        <label>Year</label>
        <input type="number" value={carYear} onChange={handleYearChange} />
      </div>
      <div>
        <label>Make</label>
        <input type="text" value={carMake} onChange={handleMakeChange} />
      </div>
      <div>
        <label>Model</label>
        <input type="text" value={carModel} onChange={handleModelChange} />
      </div>
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}

export default MyComponent;
