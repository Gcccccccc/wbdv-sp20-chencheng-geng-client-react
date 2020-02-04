import React from "react";
import './CourseManagerHeading.css'

const CourseManagerHeadingComponent = () => {
    return(
        <div>
            <div className="container-fluid">
                <div className="row nbar">
                    <div className="col-sm-1 col-2">
                        <i className="fas fa-bars fa-2x wbdv-field wbdv-hamburger"></i>
                    </div>
                    <label className="col-sm-2 d-none d-sm-block wbdv-label wbdv-course-manager">Course Manager</label>
                    <input type="text" placeholder="New Course Title" className="col-sm-7 col-8 wbdv-field wbdv-new-course"/>
                    <a href="course-editor/course-editor.template.client.html" className="col-sm-2 col-2 wbdv-button wbdv-add-course">
                        <span className="fa-stack fa-1x">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fas fa-plus fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                </div>
            </div>
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
        </div>
    )
}

export default CourseManagerHeadingComponent