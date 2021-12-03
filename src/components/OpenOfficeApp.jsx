import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginComponent from './LoginComponent';
import AuthenticationService from '../service/AuthenticationService';
import AuthenticatedRoute from './AuthenticatedRoute';
import ListDeskComponent from './ListDeskComponent';
import Equipments from './Equipments';
class OpenOfficeApp extends Component {


    render() {
        return (
            <>
                <Router>
                    <>
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" exact component={LoginComponent} />
                            <AuthenticatedRoute path="/search" exact component={ListDeskComponent} />
                            <Route path="/equipments" exact component={Equipments} />
                        </Switch>
                    </>
                </Router>
            </>
        )
    }
}

export default OpenOfficeApp