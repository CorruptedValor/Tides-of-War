import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';

import './styles/style.css';
import HomeIcon from './Logo/HomeIcon';
import RoundsIcon from './Logo/RoundsIcon';
import StatsIcon from './Logo/StatsIcon';
import NewsIcon from './Logo/NewsIcon';

class Header extends Component {
    renderContent(){
        console.log(this.props.auth);
        
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return [
                    <a key ="1" className="rightLink" href="/auth/google" >Submit List</a>,
                    <a key ="2" className="rightLink" href="/auth/google">Sign In</a>
                ];
            default:
                return [
                    <a key ="1" className="rightLink" >Submit List</a>,
                    <a key ="2" className="rightLink" href="/api/logout">Sign Out</a>
                ];
        }
    }

    render (){
        return(
            <nav>
               <div className="topnav" align="center" id="headshadow" style={{borderBottomColor: '#47315a',
               borderBottomHeight: 1 }}>
                    <div className="topnavWidth">
                        <div className="topnavWrap">
                            <ul>
                                <li>
                                		<g className="hovercolorGroup">
                                      <HomeIcon/>
                                      <a href="/" id="topnavLinkSpace">Home</a>
                                    </g>
                                </li>
                                <li>
                                    <g className="hovercolorGroup">
                                      <RoundsIcon/>
                                      <a href="/rounds" id="topnavLinkSpace">Rounds</a>
                                    </g>
                                </li>
                                <li>
                                    <g className="hovercolorGroup">
                                    <StatsIcon/>
                                    <a href="/stats" id="topnavLinkSpace">Stats</a>
                                    </g>
                                </li>
                                <li>
                                    <g className="hovercolorGroup">
                                      <NewsIcon/>
                                      <a href="/news" id="topnavLinkSpace">News</a>
                                    </g>
                                </li>
                                    <div className="topnavLine"></div>
                            </ul>
                        </div>
                            <div className="topnavRight">
                                {this.renderContent()}
                            </div>
                    </div>
                </div>
            </nav>
        );
    };
};

function mapStateToProps({ auth }){
    return { auth };
};

export default connect(mapStateToProps)(Header);
