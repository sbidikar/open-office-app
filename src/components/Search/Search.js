/* eslint-disable no-unused-vars */
import React, { useState, createContext } from 'react';
import {Redirect, Link } from 'react-router-dom'
import './style.css'
import Button from '../Button'
import axios from 'axios';
// import BookContext from '../Book';
import Confirm from '../Confirm';
import Popup from '../Popup';

const Search = () => {
  const [location, setLocation] = useState('');
  const [building, setBuilding] = useState('');
  const [floor, setFloor] = useState('');
  const [reserveDate, setReserveDate] = useState('');
const [openOffice, setOpenOffice] = useState([]);
const [bookData, setBookData] = useState([]);


const [visibility, setVisibility] = useState(false);

const popupCloseHandler = (e) => {
  setVisibility(e);
};


const [showResults, setShowResults] = React.useState(false)
  const show = () => setShowResults(true)



 const handleSubmit = (event) =>{
  event.preventDefault();
    const desk = {location, building, floor, reserveDate}
    Object.keys(desk).forEach((key) => {
      if(!desk[key]) delete desk[key];
      if(desk.reserveDate === ""){
        setReserveDate(reserveDate);
    }
    console.log(reserveDate)
    })
    axios.post('http://localhost:8080/openofficeapi/search', desk)
  //   userDetail: {
  //     userId: "123456",
  //     userName: "Siddharth",
  //     userEmail: "sid@openoffice.com"
  //   },
  //   location: "Charlotte",
  //   building: "Building A",
  //   floor: "1",
  //   reserveDate: "2021-12-03"
  // }
  // )
  .then(res => {
            console.log(res);
            console.log(desk);
            console.log(res.data);
              setOpenOffice(res.data);
        })

      }
 const book = (event) =>{
   setBookData(event)
   console.log(bookData)
   console.log(reserveDate)
  //  if(!!event.reserveDate || event.reserveDate === ""){
  //    const nDate = new Date();
  //    setReserveDate(nDate)
  // //    event.reserveDate = new Date();
  // event.reserveDate = reserveDate;
  //   }
  // else{
   event.reserveDate = reserveDate;
//  }
setVisibility(!visibility)
   
}
 
 

  // render(){
  return (
  <div>
    <div className="searchForm">
    <form onSubmit= {handleSubmit}>
      <h2 className="list-head">Search for an Open Office...</h2>
      <div className="searchForm">
      <label>Location: </label>
      <input type="text" value={location} onChange={(event)=> setLocation(event.target.value)}/>
      </div>
      <div className="searchForm">
      <label>Building: </label>
      <input type="text" value={building} onChange={(event)=>setBuilding(event.target.value)} />
      </div>
      <div className="searchForm">
      <label>Floor: </label>
      <input type="text" value={floor} onChange={(event)=>setFloor(event.target.value)}/>
      </div>
      <div className="searchForm">
      <label>Date: </label>
      <input type="date" onChange={(event)=>setReserveDate(event.target.value)} />
      </div>
      <button type= "submit" onClick={show} onSubmit={handleSubmit}> FindAll </button>
      </form>
      </div>
      { showResults ?
     <div className="results">
       
<table> 
        <thead>
          <tr>
            <th>Location</th>
            <th>Building</th>
            <th>Floor</th>
            <th>Desk</th>
            <th></th>
            {/* <th>Reservation Date</th> */}
          </tr>
        </thead>
        <tbody>
       
      {openOffice.map((repo) => {
        return (
       
    <tr key={repo.id}>
      <td>{repo.location}</td>
      <td>{repo.building}</td>
      <td>{repo.floor}</td>
      <td>{repo.desk}</td>
      <td>
      {/* <BookContext.Provider value={book}> */}
        <Button type="submit" onClick={(event)=>book(repo)}>Reserve</Button>
        {/* (event)=>setBookData(openOffice.map(repo.id)) */}
        {/* </BookContext.Provider> */}
      </td>
    </tr>


      );
    })
    }

  </tbody>
        </table>
        </div>
        : null }
        <div>
        <Popup title={"Current Booking"} onClose={popupCloseHandler} show={visibility}>
        <Confirm book={bookData}/>
        </Popup>
        </div>
        </div>
  
  
    );
  };

export default Search;