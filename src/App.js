import React from 'react';

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const todo = [
  {
    name: "Wash car",
    id: 1,
    completed: false,
  },
  {
    name: "Eat lunch",
    id: 2,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = { todo }
  }

  handleToggle = (itemId) => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (itemId === item.id) {
          return ({
            ...item,
            completed: !item.completed
          });
        } else {
          return (item);
        }
      }),
    });
  }

  handleDone = () => {
    this.setState({
      todo: this.state.todo.filter(item => {
        return (!item.completed);
      }),
    });
  }

  handleAdd = name => {
    this.setState({
      todo: [...this.state.todo, {
        name: name,
        id: Date.now(),
        completed: false,
      }],
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleAdd={this.handleAdd} />
        <TodoList todo={this.state.todo} handleToggle={this.handleToggle} handleDone={this.handleDone} />
        
      </div>
    );
  }
}

export default App;
