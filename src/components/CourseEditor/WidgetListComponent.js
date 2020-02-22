import React from "react";

import {createLesson, deleteLesson, findLessonsForModule, updateLesson} from "../../actions/lessonActions";
import {connect} from "react-redux";
import widgetService from "../../services/WidgetService";
import HeadingWidgetComponent from "./widgets/HeadingWidgetComponent";
import ParagraphWidgetComponent from "./widgets/ParagraphWidgetComponent";
class WidgetListComponent extends React.Component {

    componentDidMount() {
        this.props.findWidgetsForTopic(this.props.topicId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.topicId !== prevProps.topicId) {
            this.props.findWidgetsForTopic(this.props.topicId)
        }
    }

    state = {
        isPreview : false,
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
                            {
                                this.state.isPreview &&
                                <div className="btn" onClick={()=>{
                                    this.setState(
                                        {isPreview : false}
                                    )
                                }}>
                                  <i className="fas fa-toggle-on fa-2x"></i>
                                </div>
                            }
                            {
                                !this.state.isPreview &&
                                <div className="btn" onClick={()=>{
                                    this.setState(
                                        {isPreview : true}
                                    )
                                }}>
                                    <i className="fas fa-toggle-off fa-2x" style={{color: "black"}}></i>
                                </div>
                            }
                        </div>
                    </div>
                }
                {

                    this.props.widgets &&
                    this.props.widgets.map((widget)=>
                        <div key={widget.id}>
                            {
                                widget.type === "HEADING" &&
                                <HeadingWidgetComponent
                                    isPreview={this.state.isPreview}
                                    deleteWidget={this.props.deleteWidget}
                                    updateWidget={this.props.updateWidget}
                                    widget={widget}
                                    widgetUp={this.props.widgetUp}
                                    widgetDown={this.props.widgetDown}
                                    first={this.props.widgets[0]}
                                    last={this.props.widgets[this.props.widgets.length-1]}/>
                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                <ParagraphWidgetComponent
                                    isPreview={this.state.isPreview}
                                    deleteWidget={this.props.deleteWidget}
                                    updateWidget={this.props.updateWidget}
                                    widget={widget}
                                    widgetUp={this.props.widgetUp}
                                    widgetDown={this.props.widgetDown}
                                    first={this.props.widgets[0]}
                                    last={this.props.widgets[this.props.widgets.length-1]}/>
                            }
                        </div>
                    )
                }
                <div align="right">
                    <button className="wbdv-static" onClick={() => this.props.createWidget(this.props.topicId,this.props.widgets.length)}><i
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

    createWidget: (wid,len) =>
        widgetService.createWidget(wid,{type: "HEADING",size: 2,text:"new widget",order:len+15})
            .then(actualWidget => dispatch({
                type: "CREATE_WIDGET",
                widget: actualWidget
            })),

    findWidgetsForTopic: (wid) =>
        widgetService.findWidgetsForTopic(wid)
            .then(actualWidgets => dispatch({
                type: "FIND_WIDGETS_FOR_TOPIC",
                widgets: actualWidgets
            })),

    widgetUp: (widget) =>{
        dispatch({
            type: "MOVE_UP",
            widget: widget
        })},

    widgetDown: (widget) =>{
        dispatch({
            type: "MOVE_DOWN",
            widget: widget
        })}
})

export default connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper
)(WidgetListComponent)

