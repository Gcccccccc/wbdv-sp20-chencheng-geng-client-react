import React from "react";


class HeadingWidgetComponent extends React.Component{

    state = {
        widget : this.props.widget
    }


    render(){
        return(
            <div className="container">
                <div className="heading-widget">
                    {
                        !this.props.isPreview &&
                        <div>
                        <div className="row">
                            <div className="col-7 wbdv-heading-widget">
                                <h2>&nbsp;&nbsp;&nbsp;Heading Widget</h2>
                            </div>
                            <div className="col-5 hd-widget-row">
                                <a className="btn btn-success"
                                   onClick={()=>{
                                       this.props.updateWidget(this.state.widget.id,this.state.widget)
                                           .then(status=>{})
                                   }
                                   }>
                                    <b style={{color: "white"}}>Save</b>
                                </a>
                                {
                                    this.props.first.id !== this.state.widget.id &&
                                    <span className="btn" onClick={() => this.props.widgetUp(this.state.widget)}>
                                        <i className="fas fa-arrow-circle-up fa-2x"></i>
                                    </span>
                                }
                                {
                                    this.props.last.id !== this.state.widget.id &&
                                    <span className="btn" onClick={() => this.props.widgetDown(this.state.widget)}>
                                        <i className="fas fa-arrow-circle-down fa-2x"></i>
                                    </span>
                                }
                                <select className="form-control wbdv-widget-select"
                                        onChange={(e) => {
                                            const newType = e.target.value
                                            this.setState(prevState => ({
                                                widget: {
                                                    ...prevState.widget,
                                                    type: newType
                                                }
                                            }))
                                        }}
                                        value={this.state.widget.type}>
                                    <option value={"HEADING"}>
                                        Heading
                                    </option>
                                    <option value={"PARAGRAPH"}>
                                        Paragraph
                                    </option>
                                </select>
                                <span className="btn" onClick={() => {this.props.deleteWidget(this.props.widget.id)}}><i className="fas fa-times fa-2x"></i></span>
                                <i className="fas fa-times fa-3x btn module-btn" onClick={() => {
                                    this.props.deleteWidget(this.state.widget.id)
                                }}>
                                </i>
                            </div>
                        </div>
                        <div className="container">
                            <input className="course-editor-input form-control"
                                   value={this.state.widget.text} placeholder="Heading text" onChange={(e)=>{
                                        const newText = e.target.value
                                        this.setState(prevState => ({
                                            widget: {
                                                ...prevState.widget,
                                                text: newText
                                            }
                                            })
                                        )}}/>
                        </div>
                        <div className="container">
                            <select className="course-editor-select form-control"
                                onChange={(e) => {
                                    const newSize = parseInt(e.target.value)
                                    this.setState(prevState => ({
                                        widget: {
                                            ...prevState.widget,
                                            size: newSize
                                        }
                                    }))
                                }}
                                value={this.state.widget.size}>
                                <option value={1}>
                                    Heading 1
                                </option>
                                <option value={2}>
                                    Heading 2
                                </option>
                                <option value={3}>
                                    Heading 3
                                </option>
                                <option value={4}>
                                    Heading 4
                                </option>
                                <option value={5}>
                                    Heading 5
                                </option>
                            </select>
                        </div>
                        <div className="container">
                            <input className="course-editor-input form-control" value={this.state.widget.name} placeholder={"Widget Name"}
                                   onChange={(e)=>{
                                       const newName = e.target.value
                                       this.setState(prevState => ({
                                           widget: {
                                               ...prevState.widget,
                                               name: newName
                                           }})
                                       )}}/>
                        </div>
                        <h1>&nbsp;&nbsp;&nbsp;Preview</h1>
                        </div>
                    }
                    <div className="heading-text">
                        {this.state.widget.size===1 && <h1>{this.state.widget.text}</h1>}
                        {this.state.widget.size===2 && <h2>{this.state.widget.text}</h2>}
                        {this.state.widget.size===3 && <h3>{this.state.widget.text}</h3>}
                        {this.state.widget.size===4 && <h4>{this.state.widget.text}</h4>}
                        {this.state.widget.size===5 && <h5>{this.state.widget.text}</h5>}
                    </div>
                </div>
            </div>
        )
    }
}




export default HeadingWidgetComponent