import React from 'react';

const H2TagComponents = (props)=>{
    const h2Value = props.tagValue ;


    //console.log('props', props.tagValue);
    return (
        <h2>{h2Value}</h2>
    )
}

export  default H2TagComponents;