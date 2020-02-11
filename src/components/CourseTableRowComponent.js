import React from "react";
import './CourseManager.css'
import {Link} from "react-router-dom"
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
        course: this.props.course,
        selected: false
    }

    selectRow = () => {
        this.setState({selected:true})
    }
    notselectRow = () => {
        // this.setState({selected:false})
    }
    render() {
        return(
            <div>
                {
                    !this.state.selected &&
                    <div className="container not-selected-container course-list-container-2"onClick={this.selectRow}>
                        <div className="row wbdv-row wbdv-course" >
                            <div className="col-md-6 col-sm-6 col-10">
                                <i className="fas fa-file-alt wbdv-row wbdv-icon"></i>
                                <span>&nbsp;&nbsp;&nbsp;</span>
                                <Link to={`/course-editor/${this.state.course._id}`}>
                                    <span className="wbdv-row wbdv-title">{this.state.course.title}</span>
                                </Link>
                            </div>
                            <div className="col-md-2 col-sm-4 d-none d-sm-block">
                                <span className="wbdv-row wbdv-owner">{this.props.course.ownedBy}</span>
                            </div>
                            <div className="col-md-2 d-none d-md-block">
                                <span className="wbdv-row wbdv-modified-date">{this.props.course.lastModified}</span>
                            </div>
                            <span className="col-md-1 col-sm-1 col-1"></span>
                            <div className="wbdv-course-delete col-md-1 col-sm-1 col-1">
                            </div>
                        </div>
                    </div>
                }
                {
                    this.state.selected &&
                    <div className="container selected-container course-list-container-2">
                        <div className="row wbdv-row wbdv-course">
                            <div className="col-md-6 col-sm-6 col-10">
                                <i className="fas fa-file-alt wbdv-row wbdv-icon"></i>
                                <span>&nbsp;&nbsp;&nbsp;</span>
                                {
                                    !this.state.editing &&
                                    <Link to={`/course-editor/${this.state.course._id}`}>
                                        <span className="wbdv-row wbdv-title">{this.state.course.title}</span>
                                    </Link>
                                }
                                {
                                    this.state.editing &&
                                    <input className="wbdv-editing-input" onChange={(e) => this.setState({
                                        course: {
                                            ...this.state.course,
                                            title: e.target.value
                                        }
                                    })}
                                           value={this.state.course.title}/>
                                }
                            </div>
                            <div className="col-md-2 col-sm-4 d-none d-sm-block">
                                <span className="wbdv-row wbdv-owner">{this.props.course.ownedBy}</span>
                            </div>
                            <div className="col-md-2 d-none d-md-block">
                                <span className="wbdv-row wbdv-modified-date">{this.props.course.lastModified}</span>
                            </div>

                            <div className="wbdv-course-delete col-md-2 col-md-2 col-2">
                                {
                                    !this.state.editing &&
                                    <div class="row course-btn">
                                        <i className="fas fa-pencil-alt btn wbdv-edit-course " onClick={() => {
                                            this.setState({editing: true})
                                        }}></i>
                                        <i className="fas fa-trash-alt wbdv-row wbdv-button wbdv-delete btn"
                                           onClick={() => {
                                               this.props.deleteCourse(this.props.course)
                                           }}></i>
                                    </div>
                                }
                                {
                                    this.state.editing &&
                                    <i className="fas fa-check btn wbdv-save-course course-btn" onClick={
                                        () => {
                                            this.props.updateCourse(this.state.course._id, this.state.course)
                                                .then(status => {
                                                })
                                            this.setState({editing: false})
                                            this.setState({selected:false})
                                        }

                                    }
                                    ></i>
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default CourseTableRowComponent