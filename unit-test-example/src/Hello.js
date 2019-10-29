import React from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { Button } from "reactstrap";

class Hello extends React.Component {
  state = {
    success: false,
    message : ""
  };

  hideAlert = () => {
    this.setState({ success: false, message : "" });
  };

  sweetAlert = (newMessage) => {
    this.setState({
      success: true,
      message : (newMessage) ? newMessage : "Good Job!!!"
    });
  };

  render() {
    return (
      <div>
        <div><Button color="primary" onClick={() => this.sweetAlert("You Clicked On Primary")}>Primary</Button></div>
        <div><Button color="secondary" onClick={() => this.sweetAlert("You Clicked On Secondary")}>Secondary</Button></div>
        {this.state.success === true && (
          <SweetAlert success title={this.state.message} onConfirm={this.hideAlert}>
            You clicked the button!
          </SweetAlert>
        )}
      </div>
    );
  }
}

export default Hello;
