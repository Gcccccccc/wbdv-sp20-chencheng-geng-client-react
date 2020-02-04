import React from "react";

import './CourseManager.css'

class CourseCardComponent extends React.Component{
    constructor(props) {
        super(props);
    }

    state = {
        editing: false,
        course: this.props.course
    }

    render() {
        return(
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="container wbdv-container-grid">
                    <div>
                        {
                            !this.state.editing &&
                            <a href="#" onClick={this.props.showCourseEditor}>
                                <b>{this.state.course.title}</b>
                            </a>
                        }
                        {
                            this.state.editing &&
                            <input  className="wbdv-grid-editing-input" onChange={(e)=>this.setState({
                                course: {
                                    ...this.state.course,
                                    title: e.target.value
                                }
                            })}
                                    value={this.state.course.title}/>
                        }
                    </div>
                    <br/>
                    <div>
                        <b>Owned By :</b>
                        <b> {this.state.course.ownedBy}</b>
                    </div>
                    <br/>
                    <div className="wbdv-overflow">
                        <b>Modified :</b>
                        <b> {this.state.course.lastModified}</b>
                    </div>
                    <br/>

                    <div className="wbdv-relative">
                        {
                            !this.state.editing &&
                            <div class="row wbdv-grid-edit-delete">
                                <i className="fas fa-pencil-alt btn wbdv-edit-course" onClick={()=>{this.setState({editing: true})}}></i>
                                <i className="fas fa-times wbdv-row wbdv-button wbdv-delete btn" onClick={() => {
                                    this.props.deleteCourse(this.props.course)
                                }}></i>
                            </div>
                        }
                        {
                            this.state.editing &&
                            <i className="fas fa-check btn wbdv-save-course" onClick={
                                ()=>{
                                    this.props.updateCourse(this.state.course._id,this.state.course)
                                        .then(status=>{})
                                    this.setState({editing: false})

                                }

                            }
                            ></i>
                        }
                    </div>
                </div>
            </div>

        )
    }
}

export default CourseCardComponent
