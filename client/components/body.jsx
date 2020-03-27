import React, { useState } from 'react';

const DescriptionBody = ({description}) => {
  const [showAll,setShow] = useState(false);
  if(showAll){
    return (<div>{description[1]}</div>);
  } else {
    return (<div>{description}</div>);
  }
}

export default DescriptionBody;