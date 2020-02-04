import React from "react";


const ModuleListComponent = () =>{
    return(
        <div>
            <div className="wbdv-module-item nav-item">
                <a className="nav-link  wbdv-module-item-title" href="#">
                    Module 1 - jQuery
                    <button className="btn" className="wbdv-module-item-delete-btn"><i
                        className="fas fa-times fa-lg wbdv-module-times"></i></button>
                </a>
            </div>
            <div className="wbdv-module-item wbdv-module-item-active nav-item">
                <a className="nav-link  wbdv-module-item-title active" href="#">
                    Module 2 - React
                    <button className="btn" className="wbdv-module-item-delete-btn">
                        <i className="fas fa-times fa-lg wbdv-module-times"></i>
                    </button>
                </a>
            </div>
            <div className="wbdv-module-item nav-item">
                <a className="nav-link wbdv-module-item-title" href="#">
                    Module 3 - Redux
                    <button className="btn" className="wbdv-module-item-delete-btn"><i
                        className="fas fa-times fa-lg wbdv-module-times"></i></button>
                </a>
            </div>
            <div className="wbdv-module-item nav-item">
                <a className="nav-link wbdv-module-item-title" href="#">
                    Module 5 - Native
                    <button className="btn" className="wbdv-module-item-delete-btn"><i
                        className="fas fa-times fa-lg wbdv-module-times"></i></button>
                </a>
            </div>
            <div className="wbdv-module-item nav-item">
                <a className="nav-link wbdv-module-item-title" href="#">
                    Module 5 - Angular
                    <button className="btn" className="wbdv-module-item-delete-btn"><i
                        className="fas fa-times fa-lg wbdv-module-times"></i></button>
                </a>
            </div>
            <div className="wbdv-module-item nav-item">
                <a className="nav-link wbdv-module-item-title" href="#">
                    Module 6 - Node
                    <button className="btn" className="wbdv-module-item-delete-btn"><i
                        className="fas fa-times fa-lg wbdv-module-times"></i></button>
                </a>
            </div>
            <div className="wbdv-module-item nav-item">
                <a className="nav-link wbdv-module-item-title" href="#">
                    Module 7 - Mongo
                    <button className="btn" className="wbdv-module-item-delete-btn"><i
                        className="fas fa-times fa-lg wbdv-module-times"></i></button>
                </a>
            </div>
        </div>
    )
}

export default ModuleListComponent