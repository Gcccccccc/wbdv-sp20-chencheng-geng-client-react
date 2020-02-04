import React from "react";
import './CourseManager.css'

// return <CourseTableRowComponent
//     showCourseEditor={showCourseEditor}
//     deleteCourse={deleteCourse}
//     key={course._id}
//     course={course}
// />
class CourseTableRowComponent extends React.Component{
    constructor(props) {
        super(props);
    }

    state = {
        editing: false,
        course: this.props.course
    }

    render() {
        return(
            <div className="container course-list-container-2">
                <div className="row wbdv-row wbdv-course active">
                    <div className="col-sm-6 col-11">
                        <i className="fas fa-file-alt wbdv-row wbdv-icon"></i>
                        <span>&nbsp;&nbsp;&nbsp;</span>
                        <a href="#">
                            <span className="wbdv-row wbdv-title">{this.props.course.title}</span>
                        </a>
                    </div>
                    <div className="col-sm-2 d-none d-sm-block">
                        <span className="wbdv-row wbdv-owner">{this.props.course.ownedBy}</span>
                    </div>
                    <div className="col-sm-2 d-none d-sm-block">
                        <span className="wbdv-row wbdv-modified-date">{this.props.course.lastModified}</span>
                    </div>
                    <span className="col-sm-1 d-none d-sm-block"></span>
                    <div className="wbdv-course-delete col-sm-1 col-1" onClick={()=>{this.props.deleteCourse(this.props.course)}}>
                        <i className="fas fa-times wbdv-row wbdv-button wbdv-delete btn"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default CourseTableRowComponent