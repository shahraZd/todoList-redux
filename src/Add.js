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

  handleChange = (e) => {
    this.setState({
      newToDo: e.target.value,
    });
  };
  handleClick = () => {
    this.props.addList(this.state.newToDo);
    this.setState({
        newToDo: "",
      });
  };

  render() {
    return (
      <div>
        <button color="primary" onClick={this.handleClick}>
          +
        </button>
        <input
          type="text"
          value={this.state.newToDo}
          onChange={this.handleChange}
        />
      </div>
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
