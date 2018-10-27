import React from 'react';

const Controls = (props) => {
    return (
        <div className='controls'>
            <h2>power: {props.power.toString()} volume: {props.volume}</h2>
        </div>
    );
  };

  export default Controls;