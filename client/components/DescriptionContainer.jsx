import React, {Component} from "react";
import axios from "axios";
import descriptionData from '../dev/dummyData.jsx';
import Pro from './bnbPro.jsx';
import DescriptionBody from './body.jsx';
import Amenity from './Amenity.jsx';
// import Footer from './components/Footer.jsx';

class Description extends Component{
  constructor() {
    super();
    const state = (location.pathname.split('rooms/')[1] ? {} : {...descriptionData})
    this.state = state;
  }

  setDescription(newDescription){
    console.log(newDescription);
    if(newDescription && newDescription.entries().length !== 0){
      // let newState = this.state;
      this.setState( {...newDescription});
    }
  }

  //onMount, set result
  componentDidMount() {
    let listingEndpoint = location.pathname.split('rooms/')[1];
    if(listingEndpoint){
      listingEndpoint = '/api/listing/' + listingEndpoint;
      axios.get(listingEndpoint).then((result) => {
        const newDescription = result.data.listing;
        console.log(newDescription);
        if(newDescription && Object.keys(newDescription).length !== 0){
          // let newState = this.state;
          this.setState( {...newDescription});
        }
      });
    };
  }

  setRender() {
  //todo: move some functionality from render into here, or put in constructor, or 3rd op
  }

  render(){
    const s = this.state;
    let pros = [];let placeParts=[]; let amenities = [];let body=[];let beds=[]; let
    descriptionBody = []; let listingTitle = '';
    if(Object.keys(s).length > 2){
      listingTitle = s.title.charAt(0).toUpperCase() + s.title.slice(1);
      placeParts.push(<span className='piece'>{s.guest_size} guests · </span>);
      placeParts.push(<span className='piece'>{s.beds_list.count} beds · </span>);
      placeParts.push(<span className='piece'>{s.bath_count} baths </span>);

      //recreating pros that show up at the top above the description body
      for(let i=0; i<s.pros_list.length; i++){
        pros.push(<Pro title={s.pros_list[i].title} icon={s.pros_list[i].icon} desc={s.pros_list[i].description}/>)
      }

      //each description body seems to be broken into headers and paragraphs. They should be the same fsize tho.
      const dTitles = s.description_titles.split('|||'); const dBodies = s.description_bodies.split('|||');
      for(let i=0; i<s.description_titles.length;i++){
        descriptionBody.push(<h2>{dTitles[i]}</h2>)
        descriptionBody.push(<p>{dBodies[i]}</p>)
      };

      //Sleeping Arrangements section
      //Todo: figure out dynamic icon generation. Probably uncontrolled
      for(let i=0; i<s.beds_list.length;i++){
        // const theIcon = Ionicons[s.beds[i].icon];
        // const bedRef = s.beds[i]
        beds.push(<div className={s.beds_list[i] + ' arrangement'}>
        <div className='row'><span className="title">{(i+1) + '. '+s.beds_list[i]}</span></div>
        <p className='desc'>{s.beds_list[i]}</p>
      </div>)
      }

      //lastly, amenity section separated by has and has-nots
      for(let i=0; i<s.amenities_list.has.length;i++){
        amenities.push(<Amenity title={s.amenities_list.has[i].title} icon={s.amenities_list.has[i].icon}/>)
      }
      //pass missing, but maybe we could be passing more here with an options object.
      for(let i=0; i<s.amenities_list.missing.length;i++){
        amenities.push(<Amenity title={s.amenities_list.missing[i].title} icon={s.amenities_list.missing[i].icon} missing={true}/>)
      }
    }
    //above is all linear time complexity right?

    return (
      <div>
        <header>
          <h1>{listingTitle}</h1>
          <span className="airbnb-space">{placeParts}</span>
          <div className="circle-icon person"></div>
        </header>
        <ul>
          {pros}
        </ul>
        <section className="body">
         <DescriptionBody description={descriptionBody}/>
        </section>
        <section className="beds">
          {beds}
        </section>
        <section className="amenities">
          {amenities}
        </section>
      </div>
    )
  };
}

export default Description;