chrome.app.runtime.onLaunched.addListener(function() {
  // Center window on screen.
  chrome.app.window.create('build.html', {
    'bounds': {
      'width': 250,
      'height': 150
    },
    'resizable': false,
    'frame': 'none'
  });
});

document.addEventListener('readystatechange', function(e) {
  console.log('Ready state fired.');
}, false);
