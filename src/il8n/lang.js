import LocalizedStrings from 'react-localization';
import {cdnBase} from '../const';

export const lang = new LocalizedStrings({
  en_us: {
    langKeys: {
      en_us: 'English (US)'
    },
    interstitial: {
      heading: 'Leaving this Site',
      copy: 'By clicking "continue" you\'ll be leaving this web site and landing on a retail site. Remember, they have different terms and privacy policies. Hope we see you again soon! KIDS, get your parent\'s permission before visiting other sites and NEVER share any personal info about yourself — including your full name, address and phone number and let your parent or guardian handle any transaction.',
      continue: 'Continue',
      cancel: 'Cancel'
    },
    brand: 'Eric J Seaton',
    chooseRegion: 'Language',
    loading: 'Loading',
    select: 'Select',
    clearAll: 'Clear All',
    filters: 'Filters',
    warnings: {
      enableIframes: 'You Must Enable iFrames to view this video'
    },
    helmet: {
      siteTitle: ' | The Portfolio of Eric J Seaton'
    },
    footer: {
      copy: 'Work included was completed at agencies, in house and freelance.'
    },
    home: {
      title: 'Home',
      projects: [
        {
           idprojects:"0",
           title:"Jumanji Web VR Experience",
           tagline:"",
           software:"",
           completedAt: 'Avatar Labs',
           languages:[
              "react",
              "redux",
              "webpack",
              "CSS 3",
              "HTML 5"
           ],
           link:"https://seapatrol.pawpatrol.com/ ",
           longdesc:"",
           images:null,
           videos:`${cdnBase}videos/jumanji.mp4`,
           color:"#14b0d6",
           sessions:""
        },
        {
           idprojects:"0",
           title:"Num Noms",
           tagline:"",
           software:"",
           completedAt: 'Avatar Labs',
           languages:[
              "react",
              "redux",
              "webpack",
              "CSS 3",
              "HTML 5"
           ],
           link:"https://seapatrol.pawpatrol.com/ ",
           longdesc:"",
           images:null,
           videos:`${cdnBase}videos/numnoms.mp4`,
           color:"#14b0d6",
           sessions:""
        },
        {
           idprojects:"0",
           title:"Sea Patrol Contest",
           tagline:"",
           software:"",
           completedAt: 'Spin Master',
           languages:[
              "react",
              "redux",
              "webpack",
              "CSS 3",
              "HTML 5"
           ],
           link:"https://seapatrol.pawpatrol.com/ ",
           longdesc:"",
           images:null,
           videos:`${cdnBase}videos/seapatrol.mp4`,
           color:"#14b0d6",
           sessions:""
        },
        {
           idprojects:"0",
           title:"Flush Force",
           tagline:"",
           software:"",
           completedAt: 'Spin Master',
           languages:[
              "react",
              "redux",
              "webpack",
              "CSS 3",
              "HTML 5"
           ],
           link:"https://www.theflushforce.com/ ",
           longdesc:"",
           images:null,
           videos:`${cdnBase}videos/flushforce.mp4`,
           color:"#14b0d6",
           sessions:""
        },
        {
           idprojects:"0",
           title:"Meccano Max",
           tagline:"",
           software:"",
           completedAt: 'Freelance',
           languages:[
              "react",
              "redux",
              "webpack",
              "CSS 3",
              "HTML 5"
           ],
           link:"https://max.meccano.com/ ",
           longdesc:"",
           images:null,
           videos:`${cdnBase}videos/max.mp4`,
           color:"#14b0d6",
           sessions:""
        },
        {
           idprojects:"0",
           title:"GSNTV: Emogenius",
           tagline:"Test Your Skill",
           software:"Illustrator, Photoshop, After Effects",
           completedAt: 'Avatar Labs',
           languages:[
              "react",
              "redux",
              "webpack",
              "TweenMax",
              "CSS 3",
              "HTML 5"
           ],
           link:"https://www.gsntv.com/games/emogenius-game/ ",
           longdesc:"GSN's emogenious game pits you againts the clock while you try and solve emoji based puzzles. The site was built using react and redux with tweenmax for animations.",
           images:null,
           videos:`${cdnBase}videos/gsn.mp4`,
           color:"#14b0d6",
           sessions:"791,395"
        },
         {
            idprojects:"1",
            title:"Rusty Rivets",
            tagline:"No Config Web Build",
            software:"Illustrator, Photoshop, After Effects",
            completedAt: 'Freelance',
            languages:[
               "react",
               "redux",
               "TweenMax",
               "CSS 3",
               "HTML 5"
            ],
            link:"https://www.rustyrivets.com/ ",
            longdesc:"An adult facing brand site. Rusty Rivets was bootstrapped with create-react-app and is fully localized. The site uses redux to store its product structure.",
            images:null,
            videos:`${cdnBase}videos/rusty.mp4`,
            color:"#f25d01",
            sessions:"791,395"
         },
         {
            idprojects:"2",
            title:"Fox Movies: Seagull Swatter",
            tagline:"Smack those Gulls!",
            software:"Illustrator, Photoshop, After Effects",
            completedAt: 'Avatar Labs',
            languages:[
               "PhaserJS"
            ],
            link:"http://www.foxmovies.com/movies/diary-of-a-wimpy-kid-the-long-haul#seagull-swatter/ ",
            longdesc:"A fun PhaserJS build where you attempt to keep seagulls away from your food before the time runs out.",
            images:null,
            videos:`${cdnBase}videos/seagull.mp4`,
            color:"#ff5a00",
            sessions:"791,395"
         },
         {
            idprojects:"3",
            title:"Air Hogs: Hyper Race",
            tagline:"An intense race through Photoshop, Tweenmax and jQuery.",
            software:"Illustrator, Photoshop, After Effects, 3dsMax",
            completedAt: 'Spin Master',
            languages:[
               "3ds Max",
               "CSS 3",
               "HTML 5",
               "jQuery",
               "MySQL",
               "Photoshop",
               "PHP",
               "TweenMax"
            ],
            link:"http://nolink.com/ ",
            longdesc:"This site was built for an Air Hogs TV campaign. It features a mysql/php driven voting system and tweenmax/timelinemax driven transitions between each section. I used 3dsmax to position and render the models.",
            images:null,
            videos:`${cdnBase}videos/hyperrace.mp4`,
            color:"#520d05",
            sessions:"New"
         },
         {
            idprojects:"4",
            title:"Air Hogs: Connect",
            tagline:"AR Toys are the Future",
            software:"Illustrator, Photoshop, After Effects",
            completedAt: 'Spin Master',
            languages:[
               "CSS 3",
               "HTML 5",
               "Illustrator",
               "Photoshop",
               "jQuery",
               "After Effects"
            ],
            link:"http://connect.airhogs.com/ ",
            longdesc:"Air Hogs Connect was a quick brochure site built which was bootstrapped using yeoman. It features custom css animations as well as a reactive scroller.",
            images:null,
            videos:`${cdnBase}videos/connect.mp4`,
            color:"#faa61a",
            sessions:"791,395"
         },
         {
            idprojects:"5",
            title:"Meccano",
            tagline:"The nuts and bolts of modern web development.",
            software:"Illustrator, Photoshop",
            completedAt: 'Spin Master',
            languages:[
               "Bower",
               "Coffeescript",
               "CSS 3",
               "less",
               "Foundation",
               "Grunt",
               "HTML 5",
               "jQuery",
               "MySQL",
               "node JS",
               "Photoshop"
            ],
            link:"http://meccano.com/ ",
            longdesc:"Meccano was an ambitious project, adopting the Sails MVC to help manage an upcoming large site expansion. The site utilizes bower for package management, grunt for tasks, coffeescript for fun and less for styles.",
            images:null,
            videos:`${cdnBase}videos/meccano.mp4`,
            color:"#ff0000",
            sessions:"New"
         },
         {
            idprojects:"6",
            title:"Kawaii Crush",
            tagline:"Unleasing my cutest Javascript, Illustrator and front-end skills.",
            software:"Illustrator, Photoshop, After Effects",
            completedAt: 'Spin Master',
            languages:[
               "After Effects",
               "CSS 3",
               "HTML 5",
               "Illustrator",
               "jQuery",
               "Photoshop",
               "PHP"
            ],
            link:"http://kawaiicrush.com/ ",
            longdesc:"Kawaii was a blast. For this site I created a full screen side scrolling primary content area with custom built modal boxes to display interior content. I created the background city in Adobe Illustrator and based the look and feel on the already established Kawaii World. I used After Effects to create the youtube bumpers for the webisodes. With the help of the team at Spin Master we put together the character creator and the products section of the site.",
            images:null,
            videos:`${cdnBase}videos/kawaii.mp4`,
            color:"#e63d9c",
            sessions:"464,307"
         },
         {
            idprojects:"7",
            title:"Zoomer Dino",
            tagline:"Exploring 3d forests with Vue and adventures in Angular.",
            software:"Illustrator, Photoshop, Vue",
            completedAt: 'Spin Master',
            languages:[
               "Angular",
               "CSS 3",
               "Foundation",
               "less",
               "HTML 5",
               "Illustrator",
               "jQuery",
               "MySQL",
               "PhaserJS",
               "Photoshop",
               "PHP",
               "Vue"
            ],
            link:"http://www.zoomerdino.com/",
            longdesc:"Zoomer Dino is a robotic Dinosaur that you attempt to train yourself. I say attempt because Dino really does have a mind of his own. The site itself was a quick build on the angular framework with a standards based localization model. The home screen jungle was created and rendered in Vue. ",
            images:null,
            videos:`${cdnBase}videos/dino.mp4`,
            color:"#21510d",
            sessions:"340,170"
         },
         {
            idprojects:"8",
            title:"Chatsters",
            tagline:"How to apply your makeup using jQuery.",
            software:"Illustrator, Photoshop",
            completedAt: 'Spin Master',
            languages:[
               "Angular",
               "CSS 3",
               "HTML 5",
               "Illustrator",
               "jQuery",
               "Photoshop",
               "PHP"
            ],
            link:"http://www.chatsters.com/",
            longdesc:"Gabby is your little girls best friend. With a focus on interactive play gabby will recognize her accessories as well as chat with you through the Chatsters app. The site was built on the angular framework and features Phaser driven games, jquery based sprite animations and a simple products section.",
            images:null,
            videos:`${cdnBase}videos/chatsters.mp4`,
            color:"#ff00ba",
            sessions:"347,313"
         },
         {
            idprojects:"9",
            title:"Flutterbye",
            tagline:"Building the 3d dream bedroom for a little girls fantasy realm.",
            software:"Illustrator, Photoshop, 3ds Max, Vray",
            completedAt: 'Spin Master',
            languages:[
               "3ds Max",
               "Angular",
               "CSS 3",
               "HTML 5",
               "Illustrator",
               "jQuery",
               "Photoshop",
               "PHP",
               "Vray"
            ],
            link:"http://www.flutterbye.com/",
            longdesc:"Flutterbye is a girls brand which is enshrouded in mystery. The magic is real, you just have to find it. The site was modeled in 3ds Max using both purchased and created assets and was rendered in V-Ray 2.0. The site was built using Angular and PHP. ",
            images:null,
            videos:`${cdnBase}videos/flutterbye.mp4`,
            color:"#ad1ac3",
            sessions:"475,533"
         },
         {
            idprojects:"10",
            title:"Ionix - Pokémon",
            tagline:"Fun with Pokémon and TweenMax.",
            software:"Illustrator, Photoshop",
            completedAt: 'Spin Master',
            languages:[
               "CSS 3",
               "HTML 5",
               "jQuery",
               "Photoshop",
               "PHP",
               "TweenMax"
            ],
            link:"http://pokemon.ionixbricks.com/ ",
            longdesc:"The Pokemon Ionix site is a microsite used to show the products for the Pokemon line of Ionix toys. ",
            images:null,
            videos:`${cdnBase}videos/ionix-pokemon.mp4`,
            color:"#18a8fb",
            sessions:"36,098"
         },
         {
            idprojects:"11",
            title:"Spin Master",
            tagline:"Pulling sites out of flash and into RWD.",
            software:"Illustrator, Photoshop",
            completedAt: 'Spin Master',
            languages:[
               "CSS 3",
               "HTML 5",
               "Illustrator",
               "jQuery",
               "MySQL",
               "Photoshop",
               "PHP"
            ],
            link:"http://www.spinmaster.com/ ",
            longdesc:"The main home for all things Spin Master. This site is mostly a content display piece and utlizes a json feed from Oracle ATG to drive its products section and a simple MySQL database to drive the videos section. ",
            images:null,
            videos:`${cdnBase}videos/spinmaster.mp4`,
            color:"#0a4466",
            sessions:"2,060,754"
         },
         {
            idprojects:"12",
            title:"What the Face",
            tagline:"A simple, quick and concise build.",
            software:"Illustrator, Photoshop",
            completedAt: 'Spin Master',
            languages:[
               "CSS 3",
               "HTML 5",
               "jQuery",
               "Photoshop",
               "PHP"
            ],
            link:"http://www.whatthefacegame.com/ ",
            longdesc:"What the face is an adult oriented card game. The site is a simple PHP build and features a custom card creator which allows for the upload and resize of images.",
            images:null,
            videos:`${cdnBase}videos/wtf.mp4`,
            color:"#cd0505",
            sessions:"168,791"
         },
         {
            idprojects:"13",
            title:"Battle of the Sexes",
            tagline:"A custom built php driven quiz engine rates your knowledge of the opposite sex.",
            software:"Illustrator, Photoshop",
            completedAt: 'Spin Master',
            languages:[
               "CSS 3",
               "HTML 5",
               "Illustrator",
               "jQuery",
               "MySQL",
               "Photoshop",
               "PHP"
            ],
            link:"http://battleofthesexes.com/ ",
            longdesc:"Battle of the Sexes is a board game for adults where each sex tries to outdo the other by correctly answering questions about the other gender. The site was built upon PHP with a MySQL database. ",
            images:null,
            videos:`${cdnBase}videos/battleofthesexes.mp4`,
            color:"#323232",
            sessions:"230,233"
         },
         {
            idprojects:"14",
            title:"Sick Bricks",
            tagline:"Combining bricks and discovering characters with PHP and MySQL.",
            software:"Illustrator, Photoshop, Premeire",
            completedAt: 'Spin Master',
            languages:[
               "CSS 3",
               "HTML 5",
               "Illustrator",
               "jQuery",
               "MySQL",
               "Photoshop",
               "PHP",
               "Premeire",
               "TweenMax"
            ],
            link:"http://sickbricks.com/ ",
            longdesc:"An extremely fun build focusing on clean graphics and engaging homepage videos. The site contains a custom built ajax driven character combiner which interfaces with an Oracle ATG based data feed and a complimentary MySQL database to complete the combinations. The site is also fully localized.",
            images:null,
            videos:`${cdnBase}videos/sickbricks.mp4`,
            color:"#3c78e5",
            sessions:"226,492"
         },
         {
            idprojects:"15",
            title:"Star Wars: Air Hogs",
            tagline:"Fandom through 3d and rapid web development.",
            software:"Illustrator, Photoshop, 3dsMax",
            completedAt: 'Spin Master',
            languages:[
               "3ds Max",
               "Bower",
               "CSS 3",
               "Foundation",
               "HTML 5",
               "Illustrator",
               "jQuery",
               "less",
               "Photoshop",
               "PHP",
               "Vray"
            ],
            link:"http://starwars.airhogs.com/ ",
            longdesc:"I let my inner Star Wars nerd out for this one. Using some amazing assets supplied by the Air Hogs team I modeled and rendered a nice platform in 3dsmax and finished it up in photoshop. The site itself is a simple flat building using Zurb's Foundation as a base and animations with jQuery. The front-end for this site was built in a single day (ftw).",
            images:null,
            videos:`${cdnBase}videos/starwarsairhogs.mp4`,
            color:"#000000",
            sessions:"New"
         },
         {
            idprojects:"16",
            title:"Star Wars: Legendary Yoda",
            tagline:"Bootstrap speed with a little dash of javascript.",
            software:"Illustrator, Photoshop, 3dsMax",
            completedAt: 'Spin Master',
            languages:[
               "Bootstrap",
               "CSS 3",
               "HTML 5",
               "jQuery",
               "Photoshop",
               "PHP"
            ],
            link:"http://legendaryyoda.com/ ",
            longdesc:"This was a very basic product site for the Legendary Yoda collectible. It uses bootstrap as a base and features some simple jQuery animations.",
            images:null,
            videos:`${cdnBase}videos/legendaryyoda.mp4`,
            color:"#1f4e06",
            sessions:"New"
         },
         {
            idprojects:"17",
            title:"Logo Party",
            tagline:"Interactive video based quiz engine with javascript.",
            software:"Illustrator, Photoshop, 3dsMax",
            completedAt: 'Spin Master',
            languages:[
               "After Effects",
               "CSS 3",
               "Illustrator",
               "jQuery",
               "MySQL",
               "Photoshop",
               "PHP"
            ],
            link:"http://logoparty.com/ ",
            longdesc:"Logo Party was built as a quiz site and uses php and javascript as a quiz engine to allow users to interact and answer questions based on the video currently playing. All responses are timed and result in more points the quicker they answer.",
            images:null,
            videos:`${cdnBase}videos/logoparty.mp4`,
            color:"#1c3791",
            sessions:"215,792"
         },
         {
            idprojects:"18",
            title:"Tenkai Knights",
            tagline:"Building a side scroller from scratch using jQuery.",
            software:"Illustrator, Photoshop, 3dsMax",
            completedAt: 'Spin Master',
            languages:[
               "After Effects",
               "CSS 3",
               "Flash",
               "HTML 5",
               "Illustrator",
               "jQuery",
               "Photoshop",
               "PHP",
               "Premeire"
            ],
            link:"http://logoparty.com/ ",
            longdesc:"Tenkai Knights is a boys construction brand featuring shapeshifting bricks. The site was built in PHP and relies heavily on jquery for content loading and navigation. The site features a custom built side scroller navigation written entirely in javascript. The 3d renders and animations were completed by C2C Studios. After Effects was used to create the transformation simulator on the site. JW Player cue points drive the interactive instruction pages. ",
            images:null,
            videos:`${cdnBase}videos/tenkaiknights.mp4`,
            color:"#222222",
            sessions:"791,395"
         },
         {
            idprojects:"19",
            title:"Spin-World",
            tagline:"Adventures in Zend and Extensis Portfolio.",
            software:"Illustrator, Photoshop, 3dsMax",
            completedAt: 'Spin Master',
            languages:[
               "CSS 3",
               "HTML 5",
               "jQuery",
               "MySQL",
               "Photoshop",
               "PHP",
               "Zend Framework"
            ],
            link:"http://spin-world.com/ ",
            longdesc:"Spin-World is a portal site for retailers and distributors to download creative assets from our Digital Asset Management system. The site was built in PHP and uses Zend as a framework.",
            images:null,
            videos:`${cdnBase}videos/spinworld.mp4`,
            color:"#023fb8",
            sessions:"791,395"
         },
         {
            idprojects:"20",
            title:"Air Hogs: Vectron in Space",
            tagline:"Scroll your way into space with an interactive timeline.",
            software:"Illustrator, Photoshop, 3dsMax",
            completedAt: 'Spin Master',
            languages:[
               "3ds Max",
               "CSS 3",
               "HTML 5",
               "Illustrator",
               "jQuery",
               "Photoshop",
               "PHP"
            ],
            link:"http://vectron.airhogs.com/ ",
            longdesc:"Vectron in Space was built for an Air Hogs ad campaign and features a scrollable timeline as well as a small product rotator for a 360 image rendered in 3dsmax.",
            images:null,
            videos:`${cdnBase}videos/vectroninspace.mp4`,
            color:"#9bbc51",
            sessions:"791,395"
         }
      ]
    },
    support: {
      title: 'Support',
      subTitle: 'Support'
    },
    toys: {
      title: 'Toys',
      subTitle: 'Toys',
      learn: 'learn',
      more: 'more'
    },
    toy: {
      title: 'Toy',
      subTitle: 'Toy',
      backToToys: 'Back to Toys',
      features: 'Features',
      image: 'Image',
      contents: 'Contents',
      whereToBuy: 'Where to Buy',
      instructions: 'Instructions',
      videoInstructions: 'Video Instructions',
      buyNow: 'Buy Now',
      retailers: 'Retailers'
    },
    videos: {
      title: 'Videos',
      subTitle: 'Videos',
      playVideo: 'Play Video',
      defaultVideoIndex: 0,
      videoList: [
        {
          title:'Flush Force How to',
          desc:'Learn how to reveal your flushies!',
          video:`${cdnBase}videos/ff_howto.mp4`,
          type: 'default',
          poster: `${cdnBase}video_thumbs/ff_howto.jpg`
        },
        {
          title:'Episode 1: It Came From the Toilet',
          desc:'In the first part of this gross series flush with toilet humor, Croco Bile, Flippy Blowhole and Dis Pair poop…I mean pop…out of a toilet. I know, this sounds like the start of a bad joke. LOL! But really, they do. Emerging from the sewers into this strange new world, the trio meets a new friend who helps them to make sense of their new surroundings, a weird, smelly place called Flushville. But will this be the place that they can finally call home?',
          video:`${cdnBase}videos/webisode_1.mp4`,
          type: 'default',
          poster: `${cdnBase}video_thumbs/webisode_1.jpg`
        }
      ]
    },
    whereToBuy: {
      title: 'Where to Buy',
      subTitle: 'Where to Buy',
      retailers: [
        {
          title: 'Toys R Us',
          img: `${cdnBase}retailers/tru.png`,
          href: 'http://www.toysrus.com/search/index.jsp?kwCatId=&kw=rusty%20rivets&keywords=rusty%20rivets&origkw=rusty+rivets&sr=1&ff=Taxonomy&fg=Category&fd=&fv=2254197'
        }
      ]
    },
    nomatch: {
      title: 'Page Not Found'
    },
    privacy: {
      title: 'Privacy Policy',
      subTitle: 'Privacy Policy'
    },
    terms: {
      title: 'Terms of Service',
      subTitle: 'Terms of Service'
    }
  },
});
