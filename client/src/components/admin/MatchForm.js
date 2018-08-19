import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import matchFormFields from './matchFormFields';
import * as actions from '../../actions';

class MatchForm extends Component {
    componentWillMount() {
        this.props.fetchAllPlayers();
    }
    
    renderFields() {
        const { playerList } = this.props;
        
        return _.map(matchFormFields, ({label, name, component, type, data}) =>{
            if(name == "playerOne" || name == "playerTwo" && playerList) {
                data = playerList.map( ({displayName}) => {
                    return displayName;
                }).sort();
            }
            return ([
                <div key={name+'d'}>
                    <label key={name+'l'}>{label}</label>
                    <Field type={type} key={name} component={component} label={label} name={name} data={data}/>
                </div>
            ]);
        });

    }

    render() {
        const { handleSubmit, submitting } = this.props;
        
        return (
            <div>
                Submit Match Data
                <form >
                    {this.renderFields()}
                    <Link to="/">Nope</Link>
                    <button type="submit" disabled={submitting}>Don't</button>
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

export default reduxForm({validate, form: 'matchForm'})(connect(mapStateToProps, mapDispatchToProps)(MatchForm));
