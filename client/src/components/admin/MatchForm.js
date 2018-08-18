import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import matchFormFields from './matchFormFields';
import { fetchAllPlayers } from '../../actions';

class MatchForm extends Component {
    componentWillMount() {
        this.props.fetchAllPlayers();
    }
    
    renderFields() {
        console.log(this.props.players);
        var players = this.props.players;
        
        return _.map(matchFormFields, ({label, name, component, type, data}) =>{
            if(name == "playerOne" || name == "playerTwo" && this.props.players) {
                data = players.map( ({displayName}) => {
                    return displayName;
                });
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
        return (
            <div>
                Submit Match Data
                <form >
                    {this.renderFields()}
                    <Link to="/">Nope</Link>
                    <button type="submit" disabled={this.props.submitting}>Don't</button>
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
        players: state.players
     };
}

const mapDispatchToProps = (dispatch) => {
    return { 
            fetchAllPlayers: () => dispatch(fetchAllPlayers()) 
    }
}

export default reduxForm({validate, form: 'matchForm'})(connect(mapStateToProps, mapDispatchToProps)(MatchForm));
