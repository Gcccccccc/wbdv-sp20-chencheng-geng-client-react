import React from "react"
import {deleteCourse,findAllCourses,createCourse,updateCourse} from "../services/CourseService";
import CourseManagerHeadingComponent from "./CourseManagerHeadingComponent";

class CourseManagerComponent extends React.Component{
    state = {
        layout : 'table',
        courses : [],
    }
    componentDidMount = async () => {
        const allCourses = await findAllCourses()
        this.setState({
            courses: allCourses
        })
    }

    render(){
        return (
            <CourseManagerHeadingComponent/>

        )
    }
}


export default CourseManagerComponent