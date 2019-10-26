import React from "react";
import PropTypes from "prop-types";

// import "./Display.css";

// export default class Display extends React.Component {
//   static propTypes = {
//     value: PropTypes.string,
//   };

//   render() {
//     return (
//       <div className="component-display">
//         <div>{this.props.value}</div>
//       </div>
//     );
//   }
// }

export default class Button extends React.Component {
    static propTypes = {
      name: PropTypes.string,
      orange: PropTypes.bool,
      wide: PropTypes.bool,
      clickHandler: PropTypes.func,
    };
  
    handleClick = () => {
      this.props.clickHandler(this.props.name);
    };
  
    render() {
      const className = [
        "component-button",
        this.props.orange ? "orange" : "",
        this.props.wide ? "wide" : "",
      ];
  
      return (
        <div className={className.join(" ").trim()}>
          <button onClick={this.handleClick}>{this.props.name}</button>
        </div>
      );
    }
  }
  


