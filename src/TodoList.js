import React, {Component} from 'react';
import Todo from "./Todo";
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { task: 'Walk The Fish' },
        { task: 'Groom Chicken' },
      ]
    };

    this.create = this.create.bind(this);
  }

  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  render() {
    return (
      <div>
        <h1>Todo List!</h1>
        <NewTodoForm createTodo={this.create} />
        <ul>
          {
            this.state.todos.map(todo => (
              <Todo task={todo.task} />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
