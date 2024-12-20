import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#fff");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <div style={{ backgroundColor: color }}>
        <p>your selected color: {color}</p>
      </div>
      <label>Select a Color:</label>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  );
}
export default ColorPicker;
