import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';

import '../styles/style.css';
import '../styles/main.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

var trStyle = {
	alignment: 'center'
}

class Rankings extends Component {
    renderContent(){
        // switch (this.props.auth) {
        //     case null:
        //         return;
        //     case false:
        //         return <li><a href="/auth/google">Login with Google</a></li>;
        //     default:
        //         return [
        //             <li key="1"><Payments/></li>,
        //             <li key="3" style={{ margin: '0 10px'}}>
        //                 Credits: {this.props.auth.credits}
        //             </li>,
        //             <li key="2"><a href="/api/logout">Logout</a></li>
        //         ];
        // }

    }


			render() {
			  const data = [{
			    playerName: 'Player 1',
			    score: 26,
					wld: '1/2/3'
			  }, {
					playerName: 'Player 2',
					score: 26,
					wld: '1/2/3'
				}, {
					playerName: 'Player 3',
					score: 26,
					wld: '1/2/3'
				}, {
					playerName: 'Player 4',
					score: 26,
					wld: '1/2/3'
				}, {
					playerName: 'Player 5',
					score: 26,
					wld: '1/2/3'
				}, {
					playerName: 'Player 6',
					score: 26,
					wld: '1/2/3'
				}, {
					playerName: 'Player 7',
					score: 26,
					wld: '1/2/3'
				}, {
					playerName: 'Player 8',
					score: 26,
					wld: '1/2/3'
				}, {
					playerName: 'Player 9',
					score: 26,
					wld: '1/2/3'
				}, {
					playerName: 'Player 10',
					score: 26,
					wld: '1/2/3'
				}]

			  const columns = [{
			    Header: 'Player Name',
			    accessor: 'playerName' // String-based value accessors!
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

						<style>{`
					    table{
					     borderRadius:2.5px;
					    }
					  `}</style>

							<p><ReactTable data={data}
							showPagination={false}
  						defaultPageSize={10}
							sortable={false}
							resizable={false}

							className="-striped -highlight"

							columns={columns}/></p>

						</div>
					</div>

				)
			}
    };

function mapStateToProps({ auth }){
    return { auth };
};

export default connect(mapStateToProps)(Rankings);
