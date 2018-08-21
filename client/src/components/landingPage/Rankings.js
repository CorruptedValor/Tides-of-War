import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table';

import '../styles/style.css';
import '../styles/main.css';
import 'react-table/react-table.css';

import * as actions from '../../actions';
import generateMatchData from '../../util/generateMatchData'

var trStyle = {
	alignment: 'center'
}

class Rankings extends Component {
	
	componentWillMount() {
        this.props.fetchAllPlayers();
	}
	



	

    render() {
    
		const columns = [{
			Header: 'Player Name',
			accessor: 'displayName' // String-based value accessors!
		}, {
			Header: 'Score',
			accessor: 'score'
		}, {
			Header: 'W/L/D', // Custom header components!
			accessor: 'wld'
		}]

		return(

			<div>
				<div className = "boxHeader" id="grad">
						<h3 className = "boxTitle">Top 10</h3>
				</div>

				<div className="box" id="roundbox">
				<style>{`table{borderRadius:2.5px;}`}</style>

					<div>
						<ReactTable data={generateMatchData(this.props.playerList)}
						showPagination={false}
						defaultPageSize={10}
						sortable={false}
						resizable={false}

						className="-striped -highlight"

						columns={columns}/>
					</div>

				</div>
			</div>

		)
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

export default connect(mapStateToProps, mapDispatchToProps)(Rankings);
