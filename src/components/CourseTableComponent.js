import React from "react";
import './CourseManager.css'
import {deleteCourse} from "../services/CourseService";
import CourseTableRowComponent from "./CourseTableRowComponent";

const CourseTableComponent = ({courses,deleteCourse,showCourseEditor}) => {
    return(
        <div>
            {
                courses.map(function (course, index) {
                    return <CourseTableRowComponent
                        deleteCourse={deleteCourse}
                        key={course._id}
                        course={course}
                        showCourseEditor={showCourseEditor}
                    />
                })
            }
        </div>
    )
}

export default CourseTableComponent