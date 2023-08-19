//Plyr player
const videoPlayer = new Plyr(
  "#myPlayer",
  (defaults = {
    title: "Donelfantastic", // Custom media title
    hideControls: true, // Auto hide the controls on playing
    // Learn more on: https://github.com/sampotts/plyr/blob/master/src/js/config/defaults.js
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "mute",
      "volume",
      "fullscreen"
    ]
  })
);

document.addEventListener("DOMContentLoaded", () => {
  const source =
    "https://av-live-cdn.mncnow.id/live/eds/RCTI-DD/sa_dash_vmx/RCTI-DD.mpd";

  const video = document.querySelector("#Pplayer");
  // For options (second argument) see: https://github.com/sampotts/plyr/#options
  const player = new Plyr(video);
  // Expose player so it can be used from the console

  window.player = player;

  // For more Shaka Player options, see: https://github.com/google/shaka-player
  if (shaka.Player.isBrowserSupported()) {
    // Install built-in polyfills
    shaka.polyfill.installAll();
    const shakaInstance = new shaka.Player(video);

    shakaInstance.configure({
      drm: {
        clearKeys: {
          // 'key-id-in-hex': 'key-in-hex',
          "9ba3e153ef8956d6e2b0684fcf74f58f": "dbc28cb5c6426080f984a5b6d436bb30"
        }
      }
    });

    /*
    shakaInstance.configure({
      drm: {
        servers: {
'org.w3.clearkey':'http'
      }
    }
});*/

    /*
    shakaInstance.configure({
      drm: {
        servers: {
          "com.widevine.alpha":
                  "Your License URI",
          "com.microsoft.playready": ""
        },
        clearKeys: {}
          
      }
    });*/
    shakaInstance.load(source);
  } else {
    console.warn("Browser is not supported!");
  }
});

//BITMOVIN PLAYER
var config = {
  key: "c6d7e091-e62e-4bda-819f-99bb13506fba",
  playback: {
    muted: false,
    autoplay: false,
    preferredTech: [
      {
        player: "html5",
        streaming: "Dash"
      },
      {
        player: "html5",
        streaming: "hls"
      },
      {
        player: "html5",
        streaming: "smooth"
      },
      {
        player: "native",
        streaming: "hls"
      },
      {
        player: "native",
        streaming: "progressive"
      }
    ]
  },
  source: {
    progressive:      "https://donelfantastic.github.io/creativemedia/local/mojiID.m3u8",
    //dash: "https://dizf8i52j4sep.cloudfront.net/out/v1/148af6c03e6d48b0a725611fae5ed3a7/index.mpd",
    poster: "https://thumbs.gfycat.com/ComplexAmazingEsok-max-1mb.gif"
  }
};

var player = bitmovin.player("my-player");

player.setup(config).then(
  function (value) {
    // Success
    console.log("Successfully created bitmovin player instance");
  },
  function (reason) {
    // Error!
    console.log("Error while creating bitmovin player instance");
  }
);