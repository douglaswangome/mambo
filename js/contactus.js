// Header
let staggered = false;
const menu_icon = document.getElementById('menu-icon').onclick = () => {
  staggered = !staggered;
  if (!staggered) {
    document.getElementById('menu-icon').className = 'fas fa-bars';
    document.getElementById('links').className = 'links active';
  } else {
    document.getElementById('menu-icon').className = 'fas fa-bars-staggered';
    document.getElementById('links').className = 'links';
  }
}