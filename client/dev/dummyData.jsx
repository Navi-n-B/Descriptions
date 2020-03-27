import React from 'react';
//todo: move to helpers.js
function sanatize(text) {
  text = text.replace(/&/g, '&amp;');
  text = text.replace(/</g, '&lt;');
  text = text.replace(/>/g, '&gt;');
  return input;
}
let icons = ['IoIosStarOutline', 'IoMdWater', 'IoIosRibbon', 'IoIosPin']
const placeBody = [`Located in the coffee region, in the Andean mountains of Colombia, South America, a charming cabana made from bamboo, with a great view and a "sendero" or pathway through the bamboo forest which criss-crosses our 5 acre organic farm, leading down to a stream. A place to relax and commune with nature.
Please know that the price listed is for one person. Please select the correct number of guests when you request the cabana. The second guest is $20 additional per night. Breakfast is included.`,
`Surrounded by beautiful rainforest plants, strategically placed for privacy, with an outdoor shower in a garden. Commune with nature, listen to crickets and night and birds in the morning.
Situated on a small organic farm. We grow tropical fruits and trees, flowers, with aloe vera as our main crop. There is an enchanting pathway through our bamboo forest, leading down to a mountain stream and a small waterfall. Near many coffee region tours and attractions, including our own organic farming workshops, visiting a nearby bee farm where our neighbor propagates bees in danger of extinction, local coffee tours, butterfly emporium, hang gliding, zip lining, white water rafting, horseback riding, hiking, visiting nearby historic towns and world heritage sites.`,
`The cabana and outdoor bathroom are all yours! You can also enjoy outdoor amenities like hiking through our bamboo forest. The cabana also has an outdoor dining area, although Yudy usually serves breakfast and any requested meals in the main house, you may request eating meals in the cabana or the outdoor eating area.`,
`
Yudy is a good cook and in addition to a breakfast of your choice, she offers lunches or dinners for 20 mil pesos per person.

The King size bed can be separated into 2 twins.`,];

const descriptionInfo = {
  placeTitle: 'Hut hosted by Yudy & Victoria',
  placeSize: ['2 guests', '2 beds', '1 bath'],
  hostImage: 'url',
  pros: {
  icons: icons,
  titles: ['Entire home','Sparkling Clean','Sara is a superhost','Great location'],
  descs: ['You’ll have the hut to yourself.','10 recent guests said this place was sparkling clean.','Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.','100% of recent guests gave the location a 5-star rating.'],
  },
  body: { titles: ['','The space','Guest access','Other things to note'],
    descs: placeBody,
  },
  contact_id: '1234567',
  beds: [
    {title: 'Common Spaces', type: 'sofa bed', count: 1},
    {title: 'Bedroom 1', type: 'double bed', count: 1},
  ],
  amenities: {
      titles: ['Wifi', 'Free Parking on premises', 'Dryer', 'Breakfast', 'Washer', 'Hangers', 'Essentials', 'Fire extinguisher',],
  missing: ['Carbon monoxide alarm','Smoke alarm'],
  icons: ['IoIosStarOutline','IoIosStarOutline','IoIosStarOutline','IoIosStarOutline','IoIosStarOutline','IoIosStarOutline','IoIosStarOutline','IoIosStarOutline','IoIosStarOutline','IoIosStarOutline','IoIosStarOutline','IoIosStarOutline','IoIosStarOutline','IoIosStarOutline','IoIosStarOutline','IoIosStarOutline','IoIosStarOutline',],
  },
}


