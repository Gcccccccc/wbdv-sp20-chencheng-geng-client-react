import React from "react";
import LessonTabsComponent from "./LessonTabsComponent";
import ModuleListComponent from "./ModuleListComponent";
import TopicPillsComponent from "./TopicPillsComponent";
import WidgetListComponent from "./WidgetListComponent";

class CourseEditorComponent extends React.Component{
    state = {

    }

    render(){
        return (
            <div>
                <div className="container-fluid">
                    <div className="row nbar-editor">
                        <div className="col-1">
                            <a className="wbdv-course-editor wbdv-close" href="#">
                                <i className="fas fa-times fa-2x wbdv-back"></i>
                            </a>
                        </div>
                        <div className="col-3">
                            <b className="wbdv-course-title">CS5610 - WebDev</b>
                        </div>
                        <div className="col-7">
                            <LessonTabsComponent/>
                        </div>
                        <div className="col-1">
                            <i className="fas fa-plus fa-2x" ></i>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4 mudule-lst">
                        <div className="nav flex-column nav-pills wbdv-module-list" aria-orientation="vertical">
                            <ModuleListComponent/>
                            <div>
                                <a className="btn wbdv-module-item-add-btn">
                                    <i className="fas fa-plus fa-2x wbdv-module-add"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-8 topics">
                        <TopicPillsComponent/>

                        <div className="row wbdv-preview-row">
                            <div className="col-9"></div>
                            <div className="col-3 preview-toggle">
                                <a className="btn btn-success">
                                    <b style={{color: "white"}}>Save</b>
                                </a>
                                <span style={{margin: "10px"}}>
                                      <b>Preview</b>
                                 </span>
                                <a href="#">
                                    <i className="fas fa-toggle-off fa-2x" style={{color: "black"}}></i>
                                </a>
                            </div>
                        </div>

                        <WidgetListComponent/>

                        <div align="right">
                            <button className="wbdv-static"><i className="fas fa-plus-circle fa-3x"></i></button>
                        </div>


                    </div>
                </div>
            </div>

        )
    }
}

export default CourseEditorComponent