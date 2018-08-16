import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import MarketingBlurb from './Landing Page/MarketingBlurb';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WarhammerImage from '../frontends/Images/warhammer40kbg.jpg';
import '../frontends/Styles/style.css';
//import Butts from './Butts';

class App extends Component {
    componentDidMount(){
        // this.props.fetchUser();
    }

    render () {
        return (
            <div className ="container" style={{backgroundImage: "url(" +WarhammerImage+")" }}>
                <BrowserRouter>
                    <div className="container">
                        <Header />
                        <MarketingBlurb />
                        <Route exact path="/"/>
                        <Footer />
                    </div>
                </BrowserRouter>
            </div>

        );
    };
};

export default connect(null, actions)(App);
