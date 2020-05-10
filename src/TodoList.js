import React, {Component} from 'react';
import Todo from "./Todo";
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };

    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  update(id, updatedTask) {
    let updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }

      return todo;
    });

    this.setState({ todos: updatedTodos });
  }

  remove(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  toggle(id) {
    let updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }

      return todo;
    });

    this.setState({ todos: updatedTodos });
  }

  render() {
    return (
      <div>
        <h1>Todo List!</h1>
        <NewTodoForm createTodo={this.create} />
        <ul>
          {
            this.state.todos.map(todo => (
              <Todo
                key={todo.id}
                id={todo.id}
                task={todo.task}
                completed={todo.completed}
                updateTodo={this.update}
                removeTodo={this.remove}
                toggleTodo={this.toggle}
              />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
