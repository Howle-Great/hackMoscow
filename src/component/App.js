import React from "react";
import {HashRouter, Switch, Link} from "react-router-dom";

import QuestionList from "./qustions/question_list"
import "./App.css";

export default class App extends React.Component {
  state = {
    questions: [
      {
        question: "Q1",
        answers: [
          "anw1",
          "anw2",
          "anw3",
        ]
      }, {
        question: "Q2",
        answers: [
          "anw1",
          "anw2",
          "anw3",
        ]
      },
      
    ],
    
  };


  render() {
    console.log("Questions: ", this.state.questions);
    return (
      <div className="component-app">
        <QuestionList value={this.state.questions}/>
      </div>
    );
  }
}

// <Display value={this.state.next || this.state.total || "0"} />
// <ButtonPanel clickHandler={this.handleClick} />
