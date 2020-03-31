var randomWords = require('random-words');

const containsAllInts = function(arr){
  for(let i=0;i>arr.length;i++){
    if(parseInt(arr[i]) === 'NaN'){
      return false;
    }
  };
  return true;
}

export function convertToObj(type,db_string){
  let convertedArr = db_string.split(',');
  convertedArr = convertedArr.map(Number).map(i => {return airbnbDescriptors[type][i]})
  if(type==='amenities'){
    const amenities = airbnbDescriptors.amenities;
    convertedArr = {'has': convertedArr, 'missing': []};
    for(let i = 0; i<amenities.length;i++){
      if(convertedArr.has.indexOf(amenities[i]) === -1){
        convertedArr.missing.push(amenities[i]);
      }
    }
  };
  console.log(convertedArr);
  return convertedArr;
};

const generateArray = function(length, limit=10000){
  const newArr = [];
  for(let i=0;i<length;i++){
    if(Math.round(Math.random())===1){
      newArr.push(i);
    }
    if(newArr.length === limit){
      return newArr.join(',');
    }
  }
  return newArr.join(',');
}
export const generateNumber = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}
const generateDescription = (paragraphs=3) => {
  let description = {titles: [''], bodies: []};
  for(let i=0; i<paragraphs;i++){
    if(i>0){description.titles.push(randomWords({exactly:3, wordsPerString:2}).join(' '));}
    description.bodies.push(randomWords({exactly:100}).join(' '));
  };
  return description;
  console.log(description);
}

export const getFakeListings = function(count=100,maxGuestSize=4) {
  let fakeListings = [];
  for(let i =0; i<count;i++){
    const listingSize = generateNumber(maxGuestSize);
    const description = generateDescription();
    fakeListings.push({
      title: randomWords({exactly:5, wordsPerString:2}).join(' '),
      host_id: Math.floor(Math.random()*3),
      amenities_list: generateArray(40),
      accessibilities_list: generateArray(8),
      description_titles: description.titles.join('|||'),
      description_bodies: description.bodies.join('|||'),
      location: 'Fake Location',
      guest_size: listingSize,
      bath_count: 2.5,
      beds_list: generateArray(6,listingSize),
      pros_list: generateArray(10,3),
      createdAt : new Date(),
      updatedAt : new Date(),
      });
    }
  return fakeListings;
}

const airbnbDescriptors = {
  ['accessibilities']: [
    "Step-free access",
    "Wide doorway",
    "Wide hallways",
    'Roll-in shower with chair',
    'Bathtub with shower chair',
    "Well lit path to entrance",
    "Flat path to front door",
    "Elevators",
    "Accessible-height beds",
    "Handheld shower head",
  ],
  ['bed_type']: [
    'queen',
    'king',
    'jack',
    'twin',
    'single',
    'bunk',
    'daybed'
  ],
  ['pros']: [
    {title: 'Great Host!', description: 'This host is a great host.', icon: 'IoIosMedal'},
    {title: 'Super Clean!', description: '120% of guests said this home was magical.', icon: 'IoIosColorWand'},
    {title: 'Close to the beach!', description: 'This place is mondo close to the beach.', icon: 'IoIosIceCream'},
    {title: 'Michelle is a Superhost', description: 'Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.', icon: 'IoIosArchive'},
    {title: 'Great location', description: '90% of recent guests gave this location a 5-star rating.', icon: 'IoIosArchive'},
    {title: 'Great check-in experience', description: '95% of recent guests gave the check-in process a 5-star rating.', icon: 'IoIosArchive'},
    {title: 'Come with cats!', description: 'There\'s a ton of cats! Non-negotiable.', icon: 'IoIosArchive'},
    {title: 'A Popular listing!', description: 'Everyone wants to stay here!', icon: 'IoIosArchive'},
    {title: 'Self check-in', description: 'Check yourself in with the lockbox.', icon: 'IoIosArchive'},
  ],
  ['amenities']: [
    {title: "Air conditioning", icon: 'IoIosCloudDownload'},
    {title: "Alarm Clock", icon: 'IoIosAlarm'},
    {title: "Balcony", icon: 'IoIosBody'},
    {title: "Bathroom", icon: 'IoMdRocket'},
    {title: "Bathtub", icon: 'IoMdSquareOutline'},
    {title: "Bed Linen", icon: 'IoMdSquare'},
    {title: "Boating", icon: 'IoIosBoat'},
    {title: "Cable TV", icon: 'IoIosTv'},
    {title: "Carbon monoxide detectors", icon: 'IoMdAlert'},
    {title: "Chairs", icon: 'IoIosDownload'},
    {title: "Children Area", icon: 'IoIosHeartEmpty'},
    {title: "Coffee Maker in Room", icon: 'IoIosOutlet'},
    {title: "Cooking hob", icon: 'IoMdNutrition'},
    {title: "Cookware & Kitchen Utensils", icon: 'IoMdBarcode'},
    {title: "Dishwasher", icon: 'IoMdLocate'},
    {title: "Double bed", icon: 'IoIosBed'},
    {title: "En suite bathroom", icon: 'IoIosAddCircle'},
    {title: "Free Parking", icon: 'IoIosCar'},
    {title: "Free Wireless Internet", icon: 'IoIosWifi'},
    {title: "Freezer", icon: 'IoMdSnow'},
    {title: "Fridge", icon: 'IoMdPizza'},
    {title: "Golf", icon: 'IoMdRedo'},
    {title: "Hair Dryer", icon: 'IoMdPerson'},
    {title: "Heating", icon: 'IoMdRefreshCircle'},
    {title: "Hot tub", icon: 'IoIosWater'},
    {title: "Indoor Pool", icon: 'IoIosWine'},
    {title: "Ironing Board", icon: 'IoMdShirt'},
    {title: "Microwave", icon: 'IoMdPizzas'},
    {title: "Outdoor Pool", icon: 'IoIosWater'},
    {title: "Outdoor Tennis", icon: 'IoLogoGameControllerA'},
    {title: "Oven", icon: 'IoMdOptions'},
    {title: "Queen size bed", icon: 'IoIosBed'},
    {title: "Restaurant", icon: 'IoMdTrain'},
    {title: "Shopping Mall", icon: 'IoMdNavigate'},
    {title: "Shower", icon: 'IoMdUmbrella'},
    {title: "Smoke detectors", icon: 'IoLogoFlickr'},
    {title: "Sofa", icon: 'IoMdWalk'},
    {title: "Stereo", icon: 'IoMdRadio'},
    {title: "Really Great Toilet", icon: 'IoMdStarOutline'},
    {title: "Towels", icon: 'IoIosThumbsUp'},
    {title: "TV", icon: 'IoMdTv'},
  ]
}

