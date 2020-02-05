import React from "react";
import CourseTableRowComponent from "../CourseTableRowComponent";


const LessonItemComponent = ({lesson}) => {
    return (
        <li className="nav-item">
            <a className="nav-link wbdv-page-tab" href="#">
                <b>{lesson.title}</b>
            </a>
        </li>
    )
}

export default LessonItemComponent