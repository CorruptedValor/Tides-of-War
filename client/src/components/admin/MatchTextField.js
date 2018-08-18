import React from 'react';

export default ({ input, label, meta: {error, touched} }) => {
    return(
        <div>
            <input {...input} style={{ marginBottom: '5px' }} />
            <div style={{ marginBottom: '20px' }}>{touched && error}</div>
        </div>
    );
};