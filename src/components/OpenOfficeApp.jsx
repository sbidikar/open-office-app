/* eslint-disable no-unused-vars */

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginComponent from './LoginComponent';
import AuthenticationService from '../service/AuthenticationService';
import Search from '../components/Search/Search'
import AuthenticatedRoute from './AuthenticatedRoute';
import ListDeskComponent from './ListDeskComponent';
import Equipments from './Equipments';
import Confirm from './Confirm';
import Bookings from './Bookings';

class OpenOfficeApp extends Component {

    render() {
        return (
            <>
                <Router>
                    <>
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" exact component={LoginComponent} />
                            <AuthenticatedRoute path="/search" exact component={Search} />
                            <Route path="/equipments" exact component={Equipments} />
                            <Route path="/confirm" exact component={Confirm} />
                            <Route path="/bookings" exact component={Bookings} />
                            {/* <AuthenticatedRoute path="/search" exact component={ListDeskComponent} /> */}
                        </Switch>
                    </>
                </Router>
            </>
        )
    }
}

export default OpenOfficeApp