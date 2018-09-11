import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';


import statFormFields from './statFormFields';
import * as actions from '../../actions';

class GraphForm extends Component {

    componentWillMount() {
        this.props.fetchAllPlayers();
    }

    renderFields() {
        const  playerList = this.props.playerList.data;

        return _.map(statFormFields, ({label, name, component, type, data, textField, valueField, initialValues}) =>{
            
            //sort the player list alphabetically
            if((name === "player") && playerList) {

                data = playerList.map(({ displayName, playerKey }) => {
                    return {displayName, playerKey};
                }).sort(function(a,b) {
                    if (a.displayName < b.displayName) return -1;
                    if (a.displayName > b.displayName) return 1;
                    return 0;
                });

                initialValues = data;
            
            }
            return ([
                    <Field type={type} key={name} component={component} label={label} name={name} data={data} textField={textField} valueField={valueField} initialValues={initialValues}/>
            ]);
        });
    }

    render() {
        return (
            <div>
                <form>
                    {this.renderFields()}
                </form>
            </div>
        )
    }
    
}


const mapStateToProps = (state) => {
    return {
                    
        //formValues: state.form.graphForm.values,
        playerList: state.playerList

    };
}

const mapDispatchToProps = (dispatch) => {
    return { 

        fetchAllPlayers: () => dispatch(actions.fetchAllPlayers())
            
    }
}

export default reduxForm({form: 'graphForm'})(connect(mapStateToProps, mapDispatchToProps)(GraphForm));
