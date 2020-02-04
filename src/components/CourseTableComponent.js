import React from "react";
import './CourseManager.css'
import {deleteCourse} from "../services/CourseService";
import CourseTableRowComponent from "./CourseTableRowComponent";

const CourseTableComponent = ({courses,deleteCourse}) => {
    return(
        <div>
            {
                courses.map(function (course, index) {
                    return <CourseTableRowComponent
                        deleteCourse={deleteCourse}
                        key={course._id}
                        course={course}
                    />
                })
            }
        </div>
    )
}

export default CourseTableComponent