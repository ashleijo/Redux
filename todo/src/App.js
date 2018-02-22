import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggle } from './actions'
import List from './components/List'

import './App.css';

class App extends Component {
  state = {
    newTodo: ''
  }

  addTodo = (event) => {
    event.preventDefault();
    this.props.addTodo({
      value: this.state.newTodo,
      completed: false
    });
    this.setState({
      newTodo: ''
    });
  };

  updateTodo = (event) => {
    this.setState({
      newTodo: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
      <form onSubmit={this.addTodo}>
        <input onChange={this.updateTodo} placeholder="Add a todo" value={this.state.newTodo} />
      </form>
      <List todos={this.props.todos}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, { addTodo })(App);
