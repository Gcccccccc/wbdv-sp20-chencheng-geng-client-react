import React from "react";

const WidgetListComponent = () => {
    return (
        <div>
            <div className="container">
                <div className="heading-widget">
                    <div className="row">
                        <div className="col-8 wbdv-heading-widget">
                            <h2>&nbsp;&nbsp;&nbsp;Heading Widget</h2>
                        </div>
                        <div className="col-4 hd-widget-row">
                            <i className="fas fa-arrow-circle-up fa-2x"></i>
                            <i className="fas fa-arrow-circle-down fa-2x"></i>
                            <select className="form-control wbdv-widget-select">
                                <option>
                                    Heading
                                </option>
                            </select>
                            <i className="fas fa-times fa-2x"></i>
                        </div>
                    </div>
                    <div className="container">
                        <input className="course-editor-input form-control" type="text"
                               value="heading text"/>
                    </div>
                    <div className="container">
                        <select className="course-editor-select form-control">
                            <option>
                                heading 1
                            </option>
                        </select>
                    </div>
                    <div className="container">
                        <input className="course-editor-input form-control" type="text" value="Widget name"/>
                    </div>
                    <h2>&nbsp;&nbsp;&nbsp;Preview</h2>
                    <h1>&nbsp;&nbsp;&nbsp;Heading text</h1>
                </div>
            </div>
        </div>
    )
}

export default WidgetListComponent