import React from "react";
// import PropTypes from "prop-types";
import AnswerGrid from "./answer_grid";


export default class QuestionElement extends React.Component {
  // static propTypes = {
  //   question: PropTypes.string,
  //   answers: PropTypes.array,
  // };

  render() {
    console.log("QuestionElement", this.props.value.answers);
    let answersArray = "";
    if (this.props.value.answers) {
      answersArray = this.props.value.answers.map((answerElement, answerIndex) => 
        <div className="answerGrid">
          <AnswerGrid
            answerElement = {answerElement}
            answerIndex = {answerIndex}
          />
        </div>);
    }
    
    console.log("Returned by QuestionElement: ", answersArray);
    return (
      <div className="question_list_container">
        <div>{this.props.value.question}</div>
        <div>{ answersArray }</div>
      </div>
    );
  }
}
