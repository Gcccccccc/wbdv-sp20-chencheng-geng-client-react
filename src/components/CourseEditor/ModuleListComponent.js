import React from "react";
import ModuleItemComponent from "./ModuleItemComponent";
import {connect} from "react-redux"
import moduleService from "../../services/ModuleService";
import {
    createModule,
    deleteModule,
    FIND_MODULES_FOR_COURSE,
    findModulesForCourse,
    updateModule
} from "../../actions/moduleActions";


class ModuleListComponent extends React.Component{
    state = {
        selected: '',
        module: {
            title:'',
            _id:''
        },
        editing: ''
    }

    componentDidMount() {
        this.props.findModulesForCourse(this.props.courseId)
    }
    render() {
        return(
            <div>
                {
                    this.props.modules &&
                    this.props.modules.map(module =>
                        <div className={`container-fluid ${(this.state.selected === module._id)?'wbdv-module-item-highlighted':'wbdv-module-item'}`}
                            onClick={()=>this.setState({selected: module._id})} key={module._id}>
                            {
                                this.state.editing !== module._id &&
                                <div>
                                    <a className="wbdv-module-item-title btn">
                                        {module.title}
                                    </a>
                                    <a className="wbdv-module-item-delete-btn btn" onClick={() => {this.setState({module: module, editing:module._id})}}>
                                        <i className="fas fa-pencil-alt wbdv-edit-module"/>
                                    </a>
                                </div>
                            }
                            {
                                this.state.editing === module._id &&
                                <div>
                                    <input className="module-input" onChange={(e) => {
                                        const newTitle = e.target.value
                                        this.setState(prevState => ({
                                            module: {
                                                ...prevState.module,
                                                title: newTitle
                                            }
                                        }))
                                    }}
                                           value={this.state.module.title}/>
                                    <div className="delete-and-save-btn">
                                        <i className="fas fa-times fa-3x btn module-btn" onClick={() => {
                                            this.props.deleteModule(module._id)
                                        }}>
                                        </i>
                                        <i className="fas fa-check fa-3x btn module-btn" onClick={
                                            ()=>{
                                                this.props.updateModule(this.state.module._id,this.state.module)
                                                    .then(status=>{this.setState({editing: ''})})
                                            }
                                        }
                                        ></i>
                                    </div>
                                </div>
                            }
                        </div>
                )}
                <div>
                    <a className="btn wbdv-module-item-add-btn" onClick={()=>this.props.createModule(this.props.courseId)}>
                        <i className="fas fa-plus fa-2x wbdv-module-add"></i>
                    </a>
                </div>
            </div>
        )
    }
}
const stateToPropertyMapper = (state) => {
    return {
        modules : state.modules.modules
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findModulesForCourse : (courseId) =>
            moduleService.findModulesForCourse(courseId)
                .then(actualModules => dispatch(findModulesForCourse(actualModules)))
        ,

        deleteModule : (moduleId) =>
            moduleService.deleteModule(moduleId)
                .then(status => {
                        dispatch(deleteModule(moduleId))
                    }
                )
        ,

        createModule : (courseId) =>
            moduleService.createModule(courseId,{title: "New Module"})
                .then(actualModule => dispatch(createModule(actualModule)))

        ,

        updateModule : (moduleId,module) =>
            moduleService.updateModule(moduleId,module)
                .then(actualModule => dispatch(updateModule(moduleId,module)))

    }

}
export default connect(stateToPropertyMapper,dispatchToPropertyMapper)(ModuleListComponent)