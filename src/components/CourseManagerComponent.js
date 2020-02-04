import React from "react"
import {deleteCourse,findAllCourses,createCourse,updateCourse} from "../services/CourseService";

import CourseTableComponent from "./CourseTableComponent";
import CourseGridComponent from "./CourseGridComponent";
import './CourseManager.css'
import CourseEditorComponent from "./CourseEditor/CourseEditorComponent";

class CourseManagerComponent extends React.Component{
    state = {
        layout : 'table',
        courses : [],
        newCourseTitle : 'new course',
        editingCourse: false
    }

    componentDidMount = async () => {
        const allCourses = await findAllCourses()
        this.setState({
            courses: allCourses
        })
    }

    updateCourse = async (course_id,updatedCourse) => {
        const response = await updateCourse(course_id,updatedCourse)
        const courses = await findAllCourses()
        this.setState({
            courses: courses
        })
    }

    addCourse = async () =>
    {
        const newCourse = {
            title: this.state.newCourseTitle,
            ownedBy: 'me',
            lastModified: '2/3/2020'
        }

        const actualCourse = await createCourse(newCourse)
        console.log(actualCourse)
        const allCourses = await findAllCourses()
        this.setState({
            courses: allCourses
        })
    }

    updateForm = (e) =>
        this.setState({
            newCourseTitle: e.target.value
        })


    deleteCourse = async (deletedCourse) => {
        const status = await deleteCourse(deletedCourse._id)
        const courses = await findAllCourses()
        this.setState({
            courses: courses
        })
    }


    showCourseEditor = () =>
        this.setState({
            editingCourse: true
        })

    hideCourseEditor = () =>
        this.setState({
            editingCourse: false
        })

    render(){
        return (
            <div>
                {
                    this.state.editingCourse &&
                    <CourseEditorComponent
                        hideCourseEditor={this.hideCourseEditor}/>
                }


                {
                    !this.state.editingCourse &&
                    <div>
                        <div className="container-fluid">
                            <div className="row nbar">
                                <div className="col-sm-1 col-2">
                                    <i className="fas fa-bars fa-2x wbdv-field wbdv-hamburger"></i>
                                </div>
                                <label className="col-sm-2 d-none d-sm-block wbdv-label wbdv-course-manager">Course Manager</label>
                                <input type="text" placeholder="New Course Title"  value={this.state.newCourseTitle} onChange={this.updateForm} className="col-sm-7 col-8 wbdv-field wbdv-new-course"/>
                                <div className="col-sm-2 col-2 ">
                                    <div className="btn wbdv-button">
                                        <span className="fa-stack fa-1x wbdv-add-course" onClick={this.addCourse}>
                                            <i className="fas fa-circle fa-stack-2x"></i>
                                            <i className="fas fa-plus fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            this.state.layout === 'table' &&
                            <CourseTableComponent
                            courses={this.state.courses}
                            deleteCourse={this.deleteCourse}
                            showCourseEditor={this.showCourseEditor}
                            updateCourse={this.updateCourse}/>
                        }
                        {
                            this.state.layout == 'grid' &&
                            <CourseGridComponent
                            hideCourseEditor={this.hideCourseEditor}/>
                        }
                        <div className="wbdv-static">
                            <a className="wbdv-button wbdv-add-course"
                               href="#">
                                <i className="fas fa-plus-circle fa-3x"></i>
                            </a>
                        </div>
                    </div>

                }

            </div>
        )
    }
}


export default CourseManagerComponent