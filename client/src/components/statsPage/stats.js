import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import '../styles/main.css';
import '../styles/style.css';
import LineGraph from './LineGraph';
import GraphForm from './GraphForm';
import Loader from '../loader/Loader';

class Stats extends Component {
	
	componentWillMount() {

		this.props.fetchAllPlayers();
		
    }

	renderContent() {
		
		if(this.props.playerList.fetching){
				
			return <Loader />

		} else {
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
		}

	}

	render()
	{
		return(

			<div>
				{this.renderContent()}
			</div>

		);
	}
};


function mapStateToProps(state) {
    return {

		playerList: state.playerList
		
    };
}

const mapDispatchToProps = (dispatch) => {
    return {

        fetchAllPlayers: () => dispatch(actions.fetchAllPlayers())

    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Stats);
