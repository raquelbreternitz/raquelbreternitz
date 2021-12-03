//TOGGLE THEME

let toggle = document.querySelector('.toggle-theme');

toggle.addEventListener('click', function(e) {
  e.preventDefault();

  if (document.body.classList.contains('dark-mode')) {
    // Turning the theme off:
    document.body.classList.remove('dark-mode');
    // Reverse logic on the button text, so that users can turn
    // the theme back on:
    //toggle.innerText = 'lights on';
    document.getElementById("curve-text").textContent = "lights on";
  } else {
    document.body.classList.add('dark-mode');
    //toggle.innerText = 'lights off';
    document.getElementById("curve-text").textContent = "lights off";
  }
});

//DETECT PREFERENCE
if (window.matchMedia && 
  window.matchMedia('(prefers-color-scheme: dark)').matches) {
document.body.classList.add('dark-mode');
}