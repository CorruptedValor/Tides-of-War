import React from 'react';

import '../styles/main.css';
import '../styles/style.css';
import NewsCards from './NewsCards';
import Pagination from './Pagination';

const News = () => {
  return(
		<div className="boxContainer">
			<div>
				<div className = "boxHeader" id="grad">
					<h3 className = "boxTitle">News</h3>
				</div>
				<div className="box" id="roundbox">
				<NewsCards/>
				<Pagination/>
				</div>
			</div>
		</div>
    );

};


export default News;
