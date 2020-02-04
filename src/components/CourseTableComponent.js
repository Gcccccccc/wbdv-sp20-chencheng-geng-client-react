import React from "react";
import './CourseManager.css'
import CourseTableRowComponent from "./CourseTableRowComponent";

const CourseTableComponent = ({courses,deleteCourse,showCourseEditor,updateCourse}) => {
    return(
        <div>
            <div className="container-fluid course-list-container">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 d-none d-sm-block">
                            <span className="wbdv-header wbdv-title">&nbsp;&nbsp;&nbsp;Title</span>
                        </div>
                        <div className="col-sm-2 d-none d-sm-block">
                            <span className="wbdv-header wbdv-owner">Owned by</span>
                            <i className="fas fa-caret-down"></i>
                        </div>
                        <div className="col-sm-2 d-none d-sm-block">
                            <span className="wbdv-header wbdv-last-modified">Last modified by me</span>
                        </div>
                        <div className="col-sm-1 d-none d-sm-block">
                            <i className="fas fa-grip-horizontal wbdv-button wbdv-grid-layout wbdv-list-layout"></i>
                        </div>
                        <div className="col-sm-1 d-none d-sm-block">
                            <i className="fas fa-sort-alpha-down wbdv-header wbdv-sort"></i>
                        </div>
                    </div>
                </div>
            </div>
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