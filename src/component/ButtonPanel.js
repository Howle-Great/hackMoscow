import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

import "./ButtonPanel.css";

export default class ButtonPanel extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };

  render() {
    return (
      <div className="component-button-panel">
          
        <div id = "teacher">
          <Button name="Teacher" clickHandler={this.handleClick} />
        </div>
        <div id = "student">
          <Button name="Student" clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}
