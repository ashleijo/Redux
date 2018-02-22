import React, { Component } from 'react';
import { toggle } from '../actions';
import { connect } from 'react-redux';

class Item extends Component {

  toggle = (event) => {
    this.props.toggle(this.props.index);
  }

  render() {
    return (
      <li>
        <input type="checkbox" onChange={this.toggle} />
        {this.props.todo.value}
      </li>
    );
  }
}

export default connect(null, { toggle })(Item);
