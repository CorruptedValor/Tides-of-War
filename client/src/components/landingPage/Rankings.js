import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';
import '../../frontends/Styles/style.css';

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

    render (){
        return(
					<div className="box" id="roundbox">
						<p><table className="tableRanking" align="center">
							<col width="10%">
							<col width="10%">
							<col width="10%">
							<col width="10%">
							<thead>
									<tr id="colhead" height="40px">
										<th>Ranking</th>
										<th scope="col">Player</th>
										<th scope="col">Score</th>
										<th scope="col">W/L/D</th>
									</tr>
							</thead>
									<tr style = {{ trStyle }}>
										<td>1</td>
										<td>Player 1</td>
										<td>10,000</td>
										<td>10/0/0</td>
									</tr>
									<tr style = {{ trStyle }}>
										<td>2</td>
										<td>Player 2</td>
										<td>9,000</td>
										<td>9/1/0</td>
									</tr>
									<tr style = {{ trStyle }}>
										<td>3</td>
										<td>Player 3</td>
										<td>8,000</td>
										<td>9/0/1</td>
									</tr>
									<tr style = {{ trStyle }}>
										<td>4</td>
										<td>Player 4</td>
										<td>7,000</td>
										<td>7/2/1</td>
									</tr>
									<tr style = {{ trStyle }}>
										<td>5</td>
										<td>Player 5</td>
										<td>6,000</td>
										<td>6/3/1</td>
									</tr>
									<tr style = {{ trStyle }}>
										<td>6</td>
										<td>Player 6</td>
										<td>5,000</td>
										<td>4/6/0</td>
									</tr>
									<tr style = {{ trStyle }}>
										<td>7</td>
										<td>Player 7</td>
										<td>4,000</td>
										<td>5/5/0</td>
									</tr>
									<tr style = {{ trStyle }}>
										<td>8</td>
										<td>Player 8</td>
										<td>3,000</td>
										<td>3/6/1</td>
									</tr>
									<tr style = {{ trStyle }}>
										<td>9</td>
										<td>Player 9</td>
										<td>2,000</td>
										<td>1/9/0</td>
									</tr>
									<tr style = {{ trStyle }}>
										<td>10</td>
										<td>Player 10</td>
										<td>1,000</td>
										<td>0/10/0</td>
									</tr>
						</col></col></col></col></table></p>
					</div>
        );
    };
};

function mapStateToProps({ auth }){
    return { auth };
};

export default connect(mapStateToProps)(Rankings);
