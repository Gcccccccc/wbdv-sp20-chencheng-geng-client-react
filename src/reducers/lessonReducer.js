import {CREATE_LESSON, DELETE_LESSON, FIND_LESSONS_FOR_MODULE, UPDATE_LESSON} from "../actions/lessonActions";

const initialState = {
    lessons: [
    ]
}

const lessonReducer = (state = initialState, action) => {
    switch(action.type) {
        // TODO: move all strings to constants
        case FIND_LESSONS_FOR_MODULE:
            return {
                lessons: action.lessons
            }
        case UPDATE_LESSON:{
            return {
                lessons: state.lessons.map(lesson =>
                    lesson._id === action.lessonId ? action.lesson : lesson
                )
            }
        }
        case CREATE_LESSON:
            return {
                lessons: [
                    ...state.lessons,
                    action.newLesson
                ]
            }
        case DELETE_LESSON:
            return {
                lessons: state.lessons.filter(lesson => lesson._id !== action.lessonId)
            }
        default:
            return state
    }
}

export default lessonReducer