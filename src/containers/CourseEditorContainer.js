import React from "react";
import LessonTabsComponent from "../components/CourseEditor/LessonTabsComponent";
import ModuleListComponent from "../components/CourseEditor/ModuleListComponent";
import TopicPillsComponent from "../components/CourseEditor/TopicPillsComponent";
import WidgetListComponent from "../components/CourseEditor/WidgetListComponent";

class CourseEditorContainer extends React.Component{
    constructor(props) {
        super(props);
    }

    state = {
        modules : [
            {title:'Module 1 - Jquery'},
            {title:'Module 2 - React'},
            {title:'Module 3 - Redux'},
            {title:'Module 4 - Native'},
            {title:'Module 5 - Angular'},
            {title:'Module 6 - Node'},
            {title:'Module 7 - Mongo'}
        ],
        topics : [
            {title:'Topic 1'},
            {title:'Topic 2'},
            {title:'Topic 3'},
            {title:'Topic 4'}
        ],
        lessons : [
            {title:'Build'},
            {title:'Pages'},
            {title:'Theme'},
            {title:'Store'},
            {title:'Apps'},
            {title:'Settings'}
        ]
    }

    render(){
        return (
            <div>
                <div className="container-fluid">
                    <div className="row nbar-editor">
                        <div className="col-1">
                            <a className="wbdv-course-editor wbdv-close" href="#" onClick={this.props.hideCourseEditor}>
                                <i className="fas fa-times fa-2x wbdv-back"></i>
                            </a>
                        </div>
                        <div className="col-3">
                            <b className="wbdv-course-title">{this.props.courseId}</b>
                        </div>
                        <div className="col-7">
                            <LessonTabsComponent lessons={this.state.lessons}/>
                        </div>
                        <div className="col-1">
                            <i className="fas fa-plus fa-2x" ></i>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4 mudule-lst">
                        <div className="nav flex-column nav-pills wbdv-module-list" aria-orientation="vertical">
                            <ModuleListComponent modules={this.state.modules}/>
                            <div>
                                <a className="btn wbdv-module-item-add-btn">
                                    <i className="fas fa-plus fa-2x wbdv-module-add"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-8 topics">
                        <TopicPillsComponent topics={this.state.topics}/>

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

export default CourseEditorContainer