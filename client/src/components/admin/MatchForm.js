import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import matchFormFields from './matchFormFields';
import * as actions from '../../actions';

class MatchForm extends Component {

    convertAndValidate = (values) => {
        console.log(values);

    }

    componentWillMount() {
        this.props.fetchAllPlayers();
    }
    
    renderFields() {
        const { playerList } = this.props;

        return _.map(matchFormFields, ({label, name, component, type, data, textField, valueField}) =>{
           
            if((name === "playerOne" || name === "playerTwo") && playerList) {
                
                data = playerList.map( ({displayName, playerKey }) => {
                    return {displayName, playerKey};
                }).sort(function(a,b) {
                    if (a.displayName < b.displayName) return -1;
                    if (a.displayName > b.displayName) return 1;
                    return 0;
                });
            }
            return ([
                <div key={name+'d'}>
                    <Field type={type} key={name} component={component} label={label} name={name} data={data} textField={textField} valueField={valueField}/>
                </div>
            ]);
        });
    }

    render() {
        const { handleSubmit, submitting } = this.props;

        return (
            <div>
                Submit Match Data
                <form onSubmit={handleSubmit(this.convertAndValidate)} >
                    {this.renderFields()}
                    <Link to="/">Back</Link>
                    <button type="submit" disabled={submitting}>Submit</button>
                </form>
            </div>
        )
    }
    
}

function validate(values) {

    const errors = {};

        _.each(matchFormFields, ({ name }) => {
            if (!values[name]){
                errors[name] = 'Required';
            }
        })

    return errors;
}

const mapStateToProps = (state) => {
    return { 
        formValues: state.form.matchForm.values,
        playerList: state.playerList
     };
}

const mapDispatchToProps = (dispatch) => {
    return { 

        fetchAllPlayers: () => dispatch(actions.fetchAllPlayers())
            
    }
}

export default reduxForm({ validate, form: 'matchForm' })(connect(mapStateToProps, mapDispatchToProps)(MatchForm));
