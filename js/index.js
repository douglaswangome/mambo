// Header
const header_welcome_height = document.getElementById('header_welcome').clientHeight;

const scrollFunction = () => {
  let y = window.scrollY;

  if (y >= header_welcome_height) {
    document.getElementById('header').className = 'header active';
  } else {
    document.getElementById('header').className = 'header';
  }
}

window.addEventListener("scroll", scrollFunction);

// Brunch
const brunch_text_height = document.getElementById('brunch-hover-text').clientHeight;
const brunch_element_height = document.getElementById('brunch-hover').clientHeight;
const result_height = brunch_element_height - brunch_text_height;

document.getElementById('brunch-hover').onmouseenter = () => {
  document.getElementById('brunch-hover-text').style.top = `${result_height}px`;
}
document.getElementById('brunch-hover').onmouseleave = () => {
  document.getElementById('brunch-hover-text').style.top = 0;
}

// Lunch
const lunch_text_height = document.getElementById('lunch-hover-text').clientHeight;
const lunch_element_height = document.getElementById('lunch-hover').clientHeight;
const result_lunch_height = lunch_element_height - lunch_text_height;

document.getElementById('lunch-hover').onmouseenter = () => {
  document.getElementById('lunch-hover-text').style.top = `${result_lunch_height}px`;
}
document.getElementById('lunch-hover').onmouseleave = () => {
  document.getElementById('lunch-hover-text').style.top = 0;
}

// Dinner
const dinner_text_height = document.getElementById('dinner-hover-text').clientHeight;
const dinner_element_height = document.getElementById('dinner-hover').clientHeight;
const result_dinner_height = dinner_element_height - dinner_text_height;

document.getElementById('dinner-hover').onmouseenter = () => {
  document.getElementById('dinner-hover-text').style.top = `${result_dinner_height}px`;
}
document.getElementById('dinner-hover').onmouseleave = () => {
  document.getElementById('dinner-hover-text').style.top = 0;
}

// Beverage
const beverage_text_height = document.getElementById('beverage-hover-text').clientHeight;
const beverage_element_height = document.getElementById('beverage-hover').clientHeight;
const result_beverage_height = beverage_element_height - beverage_text_height;

document.getElementById('beverage-hover').onmouseenter = () => {
  document.getElementById('beverage-hover-text').style.top = `${result_beverage_height}px`;
}
document.getElementById('beverage-hover').onmouseleave = () => {
  document.getElementById('beverage-hover-text').style.top = 0;
}

// Cocktails
const cocktails_text_height = document.getElementById('cocktails-hover-text').clientHeight;
const cocktails_element_height = document.getElementById('cocktails-hover').clientHeight;
const result_cocktails_height = cocktails_element_height - cocktails_text_height;

document.getElementById('cocktails-hover').onmouseenter = function () {
  document.getElementById('cocktails-hover-text').style.top = `${result_cocktails_height}px`;
}
document.getElementById('cocktails-hover').onmouseleave = function () {
  document.getElementById('cocktails-hover-text').style.top = 0;
}