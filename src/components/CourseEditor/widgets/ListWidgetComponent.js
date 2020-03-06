import React from "react";


class ListWidgetComponent extends React.Component{

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
                                    <h2>&nbsp;&nbsp;&nbsp;List Widget</h2>
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
                                <textarea className="text-area form-control"
                                          value={this.state.widget.text} placeholder={"Put each\nItem in\na separate row"} onChange={(e)=>{
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
                            <select className="form-control list-type"
                                    onChange={(e) => {
                                        const newListType = e.target.value
                                        this.setState(prevState => ({
                                            widget: {
                                                ...prevState.widget,
                                                listType: newListType
                                            }
                                        }))
                                    }}
                                    value={this.state.widget.listType}>
                                <option value={"UL"}>
                                    Unordered List
                                </option>
                                <option value={"OL"}>
                                    Ordered List
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
                        {
                            this.state.widget.listType === "OL" &&
                            <ol>
                                {this.state.widget.text.split("\n").map(text =>
                                    <li>{text}</li>)
                                }
                            </ol>
                        }
                        {
                            this.state.widget.listType === "UL" &&
                            <ul>
                                {this.state.widget.text.split("\n").map(text =>
                                    <li>{text}</li>)
                                }
                            </ul>
                        }
                    </div>
                </div>
            </div>
        )
    }
}




export default ListWidgetComponent