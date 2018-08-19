import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import PlayerField from './PlayerField';
import playerFormFields from './playerFormFields';
import *  as actions from '../../actions';

class PlayerForm extends Component {

    

    renderFields() {
        return _.map(playerFormFields, ({label, name}) =>{
            return (<Field type="text" key={name} component={PlayerField} label={label} name={name}/>);
        });
    };

   render() {
        const { handleSubmit, submitPlayer, submitting } = this.props;

        return (
            <div>
                Add new player
                <form onSubmit={handleSubmit(submitPlayer)}>
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

const validatePlayer = (values) => {

    return new Promise((resolve, reject) => {
        // let test = playerSubmit(values);
        // console.log(test);
        
        
        actions.playerSubmit(values).then((response) => {
             
            if(response.playerKey == values.playerKey){

                reject(new SubmissionError({ playerKey: 'Key already in use' }));
            }
            resolve();
        });
       
    });
};

const mapStateToProps = (state) => {
    return { 

        formValues: state.form.playerForm.values,
        players: state.players

     };
}

const mapDispatchToProps = () => {
    return { 

            submitPlayer: validatePlayer,
            actions
            
    }
}

export default reduxForm({validate, form: 'playerForm'})(connect(mapStateToProps, mapDispatchToProps)(PlayerForm));