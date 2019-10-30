import React from "react";
import { connect } from "react-redux";
import { removeList, editList, checkList } from "./actions/actions";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul class="list-group justify-content-center align-items-center ">
        {this.props.toDoList.map((el, i) => (
          <li className= {el.checked? "list-group-item w-100 text-center checked":"list-group-item w-100 text-center"}>
            <form className="d-flex justify-content-center align-items-center">
              <div class="form-group form-check text-center v-align-center">
                <input
                  type="checkbox"
                  class="form-check-input"
                
                  onClick={() => this.props.checkList(i)}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  value={el.todo}
                  readOnly
                  onClick={e => {
                    e.target.readOnly = false;
                    console.log(e.target.readOnly);
                  }}
                  onBlur={e => {
                    e.target.readOnly = true;
                    console.log(e.target.readOnly);
                  }}
                  onChange={e => this.props.editList(e.target.value, i)}
                />
              </div>

              <button
                class="btn btn-danger"
                onClick={(e) =>{e.preventDefault(); this.props.removeList(i)}}
              >
                X
              </button>
            </form>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  toDoList: state,
});

const mapDispatchToProps = dispatch => {
  return {
    removeList: payload => {
      dispatch(removeList(payload));
    },
    editList: (payload, index) => {
      dispatch(editList(payload, index));
    },
    checkList: (payload, index) => {
      dispatch(checkList(payload, index));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);
