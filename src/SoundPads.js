import React from 'react';

const SoundPads = (props) => {
    const bank = props.soundBank.map((e,i) => {
        const audio = new Audio(e.urlSound);
        return (
        <div className='drum-pad' id={e.key}>
          <button type='button' onClick={()=>{audio.play()}}>{e.key}</button>
        </div>
        );
    });
    return bank;
  };

  export default SoundPads;