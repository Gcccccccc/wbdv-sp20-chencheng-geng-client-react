
const widgets = [];

const cmp = (w1, w2) =>{
    return w1.order - w2.order
};

const widgetReducer = (
    state = {widgets: widgets}, action) => {
    switch (action.type) {
        case "UPDATE_WIDGET":
            return {
                widgets: state.widgets.map(widget => widget.id === action.widget.id ? action.widget : widget)
            };
        case "DELETE_WIDGET":
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            };
        case "CREATE_WIDGET":
            return {
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            };
        case "FIND_WIDGETS_FOR_TOPIC":
            return {
                widgets: action.widgets.sort(cmp)
            };
        case "FIND_ALL_WIDGETS":
            return {
                widgets: action.widgets
            };
        case "MOVE_UP":
            return {
                widgets:newUpWidgets(action.widget,state.widgets)
            };
        case "MOVE_DOWN":
            return {
                widgets:newDownWidgets(action.widget,state.widgets)
            };
        default:
            return state
    }
};

const  newDownWidgets = (targetWidget,widgets) => {
    let newArr = [...widgets];
    if(newArr.length  < 2){
        return newArr
    }
    for (let i = 0; i < newArr.length; i++){
        if(targetWidget.id === newArr[i].id && i < newArr.length - 1){
            let tempWidget = newArr[i + 1];
            newArr[i + 1] = newArr[i];
            newArr[i] = tempWidget;
            break;
        }
    }
    for(let i=0; i< newArr.length; i++){
        newArr[i].order = i + 1;
    }
    return newArr
};

const newUpWidgets = (targetWidget,widgets) => {
    let newArr = [...widgets];
    if(newArr.length  < 2){
        return newArr
    }
    for (let i = 0; i < newArr.length; i++){
        if(targetWidget.id === newArr[i].id && i > 0){
            let tempWidget = newArr[i - 1];
            newArr[i - 1] = newArr[i];
            newArr[i] = tempWidget;
            break;
        }
    }
    for(let i=0; i< newArr.length; i++){
        newArr[i].order = i + 1;
    }
    return newArr
};

export default widgetReducer