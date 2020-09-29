import React from "react";

import ToDoList from "./components/ToDoList.js";
import ListForm from "./components/ListForm";
import "./App.css";

const tasks = [
  {
    task: "example task",
    id: 123,
    done: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks,
    };
  }

  addTask = (e, item) => {
    e.preventDefault();
    const newTask = {
      task: item,
      id: Date.now(),
      done: false,
    };
    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  };

  crossTask = (taskId) => {
    console.log(taskId);
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (taskId === task.id) {
          return {
            ...task,
            done: !task.done,
          };
        }
        return task;
      }),
    });
  };

  clearDone = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter((item) => !item.done),
    });
  };

  render() {
    console.log("rendering...");
    return (
      <div className="App">
        <h1>ToDo List</h1>
        <ListForm addTask={this.addTask} />
        <ToDoList
          tasks={this.state.tasks}
          crossTask={this.crossTask}
          clearDone={this.clearDone}
        />
      </div>
    );
  }
}

export default App;
