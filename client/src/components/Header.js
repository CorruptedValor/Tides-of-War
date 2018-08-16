import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';
import '../frontends/Styles/style.css'

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
               <div className="topnav" align="center" id="headshadow">
                    <div className="topnavWidth">
                        <div className="topnavWrap">
                            <ul>
                                <li>
                                    <a href="/" id="topnavLinkSpace">Home</a>
                                </li>
                                <li>
                                    <g className="hovercolorGroup">
                                       <a href="/rounds" id="topnavLinkSpace">Rounds</a>
                                    </g>
                                </li>
                                <li>
                                    <g className="hovercolorGroup">
                                    <a href="/stats" id="topnavLinkSpace">Stats</a>
                                    </g>
                                </li>
                                <li>
                                    <g className="hovercolorGroup">
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