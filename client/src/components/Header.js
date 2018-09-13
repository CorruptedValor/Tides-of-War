import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import './styles/style.css';
import HomeIcon from './logo/HomeIcon';
import RoundsIcon from './logo/RoundsIcon';
import StatsIcon from './logo/StatsIcon';
import NewsIcon from './logo/NewsIcon';



class Header extends Component {

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
                  {/* <NavLink exact to="/"><HomeIcon/> Home</NavLink> */}
                  <Route exact path="/" children={({ match }) => (
                    <div>
                      <Link className={match ? 'active' : ''} to="/" onlyActiveOnIndex>
                        <HomeIcon className={match ? 'topnavSvgActive' : 'topnavSvg'} onlyActiveOnIndex/>
                        Home
                      </Link>
                    </div>
                  )}/>
                </div>
              </li>
              <li>
                <div className="hovercolorGroup">
                  <Route path="/rounds" children={({ match }) => (
                    <div>
                      <Link className={match ? 'active' : ''} to="rounds" onlyActiveOnIndex>
                        <RoundsIcon className={match ? 'topnavSvgActive' : 'topnavSvg'} onlyActiveOnIndex/>
                        Rounds
                      </Link>
                    </div>
                  )}/>
                </div>
              </li>
              <li>
                <div className="hovercolorGroup">
                  <Route path="/stats" children={({ match }) => (
                    <div>                      
                      <Link className={match ? 'active' : ''} to="stats" >
                      <StatsIcon className={match ? 'topnavSvgActive' : 'topnavSvg'}/>
                        Stats
                      </Link>
                    </div>
                  )}/>
                </div>
              </li>
              <li>
                <div className="hovercolorGroup">
                  <Route path="/news" children={({ match }) => (
                    <div>
                      <Link className={match ? 'active' : ''} to="news" >
                        <NewsIcon className={match ? 'topnavSvgActive' : 'topnavSvg'}/>
                        News
                      </Link>
                    </div>
                  )}/>
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

export default withRouter(connect(mapStateToProps)(Header));
