const dataArtists = [
  {
    name: 'Lucy Cheesman',

    imgProfile: '/static/images/artist/LucyCheesman.jpg',
    imgDesc: '/static/images/artist/LucyCheesman_imgDesc.jpg',
    imgDescBit: '/static/images/artist/LucyCheesman_imgDescBit.jpg',
    website: '',
    social: [{ twitter: 'https://twitter.com/abelstaites' }, {github: 'https://heavy-lifting.github.io/'}] ,
    twitterName: '@abelstaites',
    programme: [{programme1: 'workshop'}, {programme2:''}],
    programmeTitle: '',
    programmeTitle2: '',
    programmeDesc: '',
    programmeDesc2: '',
    descriptionDetail:`Lucy Cheesman is a major live code agitator in Sheffield, 
    performing widely solo as Heavy Lifting and in a 
    diversity of bands including TYPE and the Trve 
    Yorkshire Kvlt Ensemble. She also co-runs the 
    <a href="https://sonawomen.co.uk/">SONA network</a> 
    for women and girls in music 
    technology and the monthly(ish) 
    Tidal club meetings in Sheffield.`,
    embed: [
      { youtube: ''},
      { soundcloud: ''},
      { bandcamp: ''}
    ],
  },

  {
    name: 'Joanne Armitage',

    imgProfile: '/static/images/artist/JoanneArmitage.jpg',
    imgDesc: '/static/images/artist/JoanneArmitage_imgDesc.jpg',
    imgDescBit: '/static/images/artist/JoanneArmitage_imgDescBit.jpg',
    website: '',
    social: [{ twitter: 'https://twitter.com/joannnne' }, {github: 'https://joannnne.github.io/'}] ,
    twitterName: '@joannnne',
    programme: [{programme1: 'workshop'}, {programme2:''}],
    programmeTitle: '',
    programmeTitle2: '',
    programmeDesc: '',
    programmeDesc2: '',
    descriptionDetail:`Joanne Armitage is a composer, improviser and 
    researcher based in Leeds, England, known for her live coded music, 
    and research into haptics in music performance. She performs 
    internationally using the SuperCollider language, including as 
    half of live coding duo ALGOBABEZ with Shelly Knotts at the forefront 
    of the Algorave movement. Her music is often performed in a club setting, 
    while embracing error and uncertainty. She is also known as advocate for 
    diversity in music and technology, including through invited workshops.`,
    embed: [
      { youtube: ''},
      { soundcloud: ''},
      { bandcamp: ''}
    ],
  },

  {
    name: 'Shelly Knotts',

    imgProfile: '/static/images/artist/ShellyKnotts.jpg',
    imgDesc: '/static/images/artist/ShellyKnotts_imgDesc.jpg',
    imgDescBit: '/static/images/artist/ShellyKnotts_imgDescBit.jpg',
    website: 'https://en.wikipedia.org/wiki/Shelly_Knotts',
    social: [{ twitter: 'https://twitter.com/shelly_knotts' }, {github: ''}] ,
    twitterName: '@shelly_knotts',
    programme: [{programme1: 'workshop'}, {programme2:''}],
    programmeTitle: '',
    programmeTitle2: '',
    programmeDesc: '',
    programmeDesc2: '',

    descriptionDetail:`Shelly Knotts is a composer, performer and improvisor of live 
    electronic, live coded and network music based in Newcastle upon Tyne, England. 
    She performs internationally, often using Live coding techniques, and a range 
    of styles including Noise, Drone and Algorave. She often collaborates on performance, 
    including a PRS for Music commission with Annie Mahtini, an audio/visual 
    collaboration Sisesta Pealkiri with Alo Allik, uiaesk! with Holger Ballweg, 
    Algobabez with Joanne Armitage, and as part of the Birmingham Laptop Ensemble. 
    Her work often has a political dimension, using network music to explore social 
    structures, and live coding to explore failure as an alternative to virtuosity,
    as well as exploring and encouraging diversity through workshops and hackathons.`,
    embed: [
      { youtube: ''},
      { soundcloud: ''},
      { bandcamp: ''}
    ],
  },

  {
    name: 'Hellocatfood',

    imgProfile: '/static/images/artist/Hellocatfood.jpg',
    imgDesc: '/static/images/artist/Hellocatfood_imgDesc.jpg',
    imgDescBit: '/static/images/artist/Hellocatfood_imgDescBit.jpg',
    website: 'http://hellocatfood.com/',
    social: [{ twitter: 'https://twitter.com/hellocatfood' }, {github: ''}] ,
    twitterName: '@hellocatfood',
    programme: [{programme1: 'meetup'}, {programme2:'algorave'}],
    programmeTitle: '',
    programmeTitle2: '',
    programmeDesc: '',
    programmeDesc2: 'Algorave visualist stalwart bringing intensive pixels and also a rumoured musical premiere...',
    descriptionDetail:`hellocatfood is the alias of Antonio Roberts, 
    a New Media artist and Curator based in Birmingham, UK. 
    His artwork uses glitch art, hacking and technology-driven 
    processes to explore issues surrounding copyright, remixing 
    and free culture. For his live visuals he (mis)uses a range 
    of programming languages to create glitched, broken visuals. 
    He has provided visuals for the likes of MTV, Com Truise, 
    Blood Sport, Steve Davis, Henry Homesweet and My Panda Shall Fly.`,
    embed: [
      { youtube: 'https://www.youtube.com/embed/taM4oyy_4kE'},
      { soundcloud: ''},
      { bandcamp: ''}
    ],
  },

  {
    name: 'Algobabez',
    imgProfile: '/static/images/artist/Algobabez.jpg',
    imgDesc: '/static/images/artist/Algobabez_imgDesc.jpg',
    imgDescBit: '/static/images/artist/Algobabez_imgDescBit.jpg',
    website: '',
    social: [{ twitter: 'https://twitter.com/algobbz' }, {github: ''}] ,
    twitterName: '@algobbz',
    programme: [{programme1: 'algorave'}, {programme2:''}],
    programmeTitle: '',
    programmeTitle2: '',
    programmeDesc: 'The quintessential algorave duo representing Leeds x Newcastle with quantised noise for dancing.',
    programmeDesc2: '',
    descriptionDetail:`ALGOBABEZ have been blasting eardrums with incorrigibly 
    industrial synth-driven algo-pop since 2016. Formed of algo-regulars 
    <a href="http://datamusician.net/">Shelly Knotts</a> 
    and 
    <a href="http://joannnne.github.io/">Joanne Armitage</a>
    , they use SuperCollider to code and control patterns of weird, wonky, noisy, 
    thumping, danceable music. OK apart, but better together: 2 babes, 2 laptops and 1 sound.`,
    embed: [
      { youtube: 'https://www.youtube.com/embed/-9twrMVR-Do'},
      { soundcloud: ''},
      { bandcamp: ''}
    ],
  },

  {
    name: 'Chiho Oka and Renick Bell',

    imgProfile: '/static/images/artist/ChihoOkaandRenickBell.jpg',
    imgDesc: '/static/images/artist/ChihoOkaandRenickBell_imgDesc.jpg',
    imgDescBit: '/static/images/artist/ChihoOkaandRenickBell_imgDescBit.jpg',
    website: '',
    social: [{ twitter: '' }, {github: ''}] ,
    twitterName: '',
    programme: [{programme1: 'algorave'}, {programme2:''}],
    programmeTitle: '',
    programmeTitle2: '',
    programmeDesc: `Chiho + Renick are experimenting with minimal synth patterns 
    over 160 BPM rhythms. Renick generates rhythmic data using his Conductive 
    live coding system and sends it to Chiho, who uses it to trigger synths 
    and note patterns live-coded in SuperCollider.`,
    programmeDesc2: '',
    descriptionDetail:`Chiho Oka and Renick Bell began collaborating in May 2018. 
    Their first performance together was the June 2018 algorave in Tokyo.
    <br/><br/>
    Chiho Oka is a composer at Tochka in Senjusekiya, Adachi Ward, Tokyo. 
    She is composing and performing electronic music and sound art using 
    programming, laptops, and everyday items. She is a member of the Tokyo-based 
    Ensemble for Experimental Music and Theater, which is performing 
    experimental music, such as that of Fluxus, from the 1960s to the 
    present. <a href="https://okachiho.com/>"okachiho.com</a>
    <br/><br/>
    Renick Bell [US] is a computer musician, programmer, and teacher 
    who has lived in Tokyo, Japan since 2006. He has released music 
    on several labels, including Lee Gamble’s UIQ, Rabit's Halcyon Veil, 
    and Quantum Natives, with another album forthcoming on Seagrave, 
    among others. His current research interests are live coding, 
    improvisation, and algorithmic art using open source software. 
    He is the author of Conductive, a library for live coding in 
    the Haskell programming language. He graduated from the doctoral 
    program at Tama Art University in Tokyo, Japan. Originally from West Texas, 
    he previously lived in New York City and Taipei, Taiwan. 
    <a href="http://renickbell.net">renickbell.net</a>`,
    embed: [
      { youtube: 'https://www.youtube.com/embed/Upe2qqurja8'},
      { soundcloud: ''},
      { bandcamp: ''}
    ],
  },

  {
    name: 'TYPE',

    imgProfile: '/static/images/artist/TYPE.jpg',
    imgDesc: '/static/images/artist/TYPE_imgDesc.jpg',
    imgDescBit: '/static/images/artist/TYPE_imgDescBit.jpg',
    website: '',
    social: [{ twitter: 'https://twitter.com/TYPEensemble' }, {github: ''}] ,
    twitterName: '@TYPEensemble',
    programme: [{programme1: 'algorave'}, {programme2:''}],
    programmeTitle: '',
    programmeTitle2: '',
    programmeDesc: `Working collaboratively in a shared text buffer 
    each member of The Yorkshire Programming Ensemble will construct 
    portions of music-generating code before interacting with the 
    work one another has left behind. By making and unmaking each 
    other’s code TYPE will work both together and against each other 
    in the exploration of sound and rhythms.`,
    programmeDesc2: '',
    descriptionDetail:`The Yorkshire Programming Ensemble (T.Y.P.E.) 
    is a collection of humans, Lucy Cheesman, Laurie Johnson, 
    and Ryan Kirkbride, that meet IRL and URL and enjoy exploring 
    rhythmic music in a collaborative virtual space and generally 
    making a lot of noise.`,
    embed: [
      { youtube: ''},
      { soundcloud: ''},
      { bandcamp: ''}
    ],
  },

  {
    name: 'Neil C Smith',

    imgProfile: '/static/images/artist/NeilCSmith.jpg',
    imgDesc: '/static/images/artist/NeilCSmith_imgDesc.jpg',
    imgDescBit: '/static/images/artist/NeilCSmith_imgDescBit.jpg',
    website: 'https://www.neilcsmith.net',
    social: [{ twitter: 'https://twitter.com/neilcsmith_net' }, {github: ''}] ,
    twitterName: '@neilcsmith_net',
    programme: [{programme1: 'algorave'}, {programme2:'toplabmoot'}],
    programmeTitle: 'AMEN $ Mother Function',
    programmeTitle2: 'PraxisLIVE - Write Now, Run Anytime',
    programmeDesc: `One sample, one function – a live-coded, 
    single function demolition of one of the most frequenctly 
    sampled loops in modern music. This performance is both 
    an essay in conceptual minimalism, and an attempt at filling 
    the dance floor with the aid of one wavetable and a little maths. 
    The silent $ in the title (also used in the code), 
    is in tribute to Gregory C. Coleman, the original 
    drummer of the Amen break, who died homeless and broke.`,
    programmeDesc2: `PraxisLIVE is a hybrid-visual live programming 
    environment combining visual patching with the ability to recode 
    any node as it is running. At its heart is PraxisCORE, a modular 
    JVM runtime for cyberphysical programming, supporting real-time 
    coding of real-time systems.  With a distributed forest-of-actors 
    architecture, runtime code changes and comprehensive introspection, 
    PraxisCORE brings aspects of Erlang, Smalltalk and Extempore 
    into the Java world.
    <br/><br/>
    While it can be used to live-code with any Java library, 
    PraxisLIVE comes with particular built-in support for Processing, 
    OpenGL shaders, GStreamer video, and its own live-recodeable 
    audio synthesis engine. This talk / demonstration will showcase 
    these key features, and demonstrate different approaches to 
    project setup for both audio and visual live-coding performance.`,
    descriptionDetail:`Neil C Smith is an Artist & Technologist from Oxford, UK.  
    An artist working with code, he builds interactive spaces & projections, 
    and improvised & live-coded performances.  A technologist with a creative edge, 
    he is lead developer of PraxisLIVE, a hybrid visual IDE and runtime for 
    live creative coding, and a passionate advocate of free software.`,
    embed: [
      { youtube: 'https://www.youtube.com/embed/SgE9POc5BdA'},
      { soundcloud: ''},
      { bandcamp: ''}
    ],
  },

  {
    name: 'Claude Heiland-Allen',

    imgProfile: '/static/images/artist/ClaudeHeiland-Allen.jpg',
    imgDesc: '/static/images/artist/ClaudeHeiland-Allen_imgDesc.jpg',
    imgDescBit: '/static/images/artist/ClaudeHeiland-Allen_imgDescBit.jpg',
    website: 'https://mathr.co.uk/clive/',
    social: [{ twitter: '' }, {github: ''}] ,
    twitterName: '',
    programme: [{programme1: 'algorave'}, {programme2:'toplabmoot'}],
    programmeTitle: 'mathr',
    programmeTitle2: 'Live-coding audio in C',
    programmeDesc: 'Live-coding audio in C, mathr weaves drones and beats into noisy chaos.',
    programmeDesc2: `The JACK audio library allows you to set a callback to process audio.  
    Clive lets you change the code behind the callback at runtime, while preserving 
    a memory area to allow long running audio algorithms to continue uninterrupted.  
    A two-phase edit/commit cycle allows arbitrary changes to be made atomically 
    at each reload.`,
    descriptionDetail:`Claude Heiland-Allen (aka mathr) is an artist 
    from London interested in the complex emergent behaviour of 
    simple systems and mathematical aesthetics.`,
    embed: [
      { youtube: 'https://www.youtube.com/embed/qi2XpQXsSzo'},
      { soundcloud: ''},
      { bandcamp: ''}
    ],
  },

  {
    name: 'Deerful',

    imgProfile: '/static/images/artist/Deerful.jpg',
    imgDesc: '/static/images/artist/Deerful_imgDesc.jpg',
    imgDescBit: '/static/images/artist/Deerful_imgDescBit.jpg',
    website: 'http://deerful.com',
    social: [{ twitter: 'https://twitter.com/deer_ful' }, {github: ''}] ,
    twitterName: '@deer_ful',
    programme: [{programme1: 'algorave'}, {programme2:''}],
    programmeTitle: '',
    programmeTitle2: '',
    programmeDesc: `Emma will be debuting a set of brand new, 
    unreleased songs in the ixi lang live-coding environment, 
    mixing live vocals with algorithmic rhythms.`,
    programmeDesc2: '',
    descriptionDetail:`Deerful is Emma Winston, an academic, artist and musician. 
    She writes lush, sad, narrative electropop songs, mostly about feelings, 
    and exists in a perpetual state of being way too excited about making things. 
    Her work has been described by music blog 
    <a href="https://fortherabbits.net/2016/12/12/eps-of-the-year/">For The Rabbits</a> 
    as “like a computer dreaming of a sunrise, Princess Peach from Mario re-imagined 
    as a kick-arse, feminist superhero, or a pixelated Joanna Newsom."`,
    embed: [
      { youtube: 'https://www.youtube.com/embed/MJSRAuPQoA8'},
      { soundcloud: ''},
      { bandcamp: ''}
    ],
  },

  {
    name: 'Thorsten Sideb0ard',

    imgProfile: '/static/images/artist/ThorstenSideb0ard.jpg',
    imgDesc: '/static/images/artist/ThorstenSideb0ard_imgDesc.jpg',
    imgDescBit: '/static/images/artist/ThorstenSideb0ard_imgDescBit.jpg',
    website: 'http://theb0ardside.com/',
    social: [{ twitter: '' }, {github: ''}] ,
    twitterName: '',
    programme: [{programme1: 'algorave'}, {programme2:'toplabmoot'}],
    programmeTitle: '',
    programmeTitle2: 'Practical Granular Synthesis For Fun and Profit',
    programmeDesc: `Thorsten will be live with Soundb0ard, 
    writing pattern generating algorithms which control Soundb0ard 
    instruments, including subtractive, fm and granular synths, 
    and a sample library of jump-up rave anthems.`,
    programmeDesc2: `While there are many tutorials and books to be found 
    on how to write subtractive and FM synthesis, when it came to writing 
    a granular synthesis engine for my own Soundb0ard environment, 
    I struggled to find many practical code examples. Based upon 
    reading Curtis Rhodes’ ‘Microsound’ book and an detailed blog post 
    by Robert Henke, I came up with my own granular synth engine. 
    In this talk I will walk through the code and implementation.`,
    descriptionDetail:`Thorsten Sideb0ard is a San Francisco based 
    programmer and musician, working on various software projects 
    including Synthb0ard, an embedded Android Things hardware prototype, 
    and Soundb0ard, a REPL based compositional and live performance tool.`,
    embed: [
      { youtube: 'https://www.youtube.com/embed/xMS4kEllQNw'},
      { soundcloud: ''},
      { bandcamp: ''}
    ],
  },

  {
    name: 'Atsushi Tadokoro',

    imgProfile: '/static/images/artist/AtsushiTadokoro.jpg',
    imgDesc: '/static/images/artist/AtsushiTadokoro_imgDesc.jpg',
    imgDescBit: '/static/images/artist/AtsushiTadokoro_imgDescBit.jpg',
    website: 'http://yoppa.org/',
    social: [{ twitter: 'https://twitter.com/tadokoro' }, {github: ''}] ,
    twitterName: '@tadokoro',
    programme: [{programme1: 'algorave'}, {programme2:'toplabmoot'}],
    programmeTitle: '',
    programmeTitle2: 'A/V live coding techniques with TidalCycles + openFrameworks',
    programmeDesc: 'Intensive audio/visual dancefloor electronics, live coded with TidalCycles + openFrameworks.',
    programmeDesc2: 'Short talk about audio visual live coding techniques with TidalCycles + openFrameworks.',
    descriptionDetail:`Atsushi Tadokoro is on tour from Tokyo, where he teaches 
    in Tama Art University, Tokyo University of the Arts and Keio University in Japan. 
    Tadokoro performs live coding improvisation with sounds and moving images. 
    His lectures about "creative coding" are online (<a href="http://yoppa.org/">http://yoppa.org/</a>) 
    to be practically used for students and creators.`,
    embed: [
      { youtube: 'https://www.youtube.com/embed/HJmSPFnJ7Yo'},
      { soundcloud: 'https://soundcloud.com/tadokoro/live-coding-algorave-iclc17'},
      { bandcamp: ''}
    ],
  },

  {
    name: 'Simon Blackmore',

    imgProfile: '/static/images/artist/SimonBlackmore.jpg',
    imgDesc: '/static/images/artist/SimonBlackmore_imgDesc.jpg',
    imgDescBit: '/static/images/artist/SimonBlackmore_imgDescBit.jpg',
    website: 'http://www.simonblackmore.net/',
    social: [{ twitter: 'https://twitter.com/simonblackmore_' }, {github: ''}] ,
    twitterName: '@simonblackmore_',
    programme: [{programme1: 'algorave'}, {programme2:'toplabmoot'}],
    programmeTitle: 'slow signals',
    programmeTitle2: 'Live coding with rhythm',
    programmeDesc: `This performance will explore live coding through physical rhythm. 
    Using a sound from a cajon as a computer interface, rhythms will be converted to 
    text and manipulated and transformed by software creating a form of live interactive 
    music where the actions of the performer and computer become blurred.`,
    programmeDesc2: `Simon will discuss his approach to making hardware and software 
    that enable messages to be sent to computers through rhythm. He will reflect on 
    the influence of the polyrhythms of Afro-Cuban music and the fast contra-tiempos 
    of Flamenco. Together we will try some practical examples and speculate on future 
    directions this work could take.`,
    descriptionDetail:`Simon Blackmore makes performative sculptures and installations 
    using sound and custom-made technology, he has received numerous commissions and 
    exhibited in galleries Internationally. His interest in live interaction with machines 
    has led him to develop a rhythmic computer interface and spend the last few years 
    studying Afrocuban and Flamenco music in Cuba and Spain.
    <br/><br/>
    In 2006 he was nominated for the Becks Futures Prize, he was artist in residence 
    in Universidad de Los Andes, Bogota, Colombia in 2007, and in 2008 he was awarded 
    the Berwick Gymnasium Fellowship. In 2013 his work was presented in a solo show 
    at Aldrich Contemporary Art Museum, Ridgefield, USA.
    <br/><br/>
    He is also a founding member of the art group Owl Project, known for their distinctive 
    range of wooden musical and sculptural instruments. In 2012 their project ~Flow was 
    launched in Newcastle and attracted over 50,000 visitors. Owl project have performed 
    and exhibited internationally. He is currently doing a PhD in at Oxford Brookes 
    investigating computer interaction through rhythm and sound.`,
    embed: [
      { youtube: ''},
      { soundcloud: 'https://soundcloud.com/slowsignals/3-voice-uart'},
      { bandcamp: ''}
    ],
  },

  {
    name: 'Alexandra Cardenas',

    imgProfile: '/static/images/artist/AlexandraCardenas.jpg',
    imgDesc: '/static/images/artist/AlexandraCardenas_imgDesc.jpg',
    imgDescBit: '/static/images/artist/AlexandraCardenas_imgDescBit.jpg',
    website: 'https://cargocollective.com/tiemposdelruido/Alexandra-Cardenas',
    social: [{ twitter: 'https://twitter.com/tiemposdelruido' }, {github: ''}] ,
    twitterName: '@tiemposdelruido',
    programme: [{programme1: 'algorave'}, {programme2:'toplabmoot'}],
    programmeTitle: 'TidalCycles x Hydra A/V',
    programmeTitle2: 'Hydra x TidalCycles',
    programmeDesc: `Alexandra Cardenas aka Tiemposdelruido live coding 
    teaming up with Olivia Jack (the creator of top visuals live coding 
    system Hydra). Alex in person, Olivia beaming in from Bogota..`,
    programmeDesc2: `A talk+demo around getting Hydra and TidalCycles to work together.
     We'll hopefully be joined from the creator of Hydra Olivia Jack, 
     beaming in over the internet from Bogota.`,
    descriptionDetail:`Alexandra Cardenas (aka tiemposdelruido) is a 
    Colombian composer and improviser now based in Berlin, 
    who has followed a path from Western classical composition 
    to improvisation and live electronics. These days she performs 
    regularly at the forefront of the Algorave scene, as well as 
    organising key events including the international conference 
    on live coding (ICLC) in 2017.`,
    embed: [
      { youtube: 'https://www.youtube.com/embed/9N-l4NRAR3M'},
      { soundcloud: ''},
      { bandcamp: ''}
    ],
  },

  {
    name: 'Digital Selves',

    imgProfile: '/static/images/artist/DigitalSelves.jpg',
    imgDesc: '/static/images/artist/DigitalSelves_imgDesc.jpg',
    imgDescBit: '/static/images/artist/DigitalSelves_imgDescBit.jpg',
    website: '',
    social: [{ twitter: 'https://twitter.com/dgtlslvs' }, {github: 'http://lwlsn.github.io'}] ,
    twitterName: '@dgtlslvs',
    programme: [{programme1: 'algorave'}, {programme2:''}],
    programmeTitle: '',
    programmeTitle2: '',
    programmeDesc: 'tidal cycles + some hardware',
    programmeDesc2: '',
    descriptionDetail:`Digital selves is a London based musician who 
    uses live coded algorithms of computer synthesis and found sounds 
    to create a fusion of melodic lo-fi and industrial techno and 
    explores the realm in-between.`,
    embed: [
      { youtube: 'https://www.youtube.com/embed/KFsbXSacFyM'},
      { soundcloud: ''},
      { bandcamp: ''}
    ],
  },

  {
    name: 'innocent',

    imgProfile: '/static/images/artist/innocent.jpg',
    imgDesc: '/static/images/artist/innocent_imgDesc.jpg',
    imgDescBit: '/static/images/artist/innocent_imgDescBit.jpg',
    website: '',
    social: [{ twitter: '' }, {github: ''}] ,
    twitterName: '',
    programme: [{programme1: 'algorave'}, {programme2:''}],
    programmeTitle: 'innocent',
    programmeTitle2: '',
    programmeDesc: `A melodic fusion of beats and sounds influenced 
    by electronic dance music and drum’n’bass, live coded in FoxDot.`,
    programmeDesc2: '',
    descriptionDetail:`innocent is a Digital Marketer from Sheffield 
    with a profound love for music. His laptop is his musical instrument, 
    and the only one he has ever learned to play.`,
    embed: [
      { youtube: 'https://www.youtube.com/embed/kW3D7j8tY1U'},
      { soundcloud: ''},
      { bandcamp: ''}
    ],
  },

  {
    name: 'Garlic Hug',

    imgProfile: '/static/images/artist/GarlicHug.jpg',
    imgDesc: '/static/images/artist/GarlicHug_imgDesc.jpg',
    imgDescBit: '/static/images/artist/GarlicHug_imgDescBit.jpg',
    website: '',
    social: [{ twitter: '' }, {github: ''}] ,
    twitterName: '',
    programme: [{programme1: 'algorave'}, {programme2:''}],
    programmeTitle: '',
    programmeTitle2: '',
    programmeDesc: `A new duo collaboration between Alessandro Altavilla 
    and Helen Papaioannou, based in Sheffield, UK. Garlic Hug aims for 
    maximum intensity through a minimal aesthetic. They like frenetic 
    splintered beats, chunky synth riffs, interrupted drones, skronky sax, 
    found tapes and private field recordings. Using a mixture of improvisation 
    and various compositional strategies, ideas appear long enough to 
    draw you in before they are interrupted by musical hiccups.`,
    programmeDesc2: '',
    descriptionDetail:`A new duo collaboration between Alessandro Altavilla 
    and Helen Papaioannou, based in Sheffield, UK. Garlic Hug aims for 
    maximum intensity through a minimal aesthetic. They like frenetic 
    splintered beats, chunky synth riffs, interrupted drones, skronky sax, 
    found tapes and private field recordings. Using a mixture of improvisation 
    and various compositional strategies, ideas appear long enough to draw you 
    in before they are interrupted by musical hiccups.`,
    embed: [
      { youtube: ''},
      { soundcloud: ''},
      { bandcamp: 'https://garlichug.bandcamp.com/releases'}
    ],
  },

  {
    name: 'Akihiro Kubota',

    imgProfile: '/static/images/artist/AkihiroKubota.jpg',
    imgDesc: '/static/images/artist/AkihiroKubota_imgDesc.jpg',
    imgDescBit: '/static/images/artist/AkihiroKubota_imgDescBit.jpg',
    website: 'http://hemokosa.com',
    social: [{ twitter: 'https://twitter.com/hemokosa' }, {github: ''}] ,
    twitterName: '@hemokosa',
    programme: [{programme1: 'algorave'}, {programme2:'toplabmoot'}],
    programmeTitle: 'The Well-Tuned Livecoding Piano',
    programmeTitle2: 'Live Coding and a New Kind of Improvisation',
    programmeDesc: 'Live Coding Improvisation using Tidal-midi and Pianoteq (Physically Modelled Acoustic Piano)',
    programmeDesc2: `The unexplored possibilities of live coding approach will be speculated 
    in comparison with the concept of free (non-idiomatic) improvisation.`,
    descriptionDetail:`Akihiro Kuboto visits from Tama Art University, 
    Tokyo where is a Professor, with pioneering interdisciplinary projects 
    including the launch of the first art satellites into space 
    (<a href="http://artsat.jp/">ARTSAT</a>). 
    His team’s art satellite ARTSAT1:INVADER won the Award of Distinction 
    in the Hybrid Art category at Prix Ars Electronica 2015, and the ARTSAT Project 
    received the 66th Minister of Education Award for Fine Arts (Media Arts Division).  
    He exhibited in 
    <a href="http://space-moere.org/">Space-Moere Project</a> 
    including tele-livecoding performance with stratospheric balloon in collaboration 
    with SIAF Lab. at SIAF (Sapporo International Art Festival) 2017.`,
    embed: [
      { youtube: ''},
      { soundcloud: ''},
      { bandcamp: ''}
    ],
  },

  {
    name: 'Livedog, Inc.',

    imgProfile: '/static/images/artist/LivedogInc.jpg',
    imgDesc: '/static/images/artist/LivedogInc_imgDesc.jpg',
    imgDescBit: '/static/images/artist/LivedogInc_imgDescBit.jpg',
    website: 'http://composerprogrammer.com/',
    social: [{ twitter: '' }, {github: ''}] ,
    twitterName: '',
    programme: [{programme1: 'algorave'}, {programme2:''}],
    programmeTitle: '',
    programmeTitle2: '',
    programmeDesc: 'Generative music will result from an unlikely attempt to prove the Riemann Hypothesis.',
    programmeDesc2: '',
    descriptionDetail:`In the beginning was the word, and the word length was 8 bits, 
    though later much expanded. The word 'livedog' was coined by Anthony Burgess as 
    including both 0x29A and 0x90d. Watch out for further instructions around quarter 
    past nonsense, or in an afterlie.`,
    embed: [
      { youtube: 'https://www.youtube.com/embed/yLytSatUHTs'},
      { soundcloud: 'https://soundcloud.com/sick-lincoln/formula-0'},
      { bandcamp: ''}
    ],
  },

  {
    name: 'Uiae',

    imgProfile: '/static/images/artist/Uiae.jpg',
    imgDesc: '/static/images/artist/Uiae_imgDesc.jpg',
    imgDescBit: '/static/images/artist/Uiae_imgDescBit.jpg',
    website: 'https://uiae.de/',
    social: [{ twitter: 'https://twitter.com/uiae' }, {github: ''}] ,
    twitterName: '@uiae',
    programme: [{programme1: 'algorave'}, {programme2:''}],
    programmeTitle: 'Robot Folk Dance Experience',
    programmeTitle2: '',
    programmeDesc: `The Robot Folk Dance Experience is an improvisation 
    with agents in a two-dimensional space connecting based on proximity. 
    Each type of agent moves in a specific manner and has a specific function. 
    The music emerges between manual configurations of agents and the composed 
    structure dissolving through their inherent movements.`,
    programmeDesc2: '',
    descriptionDetail:`Holger Ballweg is a live coder and programmer living 
    in Newcastle upon Tyne (UK). He is a member of the live coding laptop 
    band Benoît and the Mandelbrots, with whom he performed over 70 concerts 
    in Germany and Europe. In 2012 Benoît and the Mandelbrots received 
    an Honorary Mention at Prix Ars Electronica. They released their first 
    album in 2016. He also occasionally performs in a duo with Shelly Knotts.`,
    embed: [
      { youtube: 'https://www.youtube.com/embed/uzB8_rIoM-Q'},
      { soundcloud: 'https://soundcloud.com/uiae/lui-k'},
      { bandcamp: ''}
    ],
  },

  {
    name: 'co(n)de Zero',

    imgProfile: '/static/images/artist/condeZero.jpg',
    imgDesc: '/static/images/artist/condeZero_imgDesc.jpg',
    imgDescBit: '/static/images/artist/condeZero_imgDescBit.jpg',
    website: 'https://alejandroalbornoz.wordpress.com/conde-zero/',
    social: [{ twitter: '' }, {github: ''}] ,
    twitterName: '',
    programme: [{programme1: 'algorave'}, {programme2:''}],
    programmeTitle: '',
    programmeTitle2: '',
    programmeDesc: 'Textural manipulation of vocal samples, underpinned with minimal glitchy polyrhythms...',
    programmeDesc2: '',
    descriptionDetail:`co(n)de Zero is the Live coding project of Alejandro Albornoz, 
    Chilean composer based in Sheffield. Alejandro compose different types of 
    electronic music, covering electroacoustic (acousmatic and live electronics), 
    techno, idm or post-techno and sort of noise experimental. Within ‘co(n)de Zero’ 
    the styles starts in techno and minimal to look for deconstruct and overlap 
    rhythms and textures with the aim to create a kind of minimal-baroque…`,
    embed: [
      { youtube: 'https://vimeo.com/248011874'},
      { soundcloud: 'https://soundcloud.com/user-555253494/ws-17'},
      { bandcamp: ''}
    ],
  },

  {
    name: 'Dimitris Kyriakoudis',

    imgProfile: '/static/images/artist/DimitrisKyriakoudis.jpg',
    imgDesc: '/static/images/artist/DimitrisKyriakoudis_imgDesc.jpg',
    imgDescBit: '/static/images/artist/DimitrisKyriakoudis_imgDescBit.jpg',
    website: '',
    social: [{ twitter: 'https://twitter.com/InfiniteMonkey9' }, {github: ''}] ,
    twitterName: '@InfiniteMonkey9',
    programme: [{programme1: 'algorave'}, {programme2:'toplabmoot'}],
    programmeTitle: 'lnfiniteMonkeys',
    programmeTitle2: 'TimeLines: Music as (Simple) Mathematical Functions of Time',
    programmeDesc: `lnfiniteMonkeys are at it again, typing their nonsense to no end. 
    They're surfing the big temporal wave, twisting and bending it to their amusement, 
    shaping it into all sorts of funny structures and crashing it back down again. 
    Just a handful of waves, filters, and random numbers is all they have; but they 
    are happy, for all they care to do is play them.`,
    programmeDesc2: `Have you ever wondered what "music is maths" really means? 
    TimeLines is an attempt at answering this question, an approach to live coding 
    music as mathematical functions with one unknown: time itself. Based on Haskell 
    and SuperCollider, TimeLines hijacks synths by controlling all of their parameters 
    over time, using simple (or complicated, if one is so inclined) mathematical 
    equations to determine their value for each and every moment. Made to be used 
    both on stage and in the studio, it enables the composition and performance of 
    arbitrary, reproducible, completely deterministic (yet heavily random-enabled) 
    streams of information, which can be plugged into any sort of sound-making or 
    editing process. In other words, TimeLines is one of the world's most capable 
    and customisable sequencers, powered by mathematics itself. The ideas and concepts 
    described in this talk can be applied to any language and practice 
    (e.g. visuals, animation etc), so come along even if Haskell or music 
    are not your thing.`,
    descriptionDetail:`Dimitris Kyriakoudis is one of lnfiniteMonkeys, aimlessly 
    typing away at a keyboard. He always heard people say that "music is maths", 
    but he was confused by its meaning and so he set out to find an answer for himself. 
    Based in London, he develops and uses TimeLines, a live coding language for expressing 
    music as mathematical functions of time. His practice focuses on live coding 
    information rather than process; a hopeless attempt to stop constantly building his 
    instrument and start playing the damned thing. A minimal setup and a focus on carefully 
    cultivated, homemade randomness makes every performance a unique trip through the 
    infinite spacetime domain of the computational universe.`,
    embed: [
      { youtube: 'https://www.youtube.com/embed/5-T0diyNsdY'},
      { soundcloud: ''},
      { bandcamp: ''}
    ],
  },

  {
    name: 'BIT-PRINT',

    imgProfile: '/static/images/artist/BIT-PRINT.jpg',
    imgDesc: '/static/images/artist/BIT-PRINT_imgDesc.jpg',
    imgDescBit: '/static/images/artist/BIT-PRINT_imgDescBit.jpg',
    website: '',
    social: [{ twitter: 'https://twitter.com/evanraskob' }, {github: 'https://github.com/pixelpusher/liveprinter'}] ,
    twitterName: '@evanraskob',
    programme: [{programme1: 'algorave'}, {programme2:''}],
    programmeTitle: '',
    programmeTitle2: '',
    programmeDesc: `BITLIP (the livecoder) is using LivePrinter 
    to make livecoded music with 3D printers.  LivePrinter is a live, 
    immediate system for combining the design and 3D printing of objects. 
    Livecoding is used to control manufacturing precisely and procedurally 
    with real-time flexibility. It brings improvisation and intuition 
    to the act of making new computational forms, and the playing of 
    strange hardware-based music. A live video feed of 3D printer 
    printing will accompany an audio-visual coding performance that 
    also controls the printer.`,
    programmeDesc2: '',
    descriptionDetail:``,
    embed: [
      { youtube: ''},
      { soundcloud: ''},
      { bandcamp: ''}
    ],
  },

  {
    name: 'Yaxu',

    imgProfile: '/static/images/artist/Yaxu.jpg',
    imgDesc: '/static/images/artist/Yaxu_imgDesc.jpg',
    imgDescBit: '/static/images/artist/Yaxu_imgDescBit.jpg',
    website: 'http://slab.org/',
    social: [{ twitter: 'https://twitter.com/yaxu' }, {github: ''}] ,
    twitterName: '@yaxu',
    programme: [{programme1: 'algorave'}, {programme2:''}],
    programmeTitle: '',
    programmeTitle2: '',
    programmeDesc: 'Bringing it back to basics with from-scratch, broken, live coded, minimal techno.',
    programmeDesc2: '',
    descriptionDetail:`Solo project of Sheffield-based live coder Alex McLean, 
    maker of TidalCycles, and organiser of strange events.. Part of 
    <a href="http://slub.org/">Slub</a>, 
    <a href="http://canute.lurk.org/">Canute</a>, 
    and 
    <a href="http://ccai.lurk.org/">CCAI</a> 
    among others, with long overdue album Spicule coming out any day now on Computer Club.`,
    embed: [
      { youtube: 'https://www.youtube.com/embed/DKtYZw8BHXw'},
      { soundcloud: ''},
      { bandcamp: ''}
    ],
  },

  {
    name: 'Shelly Knotts and Nick Collins',

    imgProfile: '/static/images/artist/ShellyKnotts.jpg',
    imgDesc: '/static/images/artist/ShellyKnotts_imgDesc.jpg',
    imgDescBit: '/static/images/artist/ShellyKnotts_imgDescBit.jpg',
    website: '',
    social: [{ twitter: '' }, {github: ''}] ,
    twitterName: '',
    programme: [{programme1: 'algorave'}, {programme2:''}],
    programmeTitle: 'Experiments in Web Audio Musical Machine Listening',
    programmeTitle2: '',
    programmeDesc: `In which two researchers within a large funded grant* 
    will discuss their experiments so far with Web Audio API based machine 
    listening. They will explain a minimal code starting point for machine 
    listening work in the browser, and demonstrate some more involved 
    experiments in browser based auditory modelling, onset detection, and the like.
    <br/><br/>
    * MIMIC = Musically Intelligent Machines Interacting Creatively, 
    * Joint AHRC funded project between Goldsmiths, Sussex and Durham universities.`,
    programmeDesc2: '',
    descriptionDetail:`Shelly Knotts is a composer, performer and improvisor 
    of live electronic, live coded and network music based in Newcastle upon 
    Tyne, England. She performs internationally, often using Live coding 
    techniques, and a range of styles including Noise, Drone and Algorave.
    Nick Collins is.`,
    embed: [
      { youtube: ''},
      { soundcloud: ''},
      { bandcamp: ''}
    ],
  },
]



export default  ( dataArtists )  