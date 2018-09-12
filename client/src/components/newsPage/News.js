import React, { Component } from 'react';

import '../styles/main.css';
import '../styles/style.css';
import NewsCards from './NewsCards';
import Pagination from './Pagination';

class News extends Component {
  render(){

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
	}
};

function mapStateToProps(state) {
    return {
        user: state.user,
        playerList: state.playerList
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
		
        fetchUser: () => dispatch(actions.fetchUser()),
        fetchAllPlayers: () => dispatch(actions.fetchAllPlayers())

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(News);
