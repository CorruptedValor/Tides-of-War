import React from 'react';
import DropdownList from 'react-widgets/lib/DropdownList';
 
export default ({ input, data, label, valueField, textField, meta: {error, touched} }) => {
    return (
    <div>
        <label>{label}</label>
        <DropdownList {...input}
            data={data}
            valueField={valueField}
            textField={textField}
            onChange={input.onChange} />

        <div style={{ marginBottom: '20px' }}>{touched && error}</div>
    </div>
    )
}