import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import * as actions from '../../actions';

import '../styles/style.css'
import '../styles/main.css'



class BarGraph extends Component {

	componentWillMount() {
		this.props.fetchAllPlayers();
	}

	renderBars(){
		const {playerList, formValues} = this.props

		if (playerList.data ){
			if (formValues.values ){
	
				console.log(playerList.data);
				
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
						
					return <Bar key={displayName} dataKey="score" data = {matchData} fill={color} name={displayName} />
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
						
					return <Bar key={displayName} dataKey="score" data = {matchData} fill={color} name={displayName} />
				})
			}
		}
	};

	render(){
		return (
			<BarChart
				width={600}
				height={400}
			>

				<XAxis dataKey="round" type="category" allowDuplicatedCategory={false} interval={0}/>
				<YAxis dataKey="score" />
				<Tooltip payload = {[{ 'round': 'round', 'displayName': 'score'}]} />
				{this.renderBars()}
				<Legend />

			</BarChart>
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

export default connect(mapStateToProps, mapDispatchToProps)(BarGraph);
