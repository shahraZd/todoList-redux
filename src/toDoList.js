import React from "react";
import { connect } from "react-redux";
import { addList, removeList, editList } from "./actions/actions";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
class ModalToDo extends React.Component {
  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={this.props.toggle}
        className={this.props.className}
      >
        <ModalHeader>{this.props.modalTitle}</ModalHeader>
        <ModalBody>
          <textarea
            onChange={this.props.onchange}
            placeholder="type here"
            defaultValue={this.props.defaultVal}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.props.onclick}>
            Confirm
          </Button>
          <Button color="secondary" onClick={this.props.cancel}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalEdit: false,
    };
  }

  toggleEdit = (e, i) => {
    this.setState({
      modalEdit: !this.state.modalEdit,
      defaultVal: e,
      index: i,
    });
  };

  render() {
    return (
      <div className="container">
        {this.props.toDoList.map((el, i) => (
          <div>
            <span onClick={() => this.toggleEdit(el, i)}>
              {el}
              <button color="danger" onClick={() => this.props.editList(i)}>
                edit
              </button>
              <button color="danger" onClick={() => this.props.removeList(i)}>
                delete
              </button>
            </span>
          </div>
        ))}

        <ModalToDo
          isOpen={this.state.modalEdit}
          toggle={this.toggleEdit}
          className={this.props.className}
          modalTitle={"Edit To Do"}
          onclick={() => {
            this.props.editList(this.state.newToDo, this.state.index);
            this.toggleEdit();
          }}
          cancel={this.toggleEdit}
          onchange={event => this.getList(event)}
          defaultVal={this.state.defaultVal}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  toDoList: state,
});

const mapDispatchToProps = dispatch => {
  return {
    addList: payload => {
      dispatch(addList(payload));
    },
    removeList: payload => {
      dispatch(removeList(payload));
    },
    editList: (payload, index) => {
      dispatch(editList(payload, index));
    },
  };
};

const ConnectedToDoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);

export default ConnectedToDoList;
