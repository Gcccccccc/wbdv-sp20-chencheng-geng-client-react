import React from "react";
import './CourseManager.css'
import CourseTableRowComponent from "./CourseTableRowComponent";

const CourseTableComponent = ({courses,deleteCourse,showCourseEditor,updateCourse}) => {
    return(
        <div>
            {
                courses.map(function (course, index) {
                    return <CourseTableRowComponent
                        deleteCourse={deleteCourse}
                        key={course._id}
                        course={course}
                        showCourseEditor={showCourseEditor}
                        updateCourse={updateCourse}
                    />
                })
            }
        </div>
    )
}

export default CourseTableComponent