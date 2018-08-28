import React from 'react';
import SelectList from 'react-widgets/lib/SelectList';
 
export default ({ input, data, label, containerClassName, meta: {error, touched} }) => {
    return (
    <div>
        <label>{label}</label>
        <SelectList {...input}
            onBlur={() => input.onBlur()}
             data={data}
             containerClassName = {containerClassName} />

        <div style={{ marginBottom: '20px' }}>{touched && error}</div>
    </div>
    )
}