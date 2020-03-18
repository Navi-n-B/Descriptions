import React from 'react';

const Amenity = ({icon, title, missing}) => {
  return (<div className={'amenity '+ icon}>
          {JSON.stringify(icon)}
          <span className={missing ? ('row') : 'row strike-through'}>{title}</span>
       </div>)}

export default Amenity;