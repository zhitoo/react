import Button from "./components/Button";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
import Counter from "./components/Counter";
import ColorPicker from "./components/ColorPicker";
import Form from "./components/Form";
import { useState } from "react";
import MyComponent from "./components/MyComponent";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: "this is my first task",
      done: true,
    },
    {
      id: 2,
      description: "this is my second task",
      done: false,
    },
  ]);
  const handleToggleDoneTask = (id) => {
    setTasks((oldTasks) => {
      return oldTasks.map((task) => {
        console.log(task);
        if (task.id == id) {
          task.done = !task.done;
        }
        return task;
      });
    }); // update the state
  };
  return (
    <>
      <div className="flext flex-row">
        {tasks.map((task, index) => {
          return (
            <div className="flex " key={task.id}>
              <div>{task.description}</div>
              <div
                onClick={() => handleToggleDoneTask(task.id)}
                className="ml-2  border-solid border-2 border-sky-500 rounded-md p-1 cursor-pointer"
              >
                {task.done ? "Not Done" : "Done"}
              </div>
              <div className="ml-2 border-solid border-2 border-sky-500 rounded-md p-1 cursor-pointer">
                Remove
              </div>
            </div>
          );
        })}
      </div>
      <Header />
      <Footer />
    </>
  );
}

export default App;
