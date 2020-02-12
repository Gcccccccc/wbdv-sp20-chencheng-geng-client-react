import React from "react";
import WidgetListComponent from "./WidgetListComponent";
import topicService from "../../services/TopicService";
import {connect} from "react-redux";
import {createTopic, deleteTopic, findTopicsForLesson, updateTopic} from "../../actions/topicActions";


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
            _id: ''
        }
    }
    render() {
        return(
            <div>
                <ul className="nav nav-pills wbdv-topic-pill-list">
                    {
                        this.props.topics &&
                        this.props.topics.map(topic =>
                            <li className="nav-item" onClick={() => this.setState({
                                selectedTopicId: topic._id})} key={topic._id}>
                                <a className={`nav-link wbdv-topic-pill ${(this.state.selectedTopicId === topic._id)?'active':''}`}>
                                    {
                                        this.state.editingTopicId !== topic._id &&
                                        <div>
                                            <span><b>{topic.title}</b></span>
                                            <div className="wbdv-module-item-delete-btn btn" onClick={() => {this.setState({topic: topic, editingTopicId:topic._id})}}>
                                                <i className="fas fa-pencil-alt wbdv-edit-module"/>
                                            </div>
                                        </div>
                                    }
                                    {
                                        this.state.editingTopicId === topic._id &&
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
                                                    this.props.deleteTopic(topic._id)
                                                }}>
                                                </i>
                                                <i className="fas fa-check fa-3x btn module-btn" onClick={
                                                    ()=>{
                                                        this.props.updateTopic(this.state.topic._id,this.state.topic)
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
                </ul>

                <div>
                    <a className="btn wbdv-module-item-add-btn" onClick={()=>this.props.createTopic(this.props.lessonId)}>
                        <i className="fas fa-plus fa-2x wbdv-topic-add"></i>
                    </a>
                </div>


            {/*    <div>*/}
            {/*        <div className="row wbdv-preview-row">*/}
            {/*            <div className="col-9"></div>*/}
            {/*            <div className="col-3 preview-toggle">*/}
            {/*                <a className="btn btn-success">*/}
            {/*                    <b style={{color: "white"}}>Save</b>*/}
            {/*                </a>*/}
            {/*                <span style={{margin: "10px"}}>*/}
            {/*                              <b>Preview</b>*/}
            {/*                         </span>*/}
            {/*                <a href="#">*/}
            {/*                    <i className="fas fa-toggle-off fa-2x" style={{color: "black"}}></i>*/}
            {/*                </a>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*        <WidgetListComponent/>*/}

            {/*        <div align="right">*/}
            {/*            <button className="wbdv-static"><i className="fas fa-plus-circle fa-3x"></i></button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
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