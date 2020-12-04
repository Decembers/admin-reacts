
import React, { Component } from 'react';
import {  HashRouter, Switch, Route } from 'react-router-dom';
// import Login from './pages/login/login';

// import Admin from './pages/admin/admin';
//  HashRouter 改为BrowserRouter       路径无#   BrowserRouter

class App extends Component {

    render() {
        return (

            <HashRouter>
                <Switch>
                    {/* <Route path="/Login" Component={Login} />
                    <Route path="/" Component={Admin} /> */}

                </Switch>
            </HashRouter>

        )
    }
}

export default App

