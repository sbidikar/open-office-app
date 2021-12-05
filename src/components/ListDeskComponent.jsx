/* eslint-disable no-unused-vars */

import React, { Component } from 'react'
import OpenOfficeDataService from "../service/OpenOfficeDataService";

class ListDeskComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: [],
            message: null
        }
        this.refreshCourses = this.refreshCourses.bind(this)
    }

    componentDidMount() {
        this.refreshCourses();
    }

    refreshCourses() {
        OpenOfficeDataService.retrieveAllCourses()//HARDCODED
            .then(
                response => {
                    this.setState({ courses: response.data })
                }
            )
    }


    render() {
        console.log('render')
        return (
            <div className="container">
                <h3>All Desk</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Location</th>
                                <th>Desk</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.courses.map(
                                    course =>
                                        <tr key={course.id}>
                                            <td>{course.id}</td>
                                            <td>{course.location}</td>
                                            <td>{course.desk}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListDeskComponent