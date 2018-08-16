import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import PlayerField from './PlayerField';
import playerFormFields from './playerFormFields';
import * as actions from '../../actions';

class PlayerForm extends Component {
    // constructor(state) {
    //     super(),
    //     this.values = state.form.surveyForm.values
    // }
    renderFields() {
        return _.map(playerFormFields, ({label, name}) =>{
            return (<Field key={name} component={PlayerField} type="text" label={label} name={name}/>);
        });
    }

    render() {
        return (
            <div>
                <form >
                {/* onSubmit={this.props.handleSubmit(this.props.playerSubmit(this.values))} */}
                    {this.renderFields()}
                    <Link to="/">Cancel</Link>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {};

    _.each(playerFormFields, ({ name }) => {
        if (!values[name]){
            errors[name] = 'You must provide a value';
        }
    })

    return errors;
}

// function mapStateToProps(state) {
//     return { playerFormValues: state.form.playerForm.values };
// }

export default reduxForm({validate, form: 'playerForm'})(PlayerForm); //connect(mapStateToProps, actions)(