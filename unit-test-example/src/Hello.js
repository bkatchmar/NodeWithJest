import React from "react";
import SweetAlert from "react-bootstrap-sweetalert";

class Hello extends React.Component {
  state = {
    success: false
  };

  hideAlert = () => {
    this.setState({ success: false });
  };

  sweetAlert = () => {
    this.setState({ success: true });
  };

  render() {
    return (
      <div>
        <button className="title" onClick={() => this.sweetAlert()}>
          Success
        </button>
        {this.state.success === true && (
          <SweetAlert success title="Good job!" onConfirm={this.hideAlert}>
            You clicked the button!
          </SweetAlert>
        )}
      </div>
    );
  }
}

export default Hello;
