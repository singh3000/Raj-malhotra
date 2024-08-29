// Disable right-click context menu
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

// Disable specific keyboard shortcuts for screenshots and copy actions
document.addEventListener('keydown', function(e) {
  if (e.key === 'PrintScreen' || (e.ctrlKey && (e.key === 'c' || e.key === 'u' || e.key === 's'))) {
    alert('Screenshots and copying content are not allowed on this site.');
    e.preventDefault();
  }
});

// Obscure content when the page loses focus
document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    document.body.classList.add('obscured');
  } else {
    document.body.classList.remove('obscured');
  }
});

// Blur content when the app goes to the background
document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    document.body.classList.add('blurred');
  } else {
    document.body.classList.remove('blurred');
  }
});
