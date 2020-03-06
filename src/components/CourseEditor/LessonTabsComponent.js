import React from "react";
import './CourseEditor.css'
import LessonItemComponent from "./LessonItemComponent";
import lessonService from "../../services/LessonService";

import {createLesson, deleteLesson, findLessonsForModule, updateLesson} from "../../actions/lessonActions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class LessonTabsComponent extends React.Component {

    componentDidMount() {
        this.props.findLessonsForModule(this.props.moduleId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.moduleId !== prevProps.moduleId) {
            this.props.findLessonsForModule(this.props.moduleId)
        }
    }

    state = {
        selectedLessonId: '',
        editingLessonId: '',
        lesson: {
            title: '',
            _id: ''
        }
    }
    render() {
        return (
            <div className="row">
                <ul className="nav nav-pills">
                    {
                        this.props.lessons &&
                        this.props.lessons.map(lesson =>
                            <li className="nav-item" onClick={() => this.setState({
                                selectedLessonId: lesson._id
                            })}
                            key={lesson._id}>
                                <a className={`nav-link wbdv-page-tab ${(this.state.selectedLessonId === lesson._id)?'active':''}`}>
                                    {
                                        this.state.editingLessonId !== lesson._id &&
                                        <div>
                                            <Link className="wbdv-link" to={`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${lesson._id}`}>
                                                <b className="lesson-title">{lesson.title}</b>
                                            </Link>
                                            <div className="wbdv-module-item-delete-btn btn" onClick={() => {this.setState({lesson: lesson, editingLessonId:lesson._id})}}>
                                                <i className="fas fa-pencil-alt wbdv-edit-module"/>
                                            </div>
                                        </div>
                                    }
                                    {
                                        this.state.editingLessonId === lesson._id &&
                                        <div>
                                            <input className="lesson-input"
                                                onChange={(e) => {
                                                    const newTitle = e.target.value
                                                    this.setState(prevState => ({
                                                        lesson: {
                                                            ...prevState.lesson,
                                                            title: newTitle
                                                        }
                                                    }))
                                                }}
                                                value={this.state.lesson.title}/>
                                            <div className="delete-and-save-btn">
                                                <span className="btn module-btn">
                                                    <i className="fas fa-times" onClick={() => {
                                                        this.props.deleteLesson(lesson._id)
                                                    }}>
                                                </i>
                                                </span>

                                                <span className="btn module-btn">
                                                    <i className="fas fa-check" onClick={
                                                    ()=>{
                                                        this.props.updateLesson(this.state.lesson._id,this.state.lesson)
                                                            .then(status=>{this.setState({editingLessonId: ''})})
                                                    }
                                                }
                                                ></i>
                                                </span>
                                            </div>
                                        </div>
                                    }
                                </a>

                                {/*</div>*/}
                            </li>

                        )
                    }
                </ul>
                <div className="btn">
                    <i className="fas fa-plus fa-2x add-lesson" onClick={()=>this.props.createLesson(this.props.moduleId)}></i>
                </div>
            </div>
        )
    }
}


const stateToPropertyMapper = (state) => {
    return {
        lessons: state.lessons.lessons
    }
}

const dispatcherToPropertyMapper = (dispatch) => ({
    findLessonsForModule : (moduleId) =>
        lessonService.findLessonsForModule(moduleId)
            .then(actualLessons => dispatch(findLessonsForModule(actualLessons)))
    ,

    deleteLesson : (lessonId) =>
        lessonService.deleteLesson(lessonId)
            .then(status => {
                    dispatch(deleteLesson(lessonId))
                }
            )
    ,

    createLesson : (moduleId) =>
        lessonService.createLesson(moduleId,{title: "New Lesson"})
            .then(actualLesson => dispatch(createLesson(actualLesson)))

    ,

    updateLesson : (lessonId,lesson) =>
        lessonService.updateLesson(lessonId,lesson)
            .then(actualLesson => dispatch(updateLesson(lessonId,lesson)))
})

export default connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper
)(LessonTabsComponent)