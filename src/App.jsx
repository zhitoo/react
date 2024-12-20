import Button from "./components/Button";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
import Counter from "./components/Counter";

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
      <Card
        image="./vite.svg"
        title="ViteJS"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil."
      />
      <List items={items} />
      <Button />
      <Counter />
      <Footer />
    </>
  );
}

export default App;
