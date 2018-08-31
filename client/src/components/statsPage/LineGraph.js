import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

import generateMatchData from '../../util/generateMatchData';
import * as actions from '../../actions';

import '../styles/style.css'
import '../styles/main.css'



class LineGraph extends Component {

	componentWillMount() {
		this.props.fetchAllPlayers();
	}

	renderLines(){
		const {playerList, formValues} = this.props
		
		//check if the state variables have values

		const gameData = generateMatchData(playerList);
		
		if (formValues.values){

			return gameData
				.filter(({playerKey}) => {
					const key = playerKey;
					let result = false;

					//filter out any players that aren't selected
					formValues.values.player.map(({playerKey}) => {
						if (playerKey === key) {
							result = true;
						}
					})

					return result;
				})
				.map(({matchData, displayName})=>{
				
					const color = '#'+Math.floor(Math.random()*16777215).toString(16);
					
					return <Line key={displayName} type="monotone" dataKey="gameScore" data = {matchData} stroke={color} name={displayName} />
				})
			
		} else {

			return gameData.map(({matchData, displayName})=>{
				
				const color = '#'+Math.floor(Math.random()*16777215).toString(16);
					
				return <Line key={displayName} type="monotone" dataKey="gameScore" data = {matchData} stroke={color} name={displayName} />
			})
		}
		
	};

	render(){
		return (
			<LineChart
				width={600}
				height={400}
			>

				<XAxis dataKey="round" type="category" allowDuplicatedCategory={false} interval={0}/>
				<YAxis dataKey="gameScore" />
				<Tooltip payload = {[{ 'round': 'round', 'displayName': 'score'}]} />
				{this.renderLines()}
				<Legend />

			</LineChart>
			);
		}		


}


const mapStateToProps = (state) => {

	return {
		
		formValues: state.form.graphForm.values,
		playerList: state.playerList

	};
    
}

const mapDispatchToProps = (dispatch) => {
	return { 

			fetchAllPlayers: () => dispatch(actions.fetchAllPlayers()),
					
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LineGraph);
