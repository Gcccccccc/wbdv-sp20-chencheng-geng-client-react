import React from "react";
import LessonTabsComponent from "../components/CourseEditor/LessonTabsComponent";
import ModuleListComponent from "../components/CourseEditor/ModuleListComponent";
import TopicPillsComponent from "../components/CourseEditor/TopicPillsComponent";
import WidgetListComponent from "../components/CourseEditor/WidgetListComponent";
import {Link} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import moduleReducer from "../reducers/moduleReducer";
import {Provider} from "react-redux";
import lessonReducer from "../reducers/lessonReducer";

const rootReducer = combineReducers({
    modules: moduleReducer,
    lessons: lessonReducer
})
const store = createStore(rootReducer)

const CourseEditorContainer = ({match}) =>
        <Provider store={store}>
            <div>
                <div className="container-fluid">
                    <div className="row nbar-editor">
                        <div className="col-1">
                            <Link to="/">
                                <a className="wbdv-course-editor wbdv-close" href="#">
                                    <i className="fas fa-times fa-2x wbdv-back"></i>
                                </a>
                            </Link>
                        </div>
                        <div className="col-3">
                            <b className="wbdv-course-title">{match.params.courseId}</b>
                        </div>
                        <div className="col-7">
                            {/*<LessonTabsComponent*/}
                            {/*    moduleId={match.params.moduleId}*/}
                            {/*    courseId={match.params.courseId}/>*/}
                        </div>
                        <div className="col-1">
                            <i className="fas fa-plus fa-2x" ></i>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4 mudule-lst">
                        <div className="nav flex-column nav-pills wbdv-module-list" aria-orientation="vertical">
                            <ModuleListComponent courseId={match.params.courseId}/>
                        </div>
                    </div>

                    <div className="col-8 topics">
                        {/*<TopicPillsComponent*/}
                        {/*    moduleId={match.params.moduleId}*/}
                        {/*    courseId={match.params.courseId}*/}
                        {/*    topicId={match.params.topicId}/>*/}

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
        </Provider>



export default CourseEditorContainer