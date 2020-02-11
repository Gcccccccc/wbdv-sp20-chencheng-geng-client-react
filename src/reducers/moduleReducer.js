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
        case UPDATE_MODULE:{
            for (let i = 0; i<state.modules.length;i++)
            {
                if(state.modules[i]._id === action.moduleId)
                    state.modules[i] = action.module;
            }
            return state
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
                modules: state.modules.filter(module => module._id !== action.moduleId)
            }
        default:
            return state
    }
}

export default moduleReducer