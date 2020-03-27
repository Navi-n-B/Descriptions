import React from 'react';
import { getIonicon, convertToClass } from './_helper.jsx';

const Amenity = ({icon, title, missing}) => {
  const theIcon = getIonicon(icon);
  const deleted = (title) => { return (
    <del>{title}</del>
  )}
  return (<div className={'amenity amenity-'+convertToClass(title)+(missing ? ' missing': '')}>
            {typeof theIcon !== 'undefined' && React.createElement(theIcon,{size: '18px'})}
            <span className={missing ? 'row strike-through': 'row'}>{missing ? deleted(title) : title}</span>
          </div>)}

export default Amenity;