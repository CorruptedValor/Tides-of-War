import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Landing from './landingPage/Landing';
import Header from './Header';
import Footer from './Footer';
import WarhammerImage from './images/warhammer40kbg.jpg';
import './styles/style.css';
import Admin from './admin/Admin';
import Stats from './statsPage/Stats';
import News from './newsPage/News';

class App extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }

    render () {
        return (
            <div className ="container" style={{backgroundImage: "url("+WarhammerImage+")", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <BrowserRouter>
                    <div className="container">
                        <Header />
                        <Route exact path="/" component = {Landing}/>
                        <Route exact path="/stats" component = {Stats}/>
                        <Route exact path="/news" component = {News}/>
                        <Route exact path="/admin" component = {Admin}/>
                        <Footer />
                    </div>
                </BrowserRouter>
            </div>
        );
    };
};

export default connect(null, actions)(App);
