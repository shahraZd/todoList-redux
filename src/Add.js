import React, { Component } from "react";
import { connect } from "react-redux";
import { addList } from "./actions/actions";
class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newToDo: "",
    };
  }

  handleChange = e => {
    this.setState({
      newToDo: e.target.value,
    });
  };
  handleClick = () => {
    this.state.newToDo !== "" && this.props.addList(this.state.newToDo);
    this.setState({
      newToDo: "",
    });
  };

  render() {
    return (
      <header>
        <button className="btn btn-success" onClick={this.handleClick}>
          +
        </button>
        <input
          type="text"
          value={this.state.newToDo}
          onChange={this.handleChange}
          placeholder="what you're gonna do?"
        />
      </header>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addList: payload => {
      dispatch(addList(payload));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Add);