export default {
    "id": 1,
    "title": "fuel clothing frequently listen yesterday social far fact condition flat",
    "host_id": 2,
    "amenities_list": {
      "has": [
        {
          "title": "Alarm Clock",
          "icon": "IoIosAlarm"
        },
        {
          "title": "Bathroom",
          "icon": "IoMdRocket"
        },
        {
          "title": "Bed Linen",
          "icon": "IoMdSquare"
        },
        {
          "title": "Boating",
          "icon": "IoIosBoat"
        },
        {
          "title": "Chairs",
          "icon": "IoIosDownload"
        },
        {
          "title": "Cooking hob",
          "icon": "IoMdNutrition"
        },
        {
          "title": "Cookware & Kitchen Utensils",
          "icon": "IoMdBarcode"
        },
        {
          "title": "Dishwasher",
          "icon": "IoMdLocate"
        },
        {
          "title": "En suite bathroom",
          "icon": "IoIosAddCircle"
        },
        {
          "title": "Free Wireless Internet",
          "icon": "IoIosWifi"
        },
        {
          "title": "Freezer",
          "icon": "IoMdSnow"
        },
        {
          "title": "Fridge",
          "icon": "IoMdPizza"
        },
        {
          "title": "Heating",
          "icon": "IoMdRefreshCircle"
        },
        {
          "title": "Ironing Board",
          "icon": "IoMdShirt"
        },
        {
          "title": "Microwave",
          "icon": "IoMdPizzas"
        },
        {
          "title": "Oven",
          "icon": "IoMdOptions"
        },
        {
          "title": "Queen size bed",
          "icon": "IoIosBed"
        },
        {
          "title": "Shopping Mall",
          "icon": "IoMdNavigate"
        },
        {
          "title": "Shower",
          "icon": "IoMdUmbrella"
        },
        {
          "title": "Smoke detectors",
          "icon": "IoLogoFlickr"
        },
        {
          "title": "Sofa",
          "icon": "IoMdWalk"
        },
        {
          "title": "Stereo",
          "icon": "IoMdRadio"
        },
        {
          "title": "Towels",
          "icon": "IoIosThumbsUp"
        }
      ],
      "missing": [
        {
          "title": "Air conditioning",
          "icon": "IoIosCloudDownload"
        },
        {
          "title": "Balcony",
          "icon": "IoIosBody"
        },
        {
          "title": "Bathtub",
          "icon": "IoMdSquareOutline"
        },
        {
          "title": "Cable TV",
          "icon": "IoIosTv"
        },
        {
          "title": "Carbon monoxide detectors",
          "icon": "IoMdAlert"
        },
        {
          "title": "Children Area",
          "icon": "IoIosHeartEmpty"
        },
        {
          "title": "Coffee Maker in Room",
          "icon": "IoIosOutlet"
        },
        {
          "title": "Double bed",
          "icon": "IoIosBed"
        },
        {
          "title": "Free Parking",
          "icon": "IoIosCar"
        },
        {
          "title": "Golf",
          "icon": "IoMdRedo"
        },
        {
          "title": "Hair Dryer",
          "icon": "IoMdPerson"
        },
        {
          "title": "Hot tub",
          "icon": "IoIosWater"
        },
        {
          "title": "Indoor Pool",
          "icon": "IoIosWine"
        },
        {
          "title": "Outdoor Pool",
          "icon": "IoIosWater"
        },
        {
          "title": "Outdoor Tennis",
          "icon": "IoLogoGameControllerA"
        },
        {
          "title": "Restaurant",
          "icon": "IoMdTrain"
        },
        {
          "title": "Really Great Toilet",
          "icon": "IoMdStarOutline"
        },
        {
          "title": "TV",
          "icon": "IoMdTv"
        }
      ]
    },
    "description_titles": "|||plus grow cake spin certainly supply|||total ahead believed principal situation hung",
    "description_bodies": "melted clean regular exact badly small exclaimed construction forth brass short power ate congress word work beneath go tropical while column doll them label familiar lamp service quickly noun swept too visitor printed national task eat sunlight glass around spread view told strange adult getting than herd mile return carry fully coffee make look sat vowel western soon deep motor time log declared main obtain situation allow straight ride worried hello hope future prove lungs harder sight for slipped gray club relationship tax string bank garden accident kept slowly yellow at plus rather slave nearest electric lying problem split citizen|||outside chemical church program sound corn shadow blow excitement goes conversation row several eight changing accept upward rays forty canal bread general establish anything join harbor rather equal shoot unless stepped deeply death grandmother floor tonight mouth setting taste goes government thousand pick silver proud pupil laugh positive picture frequently practice herself cost wolf nation seems breathe diagram steady zoo exist little sitting fireplace expression else get hospital exactly safety remain death favorite shoe each glass gift cast folks game correct perhaps club managed treated brief who cup late duck scientist making wore setting night birth fat circle location spite|||frog shut different nearer space advice rate wood like born reader relationship century speech birth load member silent throughout am joy bad struck safe dangerous fill scene mile instant same program she behavior certain top short concerned pine morning rich voice bowl hang mass any crop up difficult offer event attempt sink doubt nation hole courage through ring aware will wheat sold strip simplest help breathing ago steam begun shake by easily doll question potatoes adjective to clothing structure why beautiful dance nose voice same tone electric rush we that tropical empty younger thing tight hung indeed statement meet eye",
    "location": "Fake Location",
    "guest_size": 2,
    "bath_count": 2.5,
    "accessibilities_list": [
      "Step-free access",
      "Wide hallways",
      "Roll-in shower with chair",
      "Bathtub with shower chair"
    ],
    "pros_list": [
      {
        "title": "Great Host!",
        "description": "This host is a great host.",
        "icon": "IoIosMedal"
      },
      {
        "title": "Super Clean!",
        "description": "120% of guests said this home was magical.",
        "icon": "IoIosColorWand"
      },
      {
        "title": "The whole shebang!",
        "description": "You get this all to yo'self.",
        "icon": "IoIosArchive"
      }
    ],
    "beds_list": [
      "king",
      "jack"
    ],
    "createdAt": "2020-03-23T20:03:50.000Z",
    "updatedAt": "2020-03-23T20:03:50.000Z"
}