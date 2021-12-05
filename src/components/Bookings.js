// /* eslint-disable no-unused-vars */
import React, { useState, Component } from 'react';
import '../components/Search/style.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Bookings extends Component {
 constructor(props) {
    super(props);
    this.state = {
        floor: null
    }
 }

// }
//  handleBooking =() =>{
//     // const response =  makeBooking();
//     // if (response){
//     //     console.log(response);
//     //     handleClose();
//     }
// }


render(){
return( 
   
<div>
<h1>Active Bookings</h1>
<button >View</button> 
<button>Cancel</button>
</div>





)}
}

export default Bookings;

