import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/style.css';
import LoaderIcon from '../logo/LoaderIcon';
import MarketingBlurb from './MarketingBlurb';
import NewsMini from './NewsMini';
import Rankings from './Rankings';
import * as actions from '../../actions/index';

class Landing extends Component {

	componentWillMount() {
        this.props.fetchAllPlayers();
	}
	
	renderContent(){
		if(this.props.playerList.fetching){
			return <LoaderIcon />
		} else {
			return (
				<div className="boxContainerMain">
					<div className="boxcontainerLeft">
						<MarketingBlurb/>
						<Rankings/>
					</div>
						<NewsMini/>
				</div>
			)
		}
	}
	
	render(){		
		return(
			<div>
				{this.renderContent()}
			</div>
		);
	}
};

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



export default connect(mapStateToProps, mapDispatchToProps)(Landing);
