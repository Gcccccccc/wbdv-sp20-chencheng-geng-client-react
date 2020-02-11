export const findTopicsForLesson = (lessonId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001348430/lessons/${lessonId}/topics`)
        .then(response => response.json())


export const deleteTopic = (topicId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001348430/topics/${topicId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export const updateTopic = (topicId,topic) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001348430/topics/${topicId}`,{
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
export  const createTopic = (lessonId,topic) => {
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001348430/lessons/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response=>response.json())

}
export default {
    deleteTopic,
    findTopicsForLesson,
    createTopic,
    updateTopic
}