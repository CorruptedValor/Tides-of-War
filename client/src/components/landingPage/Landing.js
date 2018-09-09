import React from 'react';

import '../styles/style.css';
import MarketingBlurb from './MarketingBlurb';
import NewsMini from './NewsMini';
import Rankings from './Rankings';

const Landing = () => {
    return(
		  <div class="boxContainerMain">
			<div class="boxcontainerLeft">
				<MarketingBlurb/>
				<Rankings/>
				</div>
				<NewsMini/>
			</div>
    );

};



export default Landing;
