// /* eslint-disable no-unused-vars */
import React, { useState, Component } from 'react';
import '../components/Search/style.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const Bookings = () =>  {


//  const [floorMapId, setfloorMapId] = useState('')
//     const [name, setName] = useState('')
//     const [description, setDescription] = useState('')
//     const [deskId, setDeskId] = useState('')
    const [reservedDate, setReservedDate] = useState('')
    const [bookings, setBookings] = useState([])


    const onSubmit = (e) => {
        e.preventDefault()
        const data = {reservedDate}

        Object.keys(data).forEach((key) => {
            if(!data[key]) delete data[key];
        //     if(data.reserveDate === ""){
        //       setReserveDate(reserveDate);
        //   }
          console.log(data)
          })
axios.post('http://localhost:8080/openofficeapi/search/findByReservedDate',data)
        // fetch('http://localhost:8080/openofficeapi/search/findByReservedDate',{
        //     method: 'POST',
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify(data)})
        .then((data) => {
            console.log("Bookings found")
            this.setState({bookings:data.data})
        })
        console.log(data)
    }




// }
//  handleBooking =() =>{
//     // const response =  makeBooking();
//     // if (response){
//     //     console.log(response);
//     //     handleClose();
//     }
// }


// render(){
return( 
   
<div>
<h1>Active Bookings</h1>
    <form onSubmit={onSubmit}>
      <label>Date: </label>
      <input type="date" onChange={(event)=>setReservedDate(event.target.value) } />
      <button type= "submit" onSubmit={onSubmit}> Find Bookings </button>
      </form>
<div>
    <table>
    <thead>
    <tr>
            <th>Location</th>
            <th>Building</th>
            <th>Floor</th>
            <th>Desk</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
      {bookings.map((repo) => {
        return (
    <tr>
      <td> {repo.location}</td>
      <td>{repo.building}</td>
      <td>{repo.floor}</td>
      <td>{repo.desk}</td>
    </tr>
      );
    })}
  </tbody>
   </table>
   {/* <button >View</button>  */}
{/* <button>Cancel</button> */}
</div>
</div>





)}
// }

export default Bookings;

