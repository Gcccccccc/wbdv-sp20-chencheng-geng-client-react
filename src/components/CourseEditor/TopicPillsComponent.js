import React from "react";


const TopicPillsComponent = () =>{
    return(
        <div>
            <ul className="nav nav-pills wbdv-topic-pill-list">
                <li className="nav-item">
                    <a className="nav-link wbdv-topic-pill" href="#">
                        <b>Topic 1</b>
                    </a>
                </li>
                <li className="nav-item ">
                    <a className="nav-link active wbdv-topic-pill" href="#">
                        <b>Topic 2</b>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link wbdv-topic-pill" href="#">
                        <b>Topic 3</b>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link wbdv-topic-pill" href="#">
                        <b>Topic 4</b>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-plus wbdv-topic-add-btn"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default TopicPillsComponent