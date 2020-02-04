import React from "react";
import CourseCardComponent from "./CourseCardComponent";



const CourseGridComponent = ({courses,deleteCourse,showCourseEditor,updateCourse}) => {
    return (
        <div className="container-fluid">
            <div className="row">
                {
                    courses.map(function (course, index) {
                        return <CourseCardComponent
                            deleteCourse={deleteCourse}
                            key={course._id}
                            course={course}
                            showCourseEditor={showCourseEditor}
                            updateCourse={updateCourse}
                        />
                    })
                }
            </div>
        </div>
    )
}


export default CourseGridComponent
