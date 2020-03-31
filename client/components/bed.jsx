import React from 'react';
import { FaBed } from 'react-icons/fa/index.esm.js';

const capitalizeWord = (word) => {
  if(word.length > 1){
    return word[0].toUpperCase() + word.substr(1);
  }
}

const Bed = (bed) => {
  const index = bed.index; bed = bed.bed;
  return (<div className={bed + ' arrangement'}>
        <div className='row'><span className="title">{(index+1) + '. ' + capitalizeWord(bed)}</span></div>
        <p className='desc'>{capitalizeWord(bed)} <FaBed /></p>
      </div>)
}


export default Bed;