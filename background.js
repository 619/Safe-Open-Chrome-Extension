var pluginOn = false;
(function() {

function blur() {
  chrome.tabs.query({}, function(tabs) {
           //loop that shit
           for (var i = 0; i < tabs.length; i++) {
               //push that shit
             chrome.tabs.update(tabs[i].id, {"muted": true});
             chrome.tabs.executeScript(tabs[i].id, {
             code: 'document.body.style.WebkitFilter = ' + '"grayscale('+80+'%) blur('+25+'px)"'
           });
           }
           chrome.browserAction.setIcon({path:"icona32.png"});
       });
}

function unblur() {
  chrome.tabs.query({}, function(tabs) {
           //loop that shit
           for (var o = 0; o < tabs.length; o++) {
               //push that shit
             chrome.tabs.update(tabs[o].id, {"muted": false});
             chrome.tabs.executeScript(tabs[o].id, {
             code: 'document.body.style.WebkitFilter = ' + '"grayscale(0%) blur(0px)"'
           });
           }
           chrome.browserAction.setIcon({path:"iconb32.png"});
       });
}

chrome.browserAction.onClicked.addListener(function(tab) {
          if (pluginOn) {
            pluginOn = false;
            unblur();
          } else {
            pluginOn = true;
            blur();
          }
});

chrome.idle.onStateChanged.addListener(function(state) {
  if (state == "locked") {
  pluginOn = true;
  blur();
}
});

})();
