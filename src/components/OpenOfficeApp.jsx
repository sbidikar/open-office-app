import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginComponent from './LoginComponent';
import AuthenticationService from '../service/AuthenticationService';
import AuthenticatedRoute from './AuthenticatedRoute';
import ListDeskComponent from './ListDeskComponent';
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
                        </Switch>
                    </>
                </Router>
            </>
        )
    }
}

export default OpenOfficeApp