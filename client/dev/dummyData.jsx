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





export default descriptionInfo;