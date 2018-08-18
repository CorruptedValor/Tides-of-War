import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import PlayerField from './PlayerField';
import playerFormFields from './playerFormFields';
import { playerSubmit } from '../../actions';

class PlayerForm extends Component {

    renderFields() {
        return _.map(playerFormFields, ({label, name}) =>{
            return (<Field type="text" key={name} component={PlayerField} label={label} name={name}/>);
        });
    }

    render() {
        return (
            <div>
                Add new player
                <form onSubmit={
                    this.props.handleSubmit(async () => {
                        await this.props.submitPlayer;
                        const result = this.props.players.find(players => players.playerKey == this.props.formValues.playerKey);
                        if (result) {
                            throw new SubmissionError({ playerKey: 'Key already in use', _error: 'Key exists!' })
                        }
                        })}>
                    {this.renderFields()}
                    <Link to="/">Cancel</Link>
                    <button type="submit" disabled={this.props.submitting}>Submit</button>
                </form>
            </div>
        )
    }
    
}

function validate(values) {

    const errors = {};

    _.each(playerFormFields, ({ name }) => {
        if (!values[name]){
            errors[name] = 'Required';
        }
    })

    return errors;
}

const mapStateToProps = (state) => {
    return { 
        formValues: state.form.playerForm.values,
        players: state.players
     };
}

const mapDispatchToProps = (dispatch) => {
    return { 
            submitPlayer: (values)=> dispatch(playerSubmit(values))
    }
}

export default reduxForm({validate, form: 'playerForm'})(connect(mapStateToProps, mapDispatchToProps)(PlayerForm));
