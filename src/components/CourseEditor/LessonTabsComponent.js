import React from "react";
import './CourseEditor.css'

const LessonTabsComponent = () => {
    return(
    <ul className="nav nav-pills">
        <li className="nav-item">
            <a className="nav-link wbdv-page-tab" href="#">
                <b>Build</b>
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link active wbdv-page-tab" href="#">
                <b>Pages</b>
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link wbdv-page-tab" href="#">
                <b>Theme</b>
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link wbdv-page-tab" href="#">
                <b>Store</b>
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link wbdv-page-tab" href="#">
                <b>App</b>
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link wbdv-page-tab" href="#">
                <b>Settings</b>
            </a>
        </li>
    </ul>
    )
}

export default LessonTabsComponent