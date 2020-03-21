import React from 'react';
import * as Ionicon from 'react-icons/io'
import { getIonicon,convertToClass } from './_helper.jsx';
const Pro = ({icon, title, desc}) => {
  const theIcon = getIonicon(icon);
  return (
    <li className={'pro '+ convertToClass(icon)}>
      {typeof theIcon !== 'undefined' && React.createElement(theIcon,{size: '32px'})}
      <section className="pro-body">
        <span className="row">{title}</span>
        <p className="row">{desc}</p>
      </section>
    </li>)
}

       export default Pro;