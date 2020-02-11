import React from "react";
import ModuleItemComponent from "./ModuleItemComponent";
import {connect} from "react-redux"
import moduleService from "../../services/ModuleService";
import {
    createModule,
    deleteModule,
    FIND_MODULES_FOR_COURSE,
    findModuleForCourse,
    updateModule
} from "../../actions/moduleActions";


class ModuleListComponent extends React.Component{
    componentDidMount() {
        this.props.findModuleForCourse(this.props.courseId)
    }
    render() {
        return(
            <div>
                {
                    this.props.modules &&
                    this.props.modules.map(function (module, index) {
                        return <ModuleItemComponent
                            module={module}
                        />
                    })
                }
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
        findModuleForCourse : (courseId) => {
            moduleService.findModuleForCourse(courseId)
                .then(actualModules => dispatch(findModuleForCourse(actualModules)))
        },

        deleteModule : (moduleId) => {
            moduleService.deleteModule(moduleId)
                .then(status => dispatch(deleteModule(moduleId))
                )
        },

        createModule : (courseId) => {
            const newModule = {title: "New Module"}
            moduleService.createModule(courseId,newModule)
                .then(actualModule => dispatch(createModule(actualModule)))

        },

        updateModule : (moduleId,module) => {
            moduleService.updateModule(moduleId,module)
                .then(actualModule => dispatch(updateModule(moduleId,module)))
        }
    }

}
export default connect(stateToPropertyMapper,dispatchToPropertyMapper)(ModuleListComponent)