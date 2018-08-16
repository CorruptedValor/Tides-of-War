import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Butts from './Butts';

class App extends Component {
    componentDidMount(){
        // this.props.fetchUser();
    }

    render () {
        return (
            <div className ="container">
                <BrowserRouter>
                    <div className="container">
                        <Route exact path="/" component = {Butts}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)(App);
