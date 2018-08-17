import React from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import ReactSVG from 'react-svg';
import '../frontends/Styles/style.css'

const Footer = () => {
    return ( 
        <div className="footer">

            <div className="footerLinks" align="center">

                <div className="footerLinksLeft" align="left">
                    <ul>
                        <li><h4 className="footerTitle">Sitemap</h4></li>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#rounds">Rounds</a></li>
                        <li><a href="#stats">Stats</a></li>
                        <li><a href="#news">News</a></li>
                        <li><a href="#submit">Submit List</a></li>
                        <div className="topnavRight"/>
                    </ul>
                </div>

                <div className="footerLinksRight" align="left">
                    <ul>
                        <li><h4 className="footerTitle">Useful Links</h4></li>
                        <li><a href="https://docs.google.com/document/d/1ltQMdeDqYRXOhvdYT3dtUSji3AISvZRM8gDlhOXDaF8/edit">ITC Tournament Rules</a></li>
                        <li><a href="https://www.battlescribe.net/?tab=news">Battlescribe</a></li>
                        <li><a href="/admin">Admin Page</a></li>
                    </ul>
                </div>
            </div>

                <div className="footerCopywright" align="center">
                © Copyright 2018 Battlerounds
                </div>

        </div> 
    );
};


export default Footer;