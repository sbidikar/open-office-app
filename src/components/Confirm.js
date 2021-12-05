/* eslint-disable no-unused-vars */
import React, { useState, Component } from 'react';
import '../components/Search/style.css';
import axios from 'axios';
import OpenOfficeDataService from '../service/OpenOfficeDataService';
import { Redirect, Link } from 'react-router-dom';

const Confirm = ()=>  {
//  constructor(props) {
//     super(props);
//     this.state = {
//         office: [],
//         userId: this.state.userId,

//     }
//  }
const [userId,userName,floorMapId,reservedDate] = useState(this);

 const handleBooking =(event) =>{
        event.preventDefault()

        // const desk = {userId,userName,floorMapId,reservedDate}
        const desk = {
            "userId": 123457,
            "userName": "Siddharth",
            "floorMapId": 2,
            "reservedDate": "2021-12-04"
          }
        fetch('http://localhost:8080/openofficeapi/rent',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(desk)

        }).then(() => {
            console.log("Booking submitted")
        })
        console.log(desk)
    }

 


// render(){
return( 
<div>
    <form onLoad={handleBooking}></form>
<table className="table">
                        <thead>
                            <tr>
                                {/* <th>Id</th> */}
                                <th>Location</th>
                                <th>Building</th>
                                <th>Floor</th>
                                <th>Desk</th>
                                <th>Reserve Date</th>
                            </tr>
                        </thead>
                        <tbody>

                        <tr>
                                            <td>Charlotte</td>
                                            <td>Building A</td>
                                            <td>2</td>
                                            <td>2001</td>
                                            <td>12-03-2021</td>
                                            {/* <td>{this.location}</td> */}
                                            {/* <td>{this.building}</td> */}
                                            {/* <td>{this.floormap}</td> */}
                                            {/* <td>{this.desk}</td> */}
                                            {/* <td>{this.reservedDate}</td> */}
                                        </tr>

                        </tbody>
                    </table>
<button onClick={handleBooking}>Book</button> 
<button><Link to="/equipments">Need Equipment?</Link></button>
<button onClick={Redirect('/search')}>Cancel</button>
</div>





)}
// }

export default Confirm;




                            /* {
                                this.desk.map(
                                    office =>
                                        <tr key={office.id}>
                                            <td>{office.location}</td>
                                            <td>{office.building}</td>
                                            <td>{office.floor}</td>
                                            <td>{office.desk}</td>
                                            <td>{office.reserveDate}</td>
                                        </tr>
                                )
                            } */