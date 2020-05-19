import React, {Component} from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      task: this.props.task,
    };

    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm   = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleRemove() {
    this.props.removeTodo(this.props.id);
  }

  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleUpdate(evt) {
    evt.preventDefault();

    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  }

  handleToggle(evt) {
    this.props.toggleTodo(this.props.id);
  }

  render() {
    let result;

    if (this.state.isEditing) {
      result = (
        <div className="Todo">
          <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
            <div>
              <input type="text" value={this.state.task} name="task" onChange={this.handleChange}  />
              <button>Save</button>
            </div>
          </form>
        </div>
      );
    } else {
      result = (
          <li className="Todo">
            <div
                className={this.props.completed ? 'Todo-task completed' : 'Todo-task'}
                onClick={this.handleToggle}
                title="Click to complete">
              { this.props.task }
            </div>
            <div className="Todo-buttons">
              <button onClick={this.toggleForm}>
                <i className="fa fa-pen" />
              </button>
              <button onClick={this.handleRemove}>
                <i className="fa fa-trash" />
              </button>
            </div>
          </li>
      );
    }

    return result;
  }
}

export default Todo;
