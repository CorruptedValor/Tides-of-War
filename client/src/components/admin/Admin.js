//shows admin input forms
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayerForm from './PlayerForm';
import { fetchUser } from '../../actions';



class Admin extends Component {
    componentWillMount() {
        this.props.fetchUser();
    }
    
    renderContent() {
        
        
        if (this.props.auth && this.props.auth.isAdmin){
            return <PlayerForm />;
        } else {
            return <h1>Administrator Access Required</h1>;
        }
    }

    render(){
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, { fetchUser })(Admin);