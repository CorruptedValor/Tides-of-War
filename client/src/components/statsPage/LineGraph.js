import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import * as actions from '../../actions';

import '../styles/style.css'
import '../styles/main.css'


class LineGraph extends Component {

	componentWillMount() {
		this.props.fetchAllPlayers();
	}

	generateRounds() {
		const { playerList } = this.props
		if (playerList.data) {
			return playerList.data.map(({matches}) => {
				 const playedRounds = matches.filter(({personalScore}) => personalScore !== null)
				 return _.chain(playedRounds)
				 					.pluck('round')
									.uniq()
									.value()
			} )
		}
	}

	renderLines(){
		const {playerList} = this.props

		if (playerList.data){
		
			return _.map(playerList.data, ({ matches }) =>{
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
					return { score, round };
				}).filter(({score}) => score !== null )
				return (<Line type="monotone" dataKey="score" stroke="#ff7300" yAxisId={0} data={matchData} />)
			}) 		
		}
	};

	// comment

	render(){
		console.log(this.generateRounds());
		
			return (
				<LineChart
					width={600}
					height={400}
					data = {this.generateRounds}
				>

					<XAxis dataKey="round" />
					<YAxis dataKey="score" />
					<Tooltip />
					<CartesianGrid stroke="#f5f5f5" />
					{this.renderLines()}

				</LineChart>
    );
	};
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
