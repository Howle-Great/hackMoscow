import React from "react";
import MenuBlank from "./menu_blank";
import './side_menu.css';

export default class SideMenu extends React.Component {


  constructor() {
    super();
    this.state = {
      childVisible: false
    }
  }
  
  render() {
      return (

        <div>
          <div className="sideButton" onClick={() => this.onClick()}>
            Parent - click me to show/hide my child
          </div>
          {
            this.state.childVisible
              ? <MenuBlank />
              : null
          }
        </div>
      );
  }

  onClick() {
    this.setState(prevState => ({ childVisible: !prevState.childVisible }));
  }
}
