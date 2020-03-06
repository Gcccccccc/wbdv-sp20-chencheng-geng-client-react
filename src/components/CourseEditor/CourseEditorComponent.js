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
import widgetReducer from "../../reducers/WidgetReducer";

const rootReducer = combineReducers({
    modules: moduleReducer,
    lessons: lessonReducer,
    topics: topicReducer,
    widgets: widgetReducer
})
const store = createStore(rootReducer)

const CourseEditorComponent = ({match}) =>
        <Provider store={store}>
            <div>
                <div className="container-fluid">
                    <div className="row nbar-editor">
                        <div className="col-1">
                            <Link to="/">
                                <div className="wbdv-course-editor wbdv-close">
                                    <i className="fas fa-times fa-2x wbdv-back"></i>
                                </div>
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

                <div className="module-topic">
                    <div className="row">
                        <div className="col-4 module-list">
                            <ModuleListComponent courseId={match.params.courseId}/>
                        </div>

                        <div className="col-8 topics">
                            <TopicPillsComponent
                                moduleId={match.params.moduleId}
                                courseId={match.params.courseId}
                                lessonId={match.params.lessonId}/>

                            {
                                match.params.topicId &&
                                <WidgetListComponent
                                    topicId={match.params.topicId}/>
                            }

                        </div>
                    </div>
                </div>

            </div>
        </Provider>



export default CourseEditorComponent