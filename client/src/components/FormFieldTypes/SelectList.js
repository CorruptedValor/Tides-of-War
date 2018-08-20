import React from 'react';
import SelectList from 'react-widgets/lib/SelectList';
 
export default ({ input, data, label, meta: {error, touched} }) => {
    return (
    <div>
        <label>{label}</label>
        <SelectList {...input}
            onBlur={() => input.onBlur()}
             data={data} />

        <div style={{ marginBottom: '20px' }}>{touched && error}</div>
    </div>
    )
}