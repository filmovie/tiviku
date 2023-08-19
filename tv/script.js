'use strict';

var videoPlayer = window.videoPlayer || {};

(function () {  
  var options = {
    autoplay: true, 
    controls: true, 
    muted: false, 
    // fluid: true,
    playbackRates: [1, 1.5, 2, 2.5],
    inactivityTimeout: 0, // 0: user will never be considered inactive
    width: 500
  };
  var url = 'https://s3-us-west-1.amazonaws.com/';
  var queryString = '?path=joepc';  // replace with 'location.search'
  
  var params = {};
  if (queryString) { // parameterize the query string (Credit: https://stackoverflow.com/a/21152762/2213679)
    queryString.substr(1).split('&').forEach(function(item) {
      var s = item.split('='), k = s[0], v = s[1] && decodeURIComponent(s[1]);
      (params[k] = params[k] || []).push(v);
    });  
  }
  
  var baseUrl = url + params['path'] + '/';
  var types = {mp4:'video/mp4',webm:'video/webm', m3u: 'application/x-mpegURL'};

  var vPlaylistMax = 50;   // Look for videos up to Max
  var vPlaylist = [];      // video playlist
  var vExtension = '.mp4'; // extension (assume same for a series)
  var vUrl;                // URL string to be built

  for (var i=1; i <= vPlaylistMax; i++) {
    vUrl = baseUrl+i+vExtension;
    if ( fileExists(vUrl) ) {
      vPlaylist.push({sources: [{src: vUrl, type: types.mp4}]});
    } else { break; } // exit loop on first missing file
  }
  
  function fileExists(url) {
    var http = new XMLHttpRequest();
    // (method,url,async) 
    // 'HEAD' -- same as GET request, but without response body.
    // async:false -- send() does not return until response is received.
    http.open('HEAD',url,false);
    http.send();
    return (http.status==200);    
  }

  var rate = 1; // playback starting rate (1x)
  var player = videojs('playerOne', options);
  
  player.overlay({
    // content: 'Default overlay content',
    debug: false,
    overlays: [{
      content: '<h2>Playing <span id="playlist-current-number">1</span> of ' +vPlaylist.length+ '</h2>', //'The video is playing!',

      start: 'play',
      end: 5,
      align: 'top-left',
      showBackground: true
    }]
  });
  player.ready(function() {
    this.playlist(vPlaylist);
    this.playlist.autoadvance(1); // Autoplay next video (0-second lead)
    this.playlist.repeat(true);   // Allow skipping back to first video
    this.play();
  });

  // Get playback rate, since it doesn't persist from video to video
  player.on('beforeplaylistitem', function() {
    rate = this.playbackRate(); 
  });
  
  // Set playback rate
  player.on('playlistitem', function() {
    var currentNumber = document.getElementById('playlist-current-number');
    currentNumber.innerText = this.playlist.currentItem() + 1;

    this.playbackRate(rate); });

  var buttonComponent = videojs.getComponent('Button');
  
  var prevButton = videojs.extend(buttonComponent, {    
    constructor: function() {
      buttonComponent.apply(this, arguments);
      this.addClass('vjs-icon-previous-item');
      this.controlText('Previous');
    },
    handleClick: function(e) {
      player.playlist.previous();
    }
  });

  var nextButton = videojs.extend(buttonComponent, {    
    constructor: function() {
      buttonComponent.apply(this, arguments);
      this.addClass('vjs-icon-next-item');
      this.controlText('Next');
    },
    handleClick: function(e) {
      player.playlist.next();
      // this.controlText('Next (part 3)');
    }
  });

  videojs.registerComponent('prevButton', prevButton);
  videojs.registerComponent('nextButton', nextButton);

  player.getChild('controlBar').addChild('prevButton', {}, 0);
  player.getChild('controlBar').addChild('nextButton', {}, 2);
})(videoPlayer);


  
  // var vPlaylist = [
  // {sources: [{src: 'https://vjs.zencdn.net/v/oceans.mp4', 
  //             type: types.mp4},
  //            {src: 'https://vjs.zencdn.net/v/oceans.webm', 
  //             type: types.webm }]},
  // {sources: [{src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8', 
  //             type: types.m3u}]},
  // {sources: [{src: 'http://d2zihajmogu5jn.cloudfront.net/big-buck-bunny/master.m3u8',
  //             type: types.m3u}]}];

//   var buttonComponent = videojs.getComponent('Button');
//   var buttons = ['vprevious','vnext'];
//   var buttonObj;
  
//   for (var i=0; i < buttons.length; i++) {
//     var button = buttons[i];
//     buttonObj = videojs.extend(buttonComponent, {    
//       constructor: function() {
//         buttonComponent.apply(this, arguments);
//         this.addClass('icon-' +button);
//         this.controlText(button);
//       },
//       handleClick: function(e) {
//         switch(button) {
//           case 'vprevious': player.playlist.previous(); console.log(button); break;
//           case 'vnext': player.playlist.next(); console.log(button);  break;
//         }
//       }
//     });

//     videojs.registerComponent(button,buttonObj);
//   }
//   player.getChild('controlBar').addChild('vprevious', {},0); 
//   player.getChild('controlBar').addChild('vnext',{},2);