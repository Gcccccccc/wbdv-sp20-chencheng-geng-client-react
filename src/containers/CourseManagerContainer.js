import React from "react"
import {deleteCourse,findAllCourses,createCourse,updateCourse} from "../services/CourseService";

import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";

import '../components/CourseManager.css'
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class CourseManagerContainer extends React.Component{
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

    toggle = () => {
        this.setState((prevState) => {
            if (prevState.layout === 'grid') {
                return {
                    layout: 'table'
                }
            } else {
                return {
                    layout: 'grid'
                }
            }
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
                <Router>
                    <Route
                        path={"/"}
                        exact={true}
                        render={(props) =>
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

                            <div className="container-fluid course-list-container">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 col-10">
                                            {
                                                this.state.layout === 'table' &&
                                                <span className="wbdv-header wbdv-title">&nbsp;&nbsp;&nbsp;Title</span>
                                            }
                                            {
                                                this.state.layout === 'grid' &&
                                                <span className="wbdv-header wbdv-title">&nbsp;&nbsp;&nbsp;Recent Documents</span>
                                            }
                                        </div>

                                        <div className="col-md-2 col-sm-4 d-none d-sm-block">
                                            {
                                                this.state.layout === 'table' &&
                                                <div>
                                                    <span className="wbdv-header wbdv-owner">Owned by</span>
                                                    <i className="fas fa-caret-down"></i>
                                                </div>
                                            }
                                            {
                                                this.state.layout === 'grid' &&
                                                <span className="wbdv-header wbdv-owner">Owned by me</span>
                                            }
                                        </div>
                                        <div className="col-md-2 d-none d-md-block">
                                            <span className="wbdv-header wbdv-last-modified">Last modified by me</span>
                                        </div>
                                        <div className="col-md-1 col-sm-1 col-1">
                                            {
                                                this.state.layout === 'table' &&
                                                <Link to="/grid">
                                                    <i className="fas fa-grip-horizontal fa-lg wbdv-button wbdv-grid-layout"
                                                       onClick={() => {
                                                           this.toggle();
                                                       }}>
                                                    </i>
                                                </Link>
                                            }
                                            {
                                                this.state.layout === 'grid' &&
                                                <Link to="/">
                                                    <i className="fas fa-list fa-lg wbdv-button wbdv-list-layout"
                                                       onClick={() => {
                                                           this.toggle();
                                                       }}>
                                                    </i>
                                                </Link>
                                            }
                                        </div>
                                        <div className="col-md-1 col-sm-1 col-1">
                                            <i className="fas fa-sort-alpha-down wbdv-header wbdv-sort"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <CourseTableComponent
                                courses={this.state.courses}
                                deleteCourse={this.deleteCourse}
                                showCourseEditor={this.showCourseEditor}
                                updateCourse={this.updateCourse}/>
                            <div className="wbdv-static">
                                <a className="wbdv-button wbdv-add-course"
                                   href="#">
                                    <i className="fas fa-plus-circle fa-3x"></i>
                                </a>
                            </div>
                        </div>
                        }
                    />

                    <Route
                        path={"/grid"}
                        exact={true}
                        render={(props) =>
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

                            <div className="container-fluid course-list-container">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 col-10">
                                            {
                                                this.state.layout === 'table' &&
                                                <span className="wbdv-header wbdv-title">&nbsp;&nbsp;&nbsp;Title</span>
                                            }
                                            {
                                                this.state.layout === 'grid' &&
                                                <span className="wbdv-header wbdv-title">&nbsp;&nbsp;&nbsp;Recent Documents</span>
                                            }
                                        </div>

                                        <div className="col-md-2 col-sm-4 d-none d-sm-block">
                                            {
                                                this.state.layout === 'table' &&
                                                <div>
                                                    <span className="wbdv-header wbdv-owner">Owned by</span>
                                                    <i className="fas fa-caret-down"></i>
                                                </div>
                                            }
                                            {
                                                this.state.layout === 'grid' &&
                                                <span className="wbdv-header wbdv-owner">Owned by me</span>
                                            }
                                        </div>
                                        <div className="col-md-2 d-none d-md-block">
                                            <span className="wbdv-header wbdv-last-modified">Last modified by me</span>
                                        </div>
                                        <div className="col-md-1 col-sm-1 col-1">
                                            {
                                                this.state.layout === 'table' &&
                                                <Link to="/grid">
                                                    <i className="fas fa-grip-horizontal fa-lg wbdv-button wbdv-grid-layout"
                                                       onClick={() => {
                                                           this.toggle();
                                                       }}>
                                                    </i>
                                                </Link>
                                            }
                                            {
                                                this.state.layout === 'grid' &&
                                                <Link to="/">
                                                    <i className="fas fa-list fa-lg wbdv-button wbdv-list-layout"
                                                       onClick={() => {
                                                           this.toggle();
                                                       }}>
                                                    </i>
                                                </Link>
                                            }
                                        </div>
                                        <div className="col-md-1 col-sm-1 col-1">
                                            <i className="fas fa-sort-alpha-down wbdv-header wbdv-sort"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <CourseGridComponent
                                courses={this.state.courses}
                                deleteCourse={this.deleteCourse}
                                showCourseEditor={this.showCourseEditor}
                                updateCourse={this.updateCourse}/>
                            <div className="wbdv-static">
                                <a className="wbdv-button wbdv-add-course"
                                   href="#">
                                    <i className="fas fa-plus-circle fa-3x"></i>
                                </a>
                            </div>
                        </div>
                            }
                    />

                    <Route
                        path={"/course-editor/:courseId"}
                        exact={true}
                        render={(props) =>
                            <CourseEditorComponent
                                courseId = {props.match.params.courseId}
                                {...props}
                            />
                        }
                    />

                    <Route
                        path={"/course-editor/:courseId/module/:moduleId"}
                        exact={true}
                        render={(props) =>
                            <CourseEditorComponent
                                courseId = {props.match.params.courseId}
                                moduleId = {props.match.params.moduleId}
                                {...props}
                            />
                        }
                    />

                    <Route
                        path={"/course-editor/:courseId/module/:moduleId/lesson/:lessonId"}
                        exact={true}
                        render={(props) =>
                            <CourseEditorComponent
                                courseId = {props.match.params.courseId}
                                moduleId = {props.match.params.moduleId}
                                lessonId = {props.match.params.lessonId}
                                {...props}
                            />
                        }
                    />

                    <Route
                        path={"/course-editor/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId"}
                        exact={true}
                        render={(props) =>
                            <CourseEditorComponent
                                courseId = {props.match.params.courseId}
                                moduleId = {props.match.params.moduleId}
                                lessonId = {props.match.params.lessonId}
                                topicId = {props.match.params.topicId}
                                {...props}
                            />
                        }
                    />

                </Router>
        </div>

        )
    }
}


export default CourseManagerContainer