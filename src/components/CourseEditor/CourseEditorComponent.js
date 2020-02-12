import React from "react";
import LessonTabsComponent from "./LessonTabsComponent";
import ModuleListComponent from "./ModuleListComponent";
import TopicPillsComponent from "./TopicPillsComponent";
import WidgetListComponent from "./WidgetListComponent";
import {Link} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import moduleReducer from "../../reducers/moduleReducer";
import {Provider} from "react-redux";
import lessonReducer from "../../reducers/lessonReducer";
import topicReducer from "../../reducers/topicReducer";

const rootReducer = combineReducers({
    modules: moduleReducer,
    lessons: lessonReducer,
    topics: topicReducer
})
const store = createStore(rootReducer)

const CourseEditorComponent = ({match}) =>
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
                        <div className="col-8">
                            <LessonTabsComponent
                                moduleId={match.params.moduleId}
                                courseId={match.params.courseId}/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4 mudule-lst">
                        <ModuleListComponent courseId={match.params.courseId}/>
                    </div>

                    <div className="col-8 topics">
                        <TopicPillsComponent
                            moduleId={match.params.moduleId}
                            courseId={match.params.courseId}
                            lessonId={match.params.lessonId}/>
                    </div>
                </div>
            </div>
        </Provider>



export default CourseEditorComponent