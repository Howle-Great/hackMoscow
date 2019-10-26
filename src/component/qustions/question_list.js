import React from "react";
// import PropTypes from "prop-types";
import QuestionElement from "./question_element";


export default class QuestionList extends React.Component {

  render() {
    console.log("Log: ", this.props.value);
    const questionsList = this.props.value.map(questionElement =>
      <div className="questionsList_container">
        <QuestionElement
        value = {questionElement}
        />
      </div>
    )
    return (
      <div>
       { questionsList }
      </div>
    )
  }
}