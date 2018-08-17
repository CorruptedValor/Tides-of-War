import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';


import PlayerField from './PlayerField';
import playerFormFields from './playerFormFields';
import * as actions from '../../actions';

class PlayerForm extends Component {
    
    renderFields() {
        return _.map(playerFormFields, ({label, name}) =>{
            return (<Field type="text" key={name} component={PlayerField} label={label} name={name}/>);
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.playerSubmit(this.props.formValues))}>
                    {this.renderFields()}
                    <Link to="/">Cancel</Link>
                    <button type="submit">Submit</button>
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
    return { formValues: state.form.playerForm.values };
}

PlayerForm = connect(mapStateToProps, actions)(PlayerForm);

export default reduxForm({validate, form: 'playerForm'})(PlayerForm);
