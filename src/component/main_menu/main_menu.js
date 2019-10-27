import React from "react";
import {Route, Switch, Link, BrowserRouter} from "react-router-dom";
import StudentGrafPage from "../student/student_graf_page";
import TeachersStudentsList from "../teacher/teachers_students_list";
import "./main_menu.css";


export default class MainMenu extends React.Component {
  render() {
    return (
      <div className="mainMenu">
        <div className="mainMenu_title">Sign in</div>
        <div className="mainMenu_button"><Link to="/student">Student</Link></div>
        <div className="mainMenu_button"><Link to="/teacher">Teacher</Link></div>
      </div>
    );
  }
}
