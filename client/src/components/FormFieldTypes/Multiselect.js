import React from 'react';
import Multiselect from 'react-widgets/lib/Multiselect';

export default  ({ input, data, label, valueField, textField }) =>
{
    return (
        <div>
            <label>{label}</label>
            <Multiselect {...input}
                onBlur = {() => input.onBlur()}
                value = {input.value || []}
                data = {data}
                valueField = {valueField}
                textField = {textField}
            />
        </div>
    )
}