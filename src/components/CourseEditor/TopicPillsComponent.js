import React from "react";
import WidgetListComponent from "./WidgetListComponent";
import topicService from "../../services/TopicService";
import widgetService from "../../services/WidgetService";
import {connect} from "react-redux";
import {createTopic, deleteTopic, findTopicsForLesson, updateTopic} from "../../actions/topicActions";
import {Link} from "react-router-dom";
import {deleteWidget} from "../../services/WidgetService";


class TopicPillsComponent extends React.Component{
    componentDidMount() {
        this.props.findTopicsForLesson(this.props.lessonId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.lessonId !== prevProps.lessonId || this.props.moduleId !== prevProps.moduleId) {
            this.props.findTopicsForLesson(this.props.lessonId)
        }
    }

    state = {
        selectedTopicId: '',
        editingTopicId: '',
        topic: {
            title: '',
            id: ''
        }
    }
    render() {
        return(
            <div className="row">
                <ul className="nav nav-pills wbdv-topic-pill-list">
                    {
                        this.props.topics &&
                        this.props.topics.map(topic =>
                            <li className="nav-item" onClick={() => this.setState({
                                selectedTopicId: topic.id})} key={topic.id}>
                                <a className={`nav-link wbdv-topic-pill ${(this.state.selectedTopicId === topic.id)?'active':''}`}>
                                    {
                                        this.state.editingTopicId !== topic.id &&
                                        <div>
                                            <Link className="wbdv-link" to={`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${topic.id}`}><b>{topic.title}</b></Link>
                                            <div className="wbdv-module-item-delete-btn btn" onClick={() => {this.setState({topic: topic, editingTopicId:topic.id})}}>
                                                <i className="fas fa-pencil-alt wbdv-edit-module"/>
                                            </div>
                                        </div>
                                    }
                                    {
                                        this.state.editingTopicId === topic.id &&
                                        <div>
                                            <input className="topic-input"
                                                   onChange={(e) => {
                                                       const newTitle = e.target.value
                                                       this.setState(prevState => ({
                                                           topic: {
                                                               ...prevState.topic,
                                                               title: newTitle
                                                           }
                                                       }))
                                                   }}
                                                   value={this.state.topic.title}/>
                                            <div className="delete-and-save-btn">
                                                <i className="fas fa-times fa-3x btn module-btn" onClick={() => {
                                                    this.props.deleteTopic(topic.id)
                                                }}>
                                                </i>
                                                <i className="fas fa-check fa-3x btn module-btn" onClick={
                                                    ()=>{
                                                        this.props.updateTopic(this.state.topic.id,this.state.topic)
                                                            .then(status=>{this.setState({editingTopicId: ''})})
                                                    }
                                                }></i>
                                            </div>
                                        </div>
                                    }
                                </a>
                            </li>
                        )
                    }
                    <div>
                        <a className="btn wbdv-module-item-add-btn" onClick={()=>this.props.createTopic(this.props.lessonId)}>
                            <i className="fas fa-plus fa-2x wbdv-topic-add"></i>
                        </a>
                    </div>
                </ul>

            </div>

        )}

}

const stateToPropertyMapper = (state) => {
    return {
        topics: state.topics.topics
    }
}

const dispatcherToPropertyMapper = (dispatch) => ({
    findTopicsForLesson : (lessonId) =>
        topicService.findTopicsForLesson(lessonId)
            .then(actualLessons => dispatch(findTopicsForLesson(actualLessons)))
    ,

    deleteTopic : (topicId) =>
        topicService.deleteTopic(topicId)
            .then(status => {
                    dispatch(deleteTopic(topicId))
                }
            )

    ,

    createTopic : (lessonId) =>
        topicService.createTopic(lessonId,{title: "New Topic"})
            .then(actualLesson => dispatch(createTopic(actualLesson)))

    ,

    updateTopic : (topicId,topic) =>
        topicService.updateTopic(topicId,topic)
            .then(actualLesson => dispatch(updateTopic(topicId,topic)))
})

export default connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper
)(TopicPillsComponent)