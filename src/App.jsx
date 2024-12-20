import Button from "./components/Button";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
import Counter from "./components/Counter";
import ColorPicker from "./components/ColorPicker";

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
  return (
    <>
      <Header />
      <ColorPicker />
      <Footer />
    </>
  );
}

export default App;
