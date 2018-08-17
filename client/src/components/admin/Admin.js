//shows admin input forms
import React, { Component } from 'react';
import PlayerForm from './PlayerForm';



export default class Admin extends Component {
    
    renderContent() {
        return <PlayerForm onSurveySubmit={() => this.setState({ showFormReview: true })}/>;
    }

    render(){
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}
