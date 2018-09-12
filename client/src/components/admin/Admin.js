//shows admin input forms
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayerForm from './PlayerForm';
import * as actions from '../../actions';
import AdminReqError from './AdminReqError';
import MatchForm from './MatchForm';
import Loader from '../loader/Loader';



class Admin extends Component {
    
    componentWillMount() {
        this.props.fetchUser();
        this.props.fetchAllPlayers();
    }

    renderContent() {
        const {user} = this.props;

        if( user === null) {
            return <Loader />; //loader

        } else if (!user.auth) {

            return <AdminReqError />;

        } else if(user.auth && user.auth.isAdmin){
            if (!this.props.playerList.data){
                //loader

                return <Loader />

            } else {
                return [
                    <div key ="10">
                        <PlayerForm key="1" />
                        <MatchForm key="2" />
                    </div>
                ];
            }

        } else
            return <Loader />;


    }

    render(){
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

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


export default connect(mapStateToProps, mapDispatchToProps)(Admin);
