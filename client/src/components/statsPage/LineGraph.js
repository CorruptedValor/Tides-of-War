import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/style.css'
import '../styles/main.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

class LineGraph extends Component {
	data=[
		{name: 'Player 1', score: 100},
		{name: 'Player 2', score: 267},
		{name: 'Player 3', score: 79}
	]

	// comment

	render(){
			return (


          <div>
            <div className = "boxHeader" id="grad">
                <h3 className = "boxTitle">Stats</h3>
            </div>
            <div className="box" id="roundbox">

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet neque quis urna molestie euismod. Aliquam tristique egestas lacus, sed tincidunt velit pretium id.</p>
                <p />

								<LineChart
								  width={400}
								  height={400}
									data={this.data}
								>
								  <XAxis dataKey="name" />
									<YAxis dataKey="score" />
								  <Tooltip />
								  <CartesianGrid stroke="#f5f5f5" />
								  <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
								  <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
								</LineChart>

            </div>
          </div>


    );
	};
}


function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(LineGraph);
