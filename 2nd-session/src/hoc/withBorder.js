import React from 'react';

const withBorder = (ChildComponent, borderColor = 'black') => {
    return (props) => 
        <div style={{border: '1px solid ' + borderColor}}>
            <ChildComponent {...props}/>
        </div>
}

export default withBorder;