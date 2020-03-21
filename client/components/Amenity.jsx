import React from 'react';
import { getIonicon, convertToClass } from './_helper.jsx';

const Amenity = ({icon, title, missing}) => {
  const theIcon = getIonicon(icon);
  return (<div className={'amenity amenity-'+convertToClass(title)}>
            {typeof theIcon !== 'undefined' && React.createElement(theIcon,{size: '18px'})}
            <span className={missing ? 'row strike-through': 'row'}>{title}</span>
          </div>)}

export default Amenity;