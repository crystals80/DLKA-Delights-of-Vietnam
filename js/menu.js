// Menu animation
const trig = document.querySelector('#trigger');
const closer = document.querySelector('#close');

trig.addEventListener('click', openNav);
closer.addEventListener('click', closeNav);

function openNav() {
  document.getElementById("navbar").style.width = "100%";
}

function closeNav() {
  document.getElementById("navbar").style.width = "0%";
}
