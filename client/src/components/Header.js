import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';

import '../frontends/Styles/style.css';
import HomeIcon from '../frontends/Logo/HomeIcon';
import RoundsIcon from '../frontends/Logo/RoundsIcon';
import StatsIcon from '../frontends/Logo/StatsIcon';
import NewsIcon from '../frontends/Logo/NewsIcon';

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
               <div className="topnav" align="center" id="headshadow" style={{borderBottomColor: '#47315a',
               borderBottomHeight: 1 }}>
                    <div className="topnavWidth">
                        <div className="topnavWrap">
                            <ul>
                                <li>
                                		<g class="hovercolorGroup">
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
