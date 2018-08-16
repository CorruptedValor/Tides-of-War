import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';
import '../frontends/Styles/style.css'

class Header extends Component {
    renderContent(){
        // switch (this.props.auth) {
        //     case null:
        //         return;
        //     case false:
        //         return <li><a href="/auth/google">Login with Google</a></li>;
        //     default:
        //         return [
        //             <li key="1"><Payments/></li>,
        //             <li key="3" style={{ margin: '0 10px'}}>
        //                 Credits: {this.props.auth.credits}
        //             </li>,
        //             <li key="2"><a href="/api/logout">Logout</a></li>
        //         ];
        // }
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
                                <a className="rightLink">Submit List</a>
                                <a className="rightLink">Sign In</a>
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