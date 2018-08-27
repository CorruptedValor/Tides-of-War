import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import statFormFields from './statFormFields';
import * as actions from '../../actions';

class MatchForm extends Component {

    componentWillMount() {
        this.props.fetchAllPlayers();
    }

    renderFields() {
        const  playerList = this.props.playerList.data;

        return _.map(statFormFields, ({label, name, component, type, data, textField, valueField}) =>{

            if((name === "player") && playerList) {

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
                    <Field type={type} key={name} component={component} label={label} name={name} data={data} textField={textField} valueField={valueField} defaultValue = {[]} />
                </div>
            ]);
        });
    }

    render() {
        return (
            <div>
                <form >
                    {this.renderFields()}
                </form>
            </div>
        )
    }
    
}


const mapStateToProps = (state) => {
    return {
        playerList: state.playerList
     };
}

const mapDispatchToProps = (dispatch) => {
    return { 

        fetchAllPlayers: () => dispatch(actions.fetchAllPlayers())
            
    }
}

export default reduxForm({ form: 'graphForm' })(connect(mapStateToProps, mapDispatchToProps)(MatchForm));
