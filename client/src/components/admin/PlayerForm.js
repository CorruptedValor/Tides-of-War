import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import PlayerField from './PlayerField';
import playerFormFields from './playerFormFields';
import *  as actions from '../../actions';

class PlayerForm extends Component {

    validatePlayer = (values) => {
        const { submitPlayer } = this.props;
    
        submitPlayer(values)
            .then((response) => {  
                if(response.playerKey == values.playerKey){
                        throw new SubmissionError({ playerKey: 'Key already in use' });
                    }

            });
    };

    renderFields() {
        return _.map(playerFormFields, ({label, name}) =>{
            return (<Field type="text" key={name} component={PlayerField} label={label} name={name}/>);
        });
    };

   render() {
        const { handleSubmit, submitting } = this.props;

        return (
            <div>
                Add new player
                <form onSubmit={handleSubmit(this.validatePlayer)}>
                    {this.renderFields()}
                    <Link to="/">Cancel</Link>
                    <button type="submit" disabled={submitting}>Submit</button>
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

            submitPlayer: (values) => dispatch(actions.playerSubmit(values)),
            actions
            
    }
}

export default reduxForm({validate, form: 'playerForm'})(connect(mapStateToProps, mapDispatchToProps)(PlayerForm));