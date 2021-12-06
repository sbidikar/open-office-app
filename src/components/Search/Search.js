/* eslint-disable no-unused-vars */
import React, { useState, Component } from 'react';
import { Route, Redirect, Link } from 'react-router-dom'
import './style.css';
// import Table from 'react-bootstrap/Table'
// import { Table, Input } from 'antd';
import axios from 'axios';
// import { userColumns } from './columns';
// import { useTableSearch } from './useTableSearch';
// const { Search } = Input
import OpenOfficeDataService from '../../service/OpenOfficeDataService';

// Search = query => {
//     const url = `http://localhost:8080/openofficeapi/search=${query}`;
//     const token = {};
//     this.token = token;

//     fetch(url)
//       .then(results => results.json())
//       .then(data => {
//         if (this.token === token) {
//           this.setState({ building: data.results });
//         }
//       });
//   };

//   componentDidMount() {
//     this.Search("");
//   }

    // const repos;
    // console.log(JSON.stringify(repos));
    // if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  // 
class Search extends Component {
// const Search = () => {
  // const [location, building, floor, reserveDate] = useState('');
  // const [setLocation, setBuilding,setFloor, setReserveDate] = useState('');

  constructor(props){
    super(props);
     this.state={
       openOffice: [],
      //  userid: this.user.userid,
      //  username: '',
      // useremail: '',
      location: '',
      building: '',
      floor: '',
      desk: ''
    }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleSearch = this.handleSearch.bind(this);

     }
  
    //  componentDidMount(){
    //    this.handleSubmit();
    //  }

    //  newDesk(){

    //  }

    //  const  
    //  handleSearch = (event) =>{
      handleSearch(event){
      //  this.setState({location:event.target.value, building:event.target.value, floor:event.target.value, reserveDate: event.target.value});
      this.setState({
      [event.target.name]
            : event.target.value
    });
      // setSearch(event.target.value);
    //  const searchTerm = event.target.value;
    //  setSearch(searchTerm); 
    //  const newFilter = repos.filter((repo)=>{
    //     return repo.building.includes(searchTerm.toLowerCase());
  };

//  const 
//  handleSubmit = (event) =>{
  handleSubmit(event){
  event.preventDefault();
  const openOffice ={
    params:  {
  //     // // userDetail: {
  //     //   userId: "",
  //     //   userName: "",
  //     //   userEmail: ""
  //     // // },
  //     // ,
      location:this.state.location,
      building:this.state.building,
      floor:this.state.floor,
      reserveDate:this.state.reserveDate
    }
  }

    // location: this.location,
    // building: this.building;
    // floor: this.floor;
    // desk: this.desk;
  
  axios.post(
    `http://localhost:8080/openofficeapi/search` ,{
      openOffice
  //     headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': 'JWT fefege...'
  // } ,  
  
  // data: {
  //   location:this.state.location,
  //   building:this.state.building,
  //   floor:this.state.floor,
  //   reserveDate:this.state.reserveDate
  // }

  }


    )

    // const data = {location, building, floor, reserveDate}
    // fetch('http://localhost:8080/openofficeapi/search',{
    //     method: 'POST',
    //     headers: {"Content-Type": "application/json"},
    //     body: JSON.stringify(data)
    // })


  // `http://localhost:8080/openofficeapi/search?location=${location}&building=${building}&floor=${floor}&desk=${desk}`  
  // )
  //  {params:
  //    { 
  //   location: "",
  //   building: "",
  //   floor: "",
  //   reserveDate: ""
  // }})
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
  // OpenOfficeDataService.findDesk(this.state.userid,this.state.username,this.useremail,this.state.location,this.state.building,this.state.floor,this.state.reserveDate)
  .then(res => {
          // const
          // res.json(
            console.log(res);
            console.log(res.data);

            this.setState({openOffice: res.data});
            // console.log(openOffice);
        })

};

    // const { repos } = props;
    // console.log(JSON.stringify(repos));
    // if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  // 
// }
// const Search = (props) => {
//   const [showResults, setShowResults] = React.useState(false)
//   const show = () => setShowResults(true)
//     const handleSearch = (event) =>{
//     }

//  Repos = (props) => {

//   const { repos } = props;
//   console.log(JSON.stringify(repos));
//   if (!repos || repos.length === 0) return <p>No repos, sorry</p>;}
 
// const 
book = () =>{
  <Redirect to="/confirm" />
}



  render() {
  return (
  <div>
    <form onSubmit= {(event)=>this.handleSubmit(event)}>
      <h2 className='list-head'>Search for an Open Office...</h2>
      <div>
      <label>Location: </label>
      {/* <select value={location} onChange={this.handleSearch}> */}
      {/* <option>Charlotte</option> */}
      {/* </select> */}
      <input type="text" onChange={this.handleSearch}/>
      {/* (e) => setName(e.target.value) */}
      </div>
      <div>
      <label>Building: </label>
      {/* <select value={building} onChange={this.handleSearch}> */}
      {/* <option>Charlotte</option> */}
      {/* </select> */}
      <input type="text"onChange={this.handleSearch} />
      {/* <input type="text" onChange={(event) =>handleSearch(event)} /> */}
      </div>
      <div>
      <label>Floor: </label>
      <input type="text" onChange={this.handleSearch}/>
      </div>
      <div>
      <label>Date: </label>
      <input type="date" onChange={this.handleSearch} />
      {/* onClick={this.handleSearch} */}
      </div>
      <button type= "submit" formMethod = "POST" formAction="" onSubmit={(event) => this.handleSubmit(event)}> FindAll </button>
      </form>
     {/* <button> { showResults ? <Results /> : null }</button> */}
     <div class="results">
<table responsive striped> 
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
      {this.state.openOffice.map((repo) => {
        return (
    <tr>
      <td> {repo.location}</td>
      <td>{repo.building}</td>
      <td>{repo.floor}</td>
      <td>{repo.desk}</td>
      <td> 
       
        <button type="button"><Link to="/confirm">Reserve</Link></button>
      
      </td>
    </tr>
      );
    })}
  </tbody>
        </table>
        </div>
        </div>
  
  
    );
  };
};


  //click show?
//   const Results = () => (
//   <div class="results" onClick={show}>

// <table responsive striped> 
//         <thead>
//           <tr>
//             <th>Location</th>
//             <th>Building</th>
//             <th>Floor</th>
//             <th>Desk</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//       {repos.map((repo) => {
//         return (
//     <tr>
//       <td> {repo.location}</td>
//       <td>{repo.building}</td>
//       <td>{repo.floor}</td>
//       <td>{repo.desk}</td>
//       <td><button>Reserve</button></td>
//     </tr>
//       );
//     })}
//   </tbody>
//         </table>
//         </div>
// );

export default Search;