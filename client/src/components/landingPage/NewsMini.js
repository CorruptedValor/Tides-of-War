import React from 'react';

import '../styles/style.css'
import '../styles/main.css'
import ArrowIcon from '../Logo/ArrowIcon';

const NewsMini = () => {
    return(

			<div class="boxAnnContainer">
			<div class = "boxHeaderAnn" id="grad">
				<h4 class = "boxTitleAnn">Latest News</h4>
			</div>
				<div class = "boxAnn">
					<h5><b>Chapter Approved Preview</b></h5>
					<h6>Sunday, July 15, 2019</h6>
						<p class="AnnPar">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet neque quis urna molestie euismod.</p>
						<g class="readmoreGroup"><a href="#" id="readmoreLink">Read more <ArrowIcon/>
						</a></g>
						<p><div class="divider" width="90%"></div></p>

						<h5><b>Aeldari are Dominating</b></h5>
						<h6>Sunday, July 9, 2019</h6>
							<p class="AnnPar">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet neque quis urna molestie euismod.</p>
							<g class="readmoreGroup"><a href="#" id="readmoreLink">Read more <ArrowIcon/>
							</a></g>
							<p><div class="divider" width="90%"></div></p>

							<h5><b>Grey Knights Receive Nerfs</b></h5>
							<h6>Sunday, July 5, 2019</h6>
								<p class="AnnPar">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet neque quis urna molestie euismod.</p>
								<g class="readmoreGroup"><a href="#" id="readmoreLink">Read more <ArrowIcon/>
								</a></g><p></p>

				</div>
			</div>

    );

};



export default NewsMini;
