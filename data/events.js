const dataEvents = [
  {
    title: 'Beginners\' Workshop',
    slug: 'beginners-workshop',
    date: '1 September 2018, 11 am - 4 pm',
    description: 'For Women and Non-Binary people',
    location: 'Access Space Labs',
    locationDetail: '3-7 Sidney St, Sheffield S1 4RG',
    booking: 'Sign up here',
    bookingLink: 'https://www.eventbrite.co.uk/e/introduction-to-live-coding-for-women-and-non-binary-people-tickets-48694007086',
    testimonial: '',
    detail:
      `A beginners' live coding workshop presented by SONA, 
      for women and non-binary people. 
      The workshop will be lead by Shelly Knotts, 
      Joanne Armitage and Lucy Cheesman. 
      Advance signups essential but free - sign up here. 
      For more info, see the SONA website.`,
  },
  {
    title: 'Visualists meetup',
    slug: 'visualists-meetup',
    date: '1 September 2018, 11 am - 4 pm',
    description: 'Live code pixelists',
    location: 'Access Space Labs',
    locationDetail: '3-7 Sidney St, Sheffield S1 4RG',
    booking: 'Places limited, reserve your place',
    bookingLink:'https://tickets.partyforthepeople.org/events/4173-livecode-visualists-meetup',
    testimonial: '',
    detail:
      `A session for live coding visualists (at any level) 
      lead by Antonio Roberts (aka hellocatfood), 
      to talk about their tools and how they perform, with focus on Algorave visuals.
      Will include demonstrations of live coding systems 
      (including Hydra, PraxisLIVE, Livecodelab, PureData/GEM), 
      discussions, followed by hands-on workshops.
      A core part of the session will be discussion around key questions 
      for live code visualists; how do you pace yourself in a performance? 
      Should we aim to build up slowly or go straight in with loud visuals?
      How much can you truly respond to the music? 
      Is it important to show the code, and how does it fit with the musician's projection?
      Please note that exact timings are not yet confirmed. 
      More details to follow!`,
  },
  {
    title: 'Algorave',
    slug: 'algorave',
    date: '1 September 2018, 8 pm - 2 am',
    description: 'Live code pixelists',
    location: 'DINA',
    locationDetail: '32A-34 Cambridge St, Sheffield S1 4HP',
    booking: 'Tickets now available',
    bookingLink: 'https://tickets.partyforthepeople.org/events/4156-algorave-sheffield',
    testimonial:
      `"The scene at an algorave is often what you\'d expect from any good techno night - 
      a dark room, engaging visuals. a decent, bass-heavy speaker set-up, 
      and lots of people ready to dance. .. performers at algoraves respond to each other 
      and the audience in real time, often projecting the lines of code onto the walls as they type. 
      lt’s coding as improvisation and experiment.."<br/>
      <b> - The Wire magazine</b><br/>
      <br/>
      "Live coders write computer programs live, while the programs generate their music, 
      but the focus is on people dancing and seriously enjoying themselves<br/>
      <b> - Dazed and Confused"</b><br/>
      <br/>
      ".. not so much a revolution as a de-volution, 
      a rolling back to the backend of music production, 
      where the possibilities of the encoded information 
      inside computer software is open and endless"<br/>
      <b>- Mixmag</b><br/>
      `,
    detail:
      `Probably the world's first two-room Algorave, 
      with an international line-up of top notch live coders 
      and algorithmic producers, including Renick Bell + Chiho Oka, 
      Atsushi Tadokoro, Akihiro Kubota, Linux Lewis, Yaxu, 
      Alexandra Cardenas, LiveDog Inc., Heavy Lifting, 
      ALGOBABEZ, Qirky, Neil C Smith, Innocent, 
      Thorsten Sideboard, Alejandro Albornoz, 
      tedthetrumpet, Digital Selves + more ..`,
  },
  {
    title: 'TOPLAB moot',
    slug: 'toplab-moot',
    date: '1 - 3 September 2018',
    description: 'Livecoding talks, demos and workshops',
    location: 'Access Space',
    locationDetail: '3-7 Sidney St, Sheffield S1 4RG',
    booking: 'Tickets now available',
    bookingLink: 'https://tickets.partyforthepeople.org/events/3823-toplap-moot',
    testimonial:'',
    detail:
      `Two days of activities aimed at active live coders at any stage of their career. 
      A “moot” is an assembly, for an exchange of thoughts and ideas on speculative topics. 
      We'll have talks and workshops aimed at sharing techniques and practice, 
      and if weather allows, finish with an excursion to the local peak district 
      to make noise on battery-powered speakers.
      `,
  },
];


let dataEventName = [];
dataEvents.forEach((item, index) => {

  // if can not find item in dataCategories then push it into.
  if (dataEventName.indexOf(item.name) === -1) {
    dataEventName.push(item.name);
  }
});



export default  ( dataEventName, dataEvents ) 
