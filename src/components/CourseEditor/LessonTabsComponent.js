import React from "react";
import './CourseEditor.css'
import LessonItemComponent from "./LessonItemComponent";

const LessonTabsComponent = ({lessons}) => {
    return(
        <ul className="nav nav-pills">
            {
                lessons.map(function (lesson, index) {
                    return <LessonItemComponent
                        lesson={lesson}
                    />
                })
            }
        </ul>
    )
}

export default LessonTabsComponent