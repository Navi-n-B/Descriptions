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

export const getFakeListings = function(count=100,maxGuestSize=4) {
  let fakeListings = [];
  for(let i =0; i<count;i++){
    const listingSize = generateNumber(maxGuestSize);
    fakeListings.push({
      title: 'TBGenerated home',
      host_id: Math.floor(Math.random()*3),
      amenities_list: generateArray(40),
      accessibilities_list: generateArray(8),
      description: 'TBGenerated description',
      location: 'Fake Location',
      guest_size: listingSize,
      bath_count: 2.5,
      beds_list: generateArray(6,listingSize),
      pros_list: '0,1,3',
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
    {title: 'Great Host!', description: 'This host is a great host.', icon: ''},
    {title: 'Super Clean!', description: '120% of guests said this home was super clean.', icon: ''},
    {title: 'Close to the beach!', description: 'This place is mondo close to the beach.', icon: ''},
    {title: 'The whole shebang!', description: 'You get this all to yo\'self.', icon: ''},
  ],
  ['amenities']: [
    {title: "Air conditioning", icon: ''},
    {title: "Alarm Clock", icon: ''},
    {title: "Balcony", icon: ''},
    {title: "Bathroom", icon: ''},
    {title: "Bathtub", icon: ''},
    {title: "Bed Linen", icon: ''},
    {title: "Boating", icon: ''},
    {title: "Cable TV", icon: ''},
    {title: "Carbon monoxide detectors", icon: ''},
    {title: "Chairs", icon: ''},
    {title: "Children Area", icon: ''},
    {title: "Coffee Maker in Room", icon: ''},
    {title: "Cooking hob", icon: ''},
    {title: "Cookware & Kitchen Utensils", icon: ''},
    {title: "Dishwasher", icon: ''},
    {title: "Double bed", icon: ''},
    {title: "En suite bathroom", icon: ''},
    {title: "Free Parking", icon: ''},
    {title: "Free Wireless Internet", icon: ''},
    {title: "Freezer", icon: ''},
    {title: "Fridge / Freezer", icon: ''},
    {title: "Golf", icon: ''},
    {title: "Hair Dryer", icon: ''},
    {title: "Heating", icon: ''},
    {title: "Hot tub", icon: ''},
    {title: "Indoor Pool", icon: ''},
    {title: "Ironing Board", icon: ''},
    {title: "Microwave", icon: ''},
    {title: "Outdoor Pool", icon: ''},
    {title: "Outdoor Tennis", icon: ''},
    {title: "Oven", icon: ''},
    {title: "Queen size bed", icon: ''},
    {title: "Restaurant", icon: ''},
    {title: "Shopping Mall", icon: ''},
    {title: "Shower", icon: ''},
    {title: "Smoke detectors", icon: ''},
    {title: "Sofa", icon: ''},
    {title: "Stereo", icon: ''},
    {title: "Swimming pool", icon: ''},
    {title: "Toilet", icon: ''},
    {title: "Towels", icon: ''},
    {title: "TV", icon: ''},
  ]
}

