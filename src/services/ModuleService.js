import {API_URL} from "../common/constants";

export const findModuleForCourse = (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001348430/courses/${courseId}/modules`)
        .then(response => response.json())


export const deleteModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001348430/modules/${moduleId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export const updateModule = (moduleId,module) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001348430/modules/${moduleId}`,{
        method: 'PUT',
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const createModule = (courseId,module) => {
     fetch(`https://wbdv-generic-server.herokuapp.com/api/001348430/courses/${courseId}/modules`, {
        method: "POST",
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response=>response.json())

}
export default {
    deleteModule,
    findModuleForCourse,
    createModule,
    updateModule
}