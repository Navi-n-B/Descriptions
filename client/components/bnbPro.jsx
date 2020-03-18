import React from 'react';
import * as Ionicon from 'react-icons/io'

const Pro = ({icon, title, desc}) => {
  const theIcon = Ionicon[icon];
  return (
    <li className={'pro '+ icon}>
      {typeof theIcon !== 'undefined' && React.createElement(theIcon)}
      <section className="pro-body">
        <span className="row">{title}</span>
        <p className="row">{desc}</p>
      </section>
    </li>)
}

       export default Pro;