const initialState = {
    widgets: [
    ]
}
const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_WIDGET":
            return {
                widgets: state.widgets.map(widget => widget.id === action.widget.id ? action.widget : widget)
            }
        case "DELETE_WIDGET":
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            }
        case "CREATE_WIDGET":
            return {
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case "FIND_WIDGETS_FOR_TOPIC":
            return {
                widgets: action.widgets
            }
        default:
            return state
    }
}

export default widgetReducer