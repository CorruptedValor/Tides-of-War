import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';


import './styles/style.css';
import HomeIcon from './logo/HomeIcon';
import RoundsIcon from './logo/RoundsIcon';
import StatsIcon from './logo/StatsIcon';
import NewsIcon from './logo/NewsIcon';

  let currentPath = '';

class Header extends Component {



  setSVG(){
    console.log(currentPath);
    switch (currentPath) {
      case '/':
        return {'fill': '#d72323' };
        break;
      default:
        return {};
    }
  }

    renderContent(){
        if (this.props.user){
            switch (this.props.user.auth){
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
    }

<<<<<<< HEAD
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
                                      <NavLink to="/">Home</NavLink>
                                    </g>
                                </li>
                                <li>
                                    <g className="hovercolorGroup">
                                      <RoundsIcon/>
                                      <NavLink to="/rounds">Rounds</NavLink>
                                    </g>
                                </li>
                                <li>
                                    <g className="hovercolorGroup">
                                    <StatsIcon/>
                                    <NavLink to="/stats">Stats</NavLink>
                                    </g>
                                </li>
                                <li>
                                    <g className="hovercolorGroup">
                                      <NewsIcon/>
                                      <NavLink to="/news">News</NavLink>
                                    </g>
                                </li>
                                    <div className="topnavLine"></div>
                            </ul>
=======
  getPath(match, location){
    // console.log(match);
    // console.log(location);

    currentPath = location.pathname;

    if (!match){
      return false;
    } else {
      return true;
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
                  	<div className="hovercolorGroup">
                        <HomeIcon style={this.setSVG}/>
                        <NavLink exact to="/" activeStyle={{
                          fontWeight: 'bold',
                          color: 'red',
                          fill: 'red'
                        }}
                       isActive={this.getPath}>
                         Home
                       </NavLink>
                      </div>
                    </li>
                    <li>
                        <div className="hovercolorGroup">
                          <RoundsIcon/>
                          <NavLink to="/rounds">Rounds</NavLink>
>>>>>>> Some-new-branch
                        </div>
                    </li>
                    <li>
                        <div className="hovercolorGroup">
                        <StatsIcon/>
                        <NavLink to="/stats">Stats</NavLink>
                      </div>
                    </li>
                    <li>
                      <div className="hovercolorGroup">
                        <NewsIcon/>
                        <NavLink to="/news">News</NavLink>
                      </div>
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

function mapStateToProps({ user }){
    return { user };
};

export default connect(mapStateToProps)(Header);
