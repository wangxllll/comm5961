// storymap_data can be an URL or a Javascript object
//var storymap_data = '//media.knightlab.com/StoryMapJS/demo/demo.json';

var storymap_data = {

  storymap: {
    slides: [{
      type: "overview",
      date: "1963-2017",
      text: {
        headline: "Hannah's Journey",
        text: "<p>Welcome to Hannah's journey map!</p>"
      },
      media: {
        url: "https://www.thedesertreview.com/wp-content/uploads/2017/07/on-the-road-again.png",
        credit: "On the road",
        caption: "Journey"
      }
    }, {
      date: "2005",
      text: {
        headline: "NAN YANG",
        text: "<p>Located in the southeast of Henan province, Nan Yang is my hometown.</p>"
      },
      location: {
        name: "Nan Yang",
        icon: "https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=94e4bd5f0bb30f24319aeb01f895d192/8601a18b87d6277f714224062c381f30e924fcb8.jpg",
        lat: 33.01,
        lon: 112.53,
        zoom: 16,
        line: true
      },
      media: {
        url: "https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=94e4bd5f0bb30f24319aeb01f895d192/8601a18b87d6277f714224062c381f30e924fcb8.jpg",
        type: 		"image",
        credit: "My hometown",
        caption: "NAN YANG."
      }
     }, 
     {
      date: "1965",
      text: {
        headline: "CHANG CHUN",
        text: "<p>I went to Chang chun for my undergraduate study. Chang chun is pretty cold in winter, snowing a lot. I missed the cool wind there after I came to Hong Kong.</p> "
      },
      location: {
        name: "Chang Chun",
        lat: 43.88,
        lon: 125.35,
        zoom: 16,
        line: true
      },
      media: {
        url: "http://pic.goytrip.com//picture/tour/201701/13a97be9-a164-4c49-9af3-8b8147f2cbea.jpg",
        credit: "Chang Chun",
        caption: "Chang Chun."
      }
    
          
    },
        {
      date: "1965",
      text: {
        headline: "BEI JING",
        text: "<p>I did my first internship in CCTV (China Central Televation) in Bei Jing, from Which I learned a lot.</p> "
      },
      location: {
        name: "Bei Jing",
        lat: 39.92,
        lon: 116.46,
        zoom: 16,
        line: true
      },
      media: {
        url: "https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D400/sign=a8ae5baa5dfbb2fb342b59127f4b2043/3bf33a87e950352a371c76ff5b43fbf2b3118bcc.jpg",
        credit: "Bei Jing",
        caption: "Bei Jing."
      }
    
         
    },
        {
      date: "1965",
      text: {
        headline: "BIRMINGHAM",
        text: "<p>During the summer vacation in 2016, I took part in a summer school organized by Birmingham University.</p> "
      },
      location: {
        name: "Birmingham",
        lat: 52.3,
        lon: 1.5,
        zoom: 16,
        line: true
      },
      media: {
        url: "http://cdn.bangli.uk/images/201505/p11157_1.jpg",
        credit: "Birmingham University",
        caption: "Birmingham University."
      }

    },
        {
      date: "1965",
      text: {
        headline: "HONG KONG",
        text: "<p>Now I am in Hong Kong, pursuing my master degree of science in new media in Chinese University of Hong Kong! </p> "
      },
      location: {
        name: "Chinese University of Hong Kong",
        lat: 22.15,
        lon: 114.15,
        zoom: 16,
        line: true
      },
      media: {
        url: "http://pic.bkcimg.com/uploads/image/201709/12/1505244354145067.jpg",
        credit: "Chinese University of Hong Kong",
        caption: "Chinese University of Hong Kong."
      }


    },
     ]
  }
}

// certain settings must be passed within a separate options object
var storymap_options = {
  language: 'en', // required; two-letter ISO language code
  map_type: 'osm:standard',          // required
  // map_type: 'zoomify',
  map_as_image: false, // required
  calculate_zoom: true,
  map_subdomains: '01234', // optional
};

var storymap = new VCO.StoryMap('mapdiv', storymap_data, storymap_options);
window.onresize = function(event) {
  storymap.updateDisplay(); // this isn't automatic
}