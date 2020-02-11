import {CREATE_TOPIC, DELETE_TOPIC, FIND_TOPICS_FOR_LESSON, UPDATE_TOPIC} from "../actions/topicActions";

const initialState = {
    topics: [
    ]
}

const topicReducer = (state = initialState, action) => {
    switch(action.type) {
        // TODO: move all strings to constants
        case FIND_TOPICS_FOR_LESSON:
            return {
                topics: action.topics
            }
        case UPDATE_TOPIC:{
            for (let i = 0; i<state.topics.length;i++)
            {
                if(state.topics[i]._id === action.topicId)
                    state.topics[i] = action.topic;
            }
            return state
        }
        case CREATE_TOPIC:
            return {
                topics: [
                    ...state.topics,
                    action.newTopic
                ]
            }
        case DELETE_TOPIC:
            return {
                topics: state.topics.filter(topic => topic._id !== action.topicId)
            }
        default:
            return state
    }
}

export default topicReducer