/* eslint-disable no-unused-vars */
import React, { useState, Component, useContext } from 'react';
import '../components/Search/style.css';
import axios from 'axios';
import './Search/style.css'
import { Redirect, Link } from 'react-router-dom';


const Confirm =({book}) =>{

    const [floorMapId, setFloorMapId] = useState('')
const [reservedDate, setReservedDate] = useState('')
// const [userId, setUserId] = useState('')
const [desk, setDesk] = useState([])
const handleBooking= (event)=>{
    event.preventDefault();
    const booking = {floorMapId,reservedDate}
    
    Object.keys(booking).forEach((key) => {
        if(booking.reservedDate === ""){
            setReservedDate(new Date())
        }
        if(booking.reservedDate !== book.reserveDate){
            setReservedDate(book.reserveDate)
            console.log(booking.reservedDate)
        }
        if(booking.floorMapId === "" || book.id !== booking.floorMapId){
            setFloorMapId(book.id)
        }
        if(!booking[key]) delete booking[key];
      })
      console.log(booking)
      console.log(book.reserveDate)
      console.log(booking.reservedDate)
   axios.post('http://localhost:8080/openofficeapi/save', booking)
//         fetch('http://localhost:8080/openofficeapi/save',{
//             method: 'POST',
//             headers: {"Content-Type": "application/json"},
//             body: JSON.stringify(booking)
// })
        .then(res => {
            // if(booking !== null){
            console.log("Booking submitted")
            console.log(desk)
            setDesk(res.data)
            // console.log(res.data)
            console.log(booking)
            console.log(booking.reservedDate)


        })
}


return( 
<div>
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

                        <tr key ={book.id}>
                                            <td>{book.location}</td> 
                                            <td>{book.building}</td> 
                                            <td>{book.floor}</td> 
                                             <td>{book.desk}</td>
                                             <td>{book.reserveDate}</td>
                                        </tr>

                        </tbody>
                    </table>
<button onClick={handleBooking}><Link className="links" to="/bookings" >Book</Link></button> 
{/* <button ><Link className="links" to="/equipments" >Need Equipment?</Link></button> */}
<button><Link className="links" to="/search" >Cancel</Link></button>
</div>





)

}

export default Confirm;
