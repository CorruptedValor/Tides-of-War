import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import playerFormFields from './playerFormFields';
import *  as actions from '../../actions';
import TextField from '../formFieldTypes/TextField';

class PlayerForm extends Component {
    componentDidMount(){
        this.handleInitialize();
    }

    handleInitialize(){
        const initData = {
            "season": 2,
            "round": 10
        };

        this.props.initialize(initData);
    }

    validatePlayer = (values) => {
        const { submitPlayer, reset} = this.props;

        return submitPlayer(values)
            .then((response) => {

                if(response.value.data.playerKey == values.playerKey){
                    throw new SubmissionError({ playerKey: 'Key already in use' });
                } else {
                    reset();
                }

            });
    };

    renderFields() {
        return _.map(playerFormFields, ({label, name, component, type, data, textField, valueField}) =>{
            return (<Field type={type} key={name} component={component} label={label} name={name} data={data} textField={textField} valueField={valueField}/>);
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
        formValues: state.form.playerForm.values
     };
}

const mapDispatchToProps = (dispatch) => {
    return {

            submitPlayer: (values) => dispatch(actions.playerSubmit(values)),
            actions

    }
}

export default reduxForm({validate, form: 'playerForm'})(connect(mapStateToProps, mapDispatchToProps)(PlayerForm));
