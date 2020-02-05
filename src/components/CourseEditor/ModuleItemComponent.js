import React from "react";
import './CourseEditor.css'

const ModuleItemComponent = ({module}) => {
    return (
        <div className="wbdv-module-item nav-item">
            <a className="nav-link  wbdv-module-item-title" href="#">
                {module.title}
                <button className="btn" className="wbdv-module-item-delete-btn"><i
                    className="fas fa-times fa-lg wbdv-module-times"></i></button>
            </a>
        </div>
    )
}

export default ModuleItemComponent