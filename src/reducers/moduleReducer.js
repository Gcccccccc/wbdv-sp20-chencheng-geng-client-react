import {CREATE_MODULE, DELETE_MODULE, FIND_MODULES_FOR_COURSE, UPDATE_MODULE} from "../actions/moduleActions";

const initialState = {
    modules: [
    ]
}

const moduleReducer = (state = initialState, action) => {
    switch(action.type) {
         // TODO: move all strings to constants
        case FIND_MODULES_FOR_COURSE:
            return {
                modules: action.modules
            }
        case UPDATE_MODULE:
            return {
                modules: state.modules.map(module =>
                    module._id === action.moduleId ? action.module : module
                )
            }

        case CREATE_MODULE:
            return {
                modules: [
                    ...state.modules,
                    action.newModule
                ]
            }
        case DELETE_MODULE:
            return {
                modules: state.modules.filter(
                    module => module._id !== action.moduleId)
            }
        default:
            return state
    }
}

export default moduleReducer