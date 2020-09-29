import React from "react";

class ListForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: "",
    };
  }

  handleChanges = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitTask = (e) => {
    e.preventDefault();
    this.setState({ task: "" });
    this.props.addTask(e, this.state.task);
  };

  render() {
    console.log("rendering form");
    console.log(this.state);
    return (
      <form onSubmit={this.submitTask}>
        <input
          type="text"
          value={this.state.task}
          name="task"
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default ListForm;
