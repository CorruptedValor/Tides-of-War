import React from 'react';

import '../styles/main.css';
import '../styles/style.css';
import LineGraph from './LineGraph';
import GraphForm from './GraphForm';

const Stats = () => {
  return(
		<div className="boxContainer">
			<div>
				<div className = "boxHeader" id="grad">
					<h3 className = "boxTitle">Stats</h3>
				</div>
				<div className="box" id="roundbox">
				<GraphForm/>
				<LineGraph/>
				</div>
			</div>
		</div>
    );

};


export default Stats;