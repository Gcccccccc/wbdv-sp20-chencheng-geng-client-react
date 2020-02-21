import React from "react";

import {createLesson, deleteLesson, findLessonsForModule, updateLesson} from "../../actions/lessonActions";
import {connect} from "react-redux";
import widgetService from "../../services/WidgetService";
import HeadingWidgetComponent from "./widgets/HeadingWidgetComponent";
class WidgetListComponent extends React.Component {

    componentDidMount() {
        this.props.findWidgetsForTopic(this.props.topicId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.topicId !== prevProps.topicId) {
            this.props.findWidgetsForTopic(this.props.topicId)
        }
    }

    render() {
        return (
            <div>
                {
                    this.props.widgets.length !== 0  &&
                    <div className="row wbdv-preview-row">
                        <div className="col-9"></div>
                        <div className="col-3 preview-toggle">
                            <span style={{margin: "10px"}}>
                                          <b>Preview</b>
                                     </span>
                            <a href="#">
                                <i className="fas fa-toggle-off fa-2x" style={{color: "black"}}></i>
                            </a>
                        </div>
                    </div>
                }
                {
                    this.props.widgets &&
                    this.props.widgets.map((widget)=><HeadingWidgetComponent deleteWidget={this.props.deleteWidget} updateWidget={this.props.updateWidget} widget={widget}/>)
                }
                <div align="right">
                    <button className="wbdv-static" onClick={() => this.props.createWidget(this.props.topicId)}><i
                        className="fas fa-plus-circle fa-3x"></i></button>
                </div>

            </div>
        )
    }
}

const stateToPropertyMapper = (state) => {
    return {
        widgets: state.widgets.widgets
    }
}

const dispatcherToPropertyMapper = (dispatch) => ({
    updateWidget: (wid, widget) =>
        widgetService.updateWidget(wid,widget)
            .then(status => dispatch({
                type: 'UPDATE_WIDGET',
                widget: widget
            })),

    deleteWidget: (wid) =>
        widgetService.deleteWidget(wid)
            .then(status => dispatch({
                type: 'DELETE_WIDGET',
                widgetId: wid
            })),

    createWidget: (tid) =>
        widgetService.createWidget(tid,{style: "HEADING",size: 2,text:"new widget"})
            .then(actualWidget => dispatch({
                type: "CREATE_WIDGET",
                widget: actualWidget
            })),

    findWidgetsForTopic: (tid) =>
        widgetService.findWidgetsForTopic(tid)
            .then(actualWidgets => dispatch({
                type: "FIND_WIDGETS_FOR_TOPIC",
                widgets: actualWidgets
            })),

})

export default connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper
)(WidgetListComponent)