export const findWidgetsForTopic = (tid) =>
    fetch(`https://tranquil-citadel-07134.herokuapp.com/api/topics/${tid}/widgets`)
        .then(response => response.json())

export const deleteWidget = (wid) =>
    fetch(`https://tranquil-citadel-07134.herokuapp.com/api/widgets/${wid}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export const updateWidget = (wid,widget) =>
    fetch(`https://tranquil-citadel-07134.herokuapp.com/api/widgets/${wid}`,{
        method: 'PUT',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const createWidget = (tid,widget) =>
    fetch(`https://tranquil-citadel-07134.herokuapp.com/api/topics/${tid}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response=>response.json())

export default {
    deleteWidget,
    findWidgetsForTopic,
    createWidget,
    updateWidget
}