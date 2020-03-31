import React from "react";
import ReactDOM from "react-dom";
import Description from './components/DescriptionContainer.jsx';
// import './style.scss';

const Aside = () => {return(<aside><img src="https://i.imgur.com/ULSp7Y5.png"/></aside>)}
ReactDOM.render(<Aside/>, document.getElementById("aside"));
ReactDOM.render(<Description/>, document.getElementById("description"));