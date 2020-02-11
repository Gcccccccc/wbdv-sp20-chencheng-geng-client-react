export const findLessonsForModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001348430/modules/${moduleId}/lessons`)
        .then(response => response.json())


export const deleteLesson = (lessonId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001348430/lessons/${lessonId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export const updateLesson = (lessonId,lesson) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001348430/lessons/${lessonId}`,{
        method: 'PUT',
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
export  const createLesson = (moduleId,lesson) => {
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001348430/modules/${moduleId}/lessons`, {
        method: "POST",
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response=>response.json())

}
export default {
    deleteLesson,
    findLessonsForModule,
    createLesson,
    updateLesson
}