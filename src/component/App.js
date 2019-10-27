import * as React from "react";
import {Route, Switch, BrowserRouter, Link} from "react-router-dom";

// import QuestionList from "./qustions/question_list";
import MainMenu from "./main_menu/main_menu";
import StudentGrafPage from "./student/student_graf_page";
import TeachersStudentsList from "./teacher/teachers_students_list";
import "./App.css";

export default class App extends React.Component  {
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
        <BrowserRouter>
          <Switch>
            <Route exact path="/student" component={StudentGrafPage}/>
            <Route exact path="/teacher" component={TeachersStudentsList}/>
            <Route exact path="/" component={MainMenu}/>

          </Switch> 
        </BrowserRouter>
      
    );
  }
}

// <Display value={this.state.next || this.state.total || "0"} />
// <ButtonPanel clickHandler={this.handleClick} />
