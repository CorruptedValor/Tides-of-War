import React from 'react';

import '../styles/style.css'
import '../styles/main.css'
import ArrowIcon from '../logo/ArrowIcon';

const NewsMini = () => {
    return(

			<div className="boxAnnContainer" id="pls">
  			<div className= "boxHeaderAnn" id="grad">
  				<h4 className="boxTitleAnn">Latest News</h4>
  			</div>
  				<div className="boxAnn">
  					<h5><b>Chapter Approved Preview</b></h5>
  					<h6>July 15, 2019</h6>
  						<p className="AnnPar">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet neque quis urna molestie euismod.</p>
  						<div className="readmoreGroup"><a href="/news#first" id="readmoreLink">Read more <ArrowIcon/>
  						</a></div>
  						<div className="divider" width="90%"></div>

  					<h5><b>Aeldari are Dominating</b></h5>
  					<h6>July 9, 2019</h6>
  						<p className="AnnPar">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet neque quis urna molestie euismod.</p>
  						<div className="readmoreGroup">
                <a href="/news#second" id="readmoreLink">Read more <ArrowIcon/></a>
              </div>
  						<div className="divider" width="90%"></div>

  					<h5><b>Grey Knights Receive Nerfs</b></h5>
  					<h6>July 5, 2019</h6>
  						<p className="AnnPar">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet neque quis urna molestie euismod.</p>
  						<div className="readmoreGroup">
                	<a href="/news#third" id="readmoreLink">Read more <ArrowIcon/></a>
              </div>
  			  </div>
			</div>

    );

};



export default NewsMini;
