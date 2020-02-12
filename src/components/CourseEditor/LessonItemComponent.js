// import React from "react";
// import CourseTableRowComponent from "../CourseTableRowComponent";
//
//
// class LessonTabs extends React.Component {
//
//     componentDidMount() {
//         this.props.findLessonsForModule(this.props.moduleId)
//     }
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         if(this.props.moduleId !== prevProps.moduleId) {
//             this.props.findLessonsForModule(this.props.moduleId)
//         }
//     }
//
//     state = {
//         selectedLessonId: '',
//         editingLessonId: '',
//         lesson: {
//             title: '',
//             _id: ''
//         }
//     }
//
//     render() {
//         return
//         <li className="nav-item">
//             <a className="nav-link wbdv-page-tab" href="#">
//                 <b>{lesson.title}</b>
//             </a>
//         </li>
//
//     }
// }
//
// export default LessonItemComponent