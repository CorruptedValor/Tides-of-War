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

  render (){
    return(
      <div className="topnav" align="center" id="headshadow" style={{borderBottomColor: '#47315a',
        borderBottomHeight: 1 }}>
        <div className="topnavWidth">
          <div className="topnavWrap">
            <ul>
              <li>
                <div className="hovercolorGroup">
                  <NavLink exact to="/"><HomeIcon/> Home</NavLink>
                </div>
              </li>
              <li>
                <div className="hovercolorGroup">
                  
                  <NavLink to="/rounds"><RoundsIcon/> Rounds</NavLink>
                </div>
              </li>
              <li>
                <div className="hovercolorGroup">
                  
                  <NavLink to="/stats"><StatsIcon/> Stats</NavLink>
                </div>
              </li>
              <li>
                  <div className="hovercolorGroup">
                    <NavLink to="/news"><NewsIcon/> News</NavLink>
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
    );
  };
};

function mapStateToProps({ user }){
    return { user };
};

export default connect(mapStateToProps)(Header);
