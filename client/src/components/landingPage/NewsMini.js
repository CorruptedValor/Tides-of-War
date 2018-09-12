import React from 'react';

import '../styles/style.css'
import '../styles/main.css'
import ArrowIcon from '../logo/ArrowIcon';

const NewsMini = () => {
    return(

			<div class="boxAnnContainer" id="pls">
  			<div class = "boxHeaderAnn" id="grad">
  				<h4 class = "boxTitleAnn">Latest News</h4>
  			</div>
  				<div class = "boxAnn">
  					<h5><b>Chapter Approved Preview</b></h5>
  					<h6>July 15, 2019</h6>
  						<p class="AnnPar">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet neque quis urna molestie euismod.</p>
  						<g class="readmoreGroup"><a href="/news#first" id="readmoreLink">Read more <ArrowIcon/>
  						</a></g>
  						<div class="divider" width="90%"></div>

  					<h5><b>Aeldari are Dominating</b></h5>
  					<h6>July 9, 2019</h6>
  						<p class="AnnPar">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet neque quis urna molestie euismod.</p>
  						<g class="readmoreGroup">
                <a href="/news#second" id="readmoreLink">Read more <ArrowIcon/></a>
              </g>
  						<div class="divider" width="90%"></div>

  					<h5><b>Grey Knights Receive Nerfs</b></h5>
  					<h6>July 5, 2019</h6>
  						<p class="AnnPar">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet neque quis urna molestie euismod.</p>
  						<g class="readmoreGroup">
                <a href="/news#third" id="readmoreLink">Read more <ArrowIcon/></a>
              </g>
  			  </div>
			</div>

    );

};



export default NewsMini;
