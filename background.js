//Copyright 2020 Bobby Zhang. All rights reserved.
//List of domains from https://github.com/Bon-Appetit/porn-domains
//MIT License for list of domains: {

//Copyright (c) 2018 Bon appétit

//Permission is hereby granted, free of charge, to any person obtaining a copy
//of this software and associated documentation files (the "Software"), to deal
//in the Software without restriction, including without limitation the rights
//to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//copies of the Software, and to permit persons to whom the Software is
//furnished to do so, subject to the following conditions:

//The above copyright notice and this permission notice shall be included in all
//copies or substantial portions of the Software.

//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//SOFTWARE.
// };
var pluginOn = false
(function() {

function blur() {
  chrome.tabs.query({}, function(tabs) {
           //loop that shit
           for (x in tabs) {
               //push that shit
             chrome.tabs.update(x.tabId, {"muted": true});
             chrome.tabs.executeScript({
             code: 'document.body.style.WebkitFilter = ' + '"grayscale('+80+'%) blur('+25+'px)"'
             });
           }
           chrome.browserAction.setIcon({path:"iconb48.png"});
       });
}

function unblur() {
  chrome.tabs.query({}, function(tabs) {
           //loop that shit
           for (x in tabs) {
               //push that shit
             chrome.tabs.update(x.tabId, {"muted": false});
             chrome.tabs.executeScript({
             code: 'document.body.style.WebkitFilter = ' + '"grayscale(0%) blur(0px)"'
             });
           }
           chrome.browserAction.setIcon({path:"icona48.png"});
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
//wtf? get all windows and get active tabs from them!
chrome.idle.onStateChanged.addListener(function(state) {
  pluginOn = true;
  blur();
});

})();
