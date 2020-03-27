import React, { useState } from 'react';

const DescriptionBody = ({titles, bodies}) => {
  const [showBit,setShowBit] = useState(true);
  const showMore = (<a onClick={() => setShowBit(false)}>read more</a>)
  // console.log(titles,bodies);

  if(showBit){
  return (<p>{bodies[0].substring(0,bodies[0].length - 25) + '...'}{showMore}</p>);
  // return (<div>{description[1].substring(0,description[1].length-5) + "..."}{showMore}</div>);
  } else {
    let description = [];
    for(let i=0; i<titles.length;i++){
        description.push(<h2 key={'title-'+i}>{titles[i]}</h2>)
        description.push(<p>{bodies[i]}</p>)
    }
    return (<div>{description}</div>);
  }
}

export default DescriptionBody;