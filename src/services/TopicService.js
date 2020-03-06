export const findTopicsForLesson = (lessonId) =>
    fetch(`https://tranquil-citadel-07134.herokuapp.com/api/lessons/${lessonId}/topics`)
        .then(response => response.json())


export const deleteTopic = (topicId) =>
    fetch(`https://tranquil-citadel-07134.herokuapp.com/api/topics/${topicId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export const updateTopic = (topicId,topic) =>
    fetch(`https://tranquil-citadel-07134.herokuapp.com/api/topics/${topicId}`,{
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const createTopic = (lessonId,topic) =>
    fetch(`https://tranquil-citadel-07134.herokuapp.com/api/lessons/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response=>response.json())


export default {
    deleteTopic,
    findTopicsForLesson,
    createTopic,
    updateTopic
}