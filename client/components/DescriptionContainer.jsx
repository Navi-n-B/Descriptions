import React, {Component} from "react";
import axios from "axios";
import descriptionData from '../dev/dummyData.jsx';
import Pro from './bnbPro.jsx';
import DescriptionBody from './body.jsx';
import Amenity from './Amenity.jsx';
import Bed from './bed.jsx';
import { generateNumber } from '../../db/helper.js'
// import Footer from './components/Footer.jsx';

class Description extends Component{
  constructor() {
    super();
    const state = (location.pathname.split('rooms/')[1] ? {} : {...descriptionData})
    this.state = state;
  }

  setDescription(newDescription){
    // console.log(newDescription);
    if(newDescription && newDescription.entries().length !== 0){
      // let newState = this.state;
      this.setState( {...newDescription});
    }
  }

  //onMount, set result
  componentDidMount() {
    let listingEndpoint = location.pathname.split('rooms/')[1]
    if(!listingEndpoint){
      listingEndpoint = generateNumber(100);
    }
    if(listingEndpoint[listingEndpoint.length-1] === '/'){
      listingEndpoint = listingEndpoint.substring(0, listingEndpoint.length - 1);
    }
    if(Number(listingEndpoint)>99){
      listingEndpoint = generateNumber(100);
    }
    listingEndpoint = '/api/listing/' + listingEndpoint;
    axios.get(listingEndpoint).then((result) => {
      const newDescription = result.data.listing;
      // console.log(newDescription);
      if(newDescription && Object.keys(newDescription).length !== 0){
        // let newState = this.state;
        this.setState( {...newDescription});
      }
    });
  }

  setRender() {
  //todo: move some functionality from render into here, or put in constructor, or 3rd op
  }

  render(){
    const s = this.state;
    let pros = [];let placeParts=[]; let amenities = [];let body=[];let beds=[]; let
    descriptionBody = []; let listingTitle = 'Entire home hosted by Sara';
    if(Object.keys(s).length > 2){
      // listingTitle = s.title.charAt(0).toUpperCase() + s.title.slice(1);
      placeParts.push(<span className='piece'>{s.guest_size+1} guests · </span>);
      placeParts.push(<span className='piece'>{s.beds_list.length} beds · </span>);
      placeParts.push(<span className='piece'>{s.bath_count} baths </span>);

      //recreating pros that show up at the top above the description body
      for(let i=0; i<s.pros_list.length; i++){
        pros.push(<Pro title={s.pros_list[i].title} icon={s.pros_list[i].icon} desc={s.pros_list[i].description}/>)
      }

      //each description body seems to be broken into headers and paragraphs. They should be the same fsize tho.
      const dTitles = s.description_titles.split('|||'); const dBodies = s.description_bodies.split('|||');
      descriptionBody.push(<DescriptionBody titles={dTitles} bodies ={dBodies}/>);

      //Sleeping Arrangements section
      //Todo: figure out dynamic icon generation. Probably uncontrolled
      for(let i=0; i<s.beds_list.length;i++){
        // const theIcon = Ionicons[s.beds[i].icon];
        // const bedRef = s.beds[i]
        const bed = s.beds_list[i]
        beds.push(<Bed bed={bed} index={i}/>);
      }

      //lastly, amenity section separated by has and has-nots
      for(let i=0; i<s.amenities_list.has.length;i++){
        amenities.push(<Amenity key={'amenity-'+i} title={s.amenities_list.has[i].title} icon={s.amenities_list.has[i].icon}/>)
      }
      //pass missing, but maybe we could be passing more here with an options object.
      for(let i=0; i<s.amenities_list.missing.length;i++){
        amenities.push(<Amenity key={'missing-'+i} title={s.amenities_list.missing[i].title} icon={s.amenities_list.missing[i].icon} missing={true}/>)
      }
    }
    //above is all linear time complexity right?

    return (
      <React.Fragment>
      <div class="description">
        <header>
          <h1>{listingTitle}
          </h1>
          <span className="airbnb-space">{placeParts}</span>
          <div className="circle-icon person">
            <img src='https://a0.muscache.com/im/pictures/3f1b0029-72b9-4393-a41e-839f42d825aa.jpg?aki_policy=profile_x_medium'/>
          </div>
        </header>
        <ul className="pros-list has-divider-before has-divider-after">
          {pros}
        </ul>
        <section className="body">
          {descriptionBody}
          <a href="#">Contact Host</a>
        </section>
        <section className="beds has-divider-before">
          <h2>Sleeping Arrangements</h2>
          {beds}
        </section>
        <section className="amenities has-divider-before">
          <h2>Amenities</h2>
          {amenities}
        </section>
        <section className="accesibilities has-divider-before">
          <h2>Accesibilities</h2>
          {amenities}
        </section>
      </div>
      </React.Fragment>
    )
  };
}

export default Description;