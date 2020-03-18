import React, {Component} from "react";
import descriptionData from '../dev/dummyData.jsx';
import Pro from './bnbPro.jsx';
import Amenity from './Amenity.jsx';
// import Footer from './components/Footer.jsx';

class Description extends Component{
  constructor() {
    super();
    this.state = {
      ...descriptionData,
    };
}

setDescription(newDescription){
  if(newDescription && newDescription.keys().length !== 0){
    // let newState = this.state;
    this.setState( {...newDescription});
  }
}

//onMount, set result
componentDidMount() {
  axios.get('/api/descriptions').then((result) => {
    this.setDescription(result.data.description);
    // anythign to do after here?
  });
}

setRender() {
//todo: move some functionality from render into here, or put in constructor, or 3rd op
}

    render(){
      const s = this.state;
      let pros = [];let placeParts=[]; let amenities = [];let body=[];let beds=[]; let
      descriptionBody = [];

      //for room breakdown under title
      s.placeSize.map((piece, index) => {
         if(placeParts.length > 0 ) placeParts.push(' · ');
         placeParts.push(<span class='piece'>{piece}</span>)
       })

       //recreating pros that show up at the top above the description body
      for(let i=0; i<s.pros.titles.length; i++){
        pros.push(<Pro title={s.pros.titles[i]} icon={s.pros.icons[i]} desc={s.pros.descs[i]}/>)
      }

      //each description body seems to be broken into headers and paragraphs. They should be the same fsize tho.
      for(let i=0; i<s.body.titles.length;i++){
        descriptionBody.push(<h2>{s.body.titles[i]}</h2>)
        descriptionBody.push(<p>{s.body.descs[i]}</p>)
      };

      //Sleeping Arrangements section
      //Todo: figure out dynamic icon generation. Probably uncontrolled
      for(let i=0; i<s.beds.length;i++){
        // const theIcon = Ionicons[s.beds[i].icon];
        const bedRef = s.beds[i].type.replace(' ',/-/g);
        beds.push(<div className={bedRef + ' arrangement'}>
        {/* <theIcon/> */}
        <div className='row'><span class="title">{s.beds[i].title}</span></div>
      <p class='desc'>{s.beds[i]['count'] + ' ' + s.beds[i].type}</p>
       </div>)
      }

      //lastly, amenity section separated by has and has-nots
      for(let i=0; i<s.amenities.titles.length;i++){
        amenities.push(<Amenity title={s.pros.titles[i]} icon={s.pros.icons[i]}/>)
      }
      //pass missing, but maybe we could be passing more here with an options object.
      for(let i=0; i<s.amenities.missing.length;i++){
        amenities.push(<Amenity title={s.amenities.titles[i]} icon={s.amenities.icons[s.amenities.titles.length+i]} missing={true}/>)
      }
      //above is all linear time complexity right?

      return (
      <div>
        <header>
          <h1>{s.placeTitle + ' '}</h1>
          <span className="airbnb-space">{placeParts}</span>
          <div className="circle-icon person"></div>
        </header>
        <ul>
          {pros}
        </ul>
        <section class="body">
          {descriptionBody}
        </section>
        <section class="beds">
          {beds}
        </section>
        <section class="amenities">
          {amenities}
        </section>
      </div>
    )
  };
}

export default Description;