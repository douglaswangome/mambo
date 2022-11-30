// Brunch
const brunch_text_height = document.getElementById('brunch-hover-text').clientHeight;
const brunch_element_height = document.getElementById('brunch-hover').clientHeight;
const result_height = brunch_element_height - brunch_text_height;

document.getElementById('brunch-hover').onmouseenter = function () {
  document.getElementById('brunch-hover-text').style.top = `${result_height}px`;
}
document.getElementById('brunch-hover').onmouseleave = function () {
  document.getElementById('brunch-hover-text').style.top = 0;
}

// Lunch
const lunch_text_height = document.getElementById('lunch-hover-text').clientHeight;
const lunch_element_height = document.getElementById('lunch-hover').clientHeight;
const result_lunch_height = lunch_element_height - lunch_text_height;

document.getElementById('lunch-hover').onmouseenter = function () {
  document.getElementById('lunch-hover-text').style.top = `${result_lunch_height}px`;
}
document.getElementById('lunch-hover').onmouseleave = function () {
  document.getElementById('lunch-hover-text').style.top = 0;
}

// Dinner
const dinner_text_height = document.getElementById('dinner-hover-text').clientHeight;
const dinner_element_height = document.getElementById('dinner-hover').clientHeight;
const result_dinner_height = dinner_element_height - dinner_text_height;

document.getElementById('dinner-hover').onmouseenter = function () {
  document.getElementById('dinner-hover-text').style.top = `${result_dinner_height}px`;
}
document.getElementById('dinner-hover').onmouseleave = function () {
  document.getElementById('dinner-hover-text').style.top = 0;
}

// Beverage
const beverage_text_height = document.getElementById('beverage-hover-text').clientHeight;
const beverage_element_height = document.getElementById('beverage-hover').clientHeight;
const result_beverage_height = beverage_element_height - beverage_text_height;

document.getElementById('beverage-hover').onmouseenter = function () {
  document.getElementById('beverage-hover-text').style.top = `${result_beverage_height}px`;
}
document.getElementById('beverage-hover').onmouseleave = function () {
  document.getElementById('beverage-hover-text').style.top = 0;
}

// Drinks
const drinks_text_height = document.getElementById('drinks-hover-text').clientHeight;
const drinks_element_height = document.getElementById('drinks-hover').clientHeight;
const result_drinks_height = drinks_element_height - drinks_text_height;

document.getElementById('drinks-hover').onmouseenter = function () {
  document.getElementById('drinks-hover-text').style.top = `${result_drinks_height}px`;
}
document.getElementById('drinks-hover').onmouseleave = function () {
  document.getElementById('drinks-hover-text').style.top = 0;
}