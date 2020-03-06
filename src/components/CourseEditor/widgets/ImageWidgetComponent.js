import React from "react";


class ImageWidgetComponent extends React.Component{

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
                                    <h2>&nbsp;&nbsp;&nbsp;Image Widget</h2>
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
                                            value={this.state.widget.type}>>
                                        <option value={"HEADING"}>
                                            Heading
                                        </option>
                                        <option value={"PARAGRAPH"}>
                                            Paragraph
                                        </option>
                                        <option value={"IMAGE"}>
                                            Image
                                        </option>
                                        <option value={"LIST"}>
                                            List
                                        </option>
                                    </select>
                                    <span className="btn" onClick={() => {this.props.deleteWidget(this.props.widget.id)}}>
                                        <i className="fas fa-times fa-2x"></i>
                                    </span>

                                </div>
                            </div>
                            <div className="container">
                                <input className="course-editor-input form-control"
                                       value={this.state.widget.url} placeholder="http://lorempixel.com/300/150" onChange={(e)=>{
                                    const newURL = e.target.value
                                    this.setState(prevState => ({
                                            widget: {
                                                ...prevState.widget,
                                                url: newURL
                                            }
                                        })
                                    )}}/>
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
                    <img  className="img" src={this.state.widget.url} />
                </div>
            </div>
        )
    }
}




export default ImageWidgetComponent