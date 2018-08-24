import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import * as actions from '../../actions';

import '../styles/style.css'
import '../styles/main.css'



class LineGraph extends Component {

	componentWillMount() {
		this.props.fetchAllPlayers();
	}

	renderLines(){
		const {playerList} = this.props

		if (playerList.data){
		
			return _.map(playerList.data, ({ matches, displayName }) =>{
					
				const matchData = matches.map(({personalScore, round}) => {
						let score
						round = 'Round ' + round;
						if (personalScore > 42) {
							score = personalScore - 350;
						} else if (personalScore < 0) {
							score = personalScore + 150;
						} else {
							score = personalScore;
						}
						return { score, round, displayName };

					}).filter(({score}) => score !== null )

					const color = '#'+Math.floor(Math.random()*16777215).toString(16);
					
				return <Line key={displayName} type="monotone" dataKey="score" data = {matchData} stroke={color} name={displayName} />
			}) 		

		}
	};

	render(){
		return (
			<LineChart
				width={600}
				height={400}
			>

				<XAxis dataKey="round" type="category" allowDuplicatedCategory={false} />
				<YAxis dataKey="score" />
				<Tooltip payload = {[{ 'round':'round', 'displayName': 'score'}]} />
				<CartesianGrid stroke="#f5f5f5" />
				{this.renderLines()}
				<Legend />

			</LineChart>
			);
		}		


}


const mapStateToProps = (state) => {
	return { 
			playerList: state.playerList
	 };
}

const mapDispatchToProps = (dispatch) => {
	return { 

			fetchAllPlayers: () => dispatch(actions.fetchAllPlayers()),
					
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LineGraph);
