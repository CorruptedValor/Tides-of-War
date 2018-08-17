import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';
import MarketingBlurb from './landingPage/MarketingBlurb';
import Header from './Header';
import Rankings from './landingPage/Rankings';
import Footer from './Footer';
import WarhammerImage from '../frontends/Images/warhammer40kbg.jpg';
import '../frontends/Styles/style.css';
import Admin from './admin/Admin';
//import Butts from './Butts';

class App extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }

    render () {
        return (
            <div className ="container" style={{backgroundImage: "url(" +WarhammerImage+")" }}>
                <BrowserRouter>
                    <div className="container">
                        <Header />
                        {/* <Rankings /> */}
                        <Route exact path="/" component = {MarketingBlurb}/>
                        <Route exact path="/admin" component = {Admin}/>
                        <Footer />
                    </div>
                </BrowserRouter>
            </div>

        );
    };
};

export default connect(null, actions)(App);
