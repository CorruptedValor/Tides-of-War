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
		const {playerList, formValues} = this.props

		if (playerList.data ){
			if (formValues.values ){
	
				return _.chain(playerList.data)
					.filter(({playerKey}) => {
							let key = playerKey;
							let result = false;
						formValues.values.player.map(({playerKey} )=>{
							if (playerKey === key) {
								result = true;
							}
						})
						return result;						
					})
					.map(({ matches, displayName }) =>{
						
					const matchData = matches.map(({personalScore, round}) => {
							let score
							round = "Round " + round; 
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
				}).value();

			} else {
				return _.map(playerList.data, ({ matches, displayName }) =>{
						
					const matchData = matches.map(({personalScore, round}) => {
							let score
							round = "Round " + round; 
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
		}
	};

	render(){
		return (
			<LineChart
				width={600}
				height={400}
			>

				<XAxis dataKey="round" type="category" allowDuplicatedCategory={false} interval={0}/>
				<YAxis dataKey="score" />
				<Tooltip payload = {[{ 'round': 'round', 'displayName': 'score'}]} />
				{this.renderLines()}
				<Legend />

			</LineChart>
			);
		}		


}


const mapStateToProps = (state) => {

	return {
		formValues: state.form.graphForm,
		playerList: state.playerList

	};
    
}

const mapDispatchToProps = (dispatch) => {
	return { 

			fetchAllPlayers: () => dispatch(actions.fetchAllPlayers()),
					
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LineGraph);
