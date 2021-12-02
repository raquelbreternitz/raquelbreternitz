//TOGGLE THEME

let toggle = document.querySelector('.toggle-theme');

toggle.addEventListener('click', function(e) {
  e.preventDefault();

  if (document.body.classList.contains('dark-mode')) {
    // Turning the theme off:
    document.body.classList.remove('dark-mode');
    // Reverse logic on the button text, so that users can turn
    // the theme back on:
    //toggle.innerText = 'Turn theme on';
  } else {
    document.body.classList.add('dark-mode');
    //toggle.innerText = 'Turn theme off';
  }
});

//DETECT PREFERENCE
if (window.matchMedia && 
  window.matchMedia('(prefers-color-scheme: dark)').matches) {
document.body.classList.add('dark-mode');
}