// Change the second argument to your options:
// https://github.com/sampotts/plyr/#options
          var player = new Plyr('.container video', {
            muted: false,
            volume: 1,
            controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
          });