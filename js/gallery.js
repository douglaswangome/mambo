document.getElementById('foods').onclick = () => {
  document.getElementById('picture-moments').className = 'moments inactive';
  document.getElementById('picture-foods').className = 'foods';
}

document.getElementById('moments').onclick = () => {
  document.getElementById('picture-moments').className = 'moments';
  document.getElementById('picture-foods').className = 'foods inactive';
}

// Append Images - moments
moments_array = ['aob.jpg', 'aob1.jpg', 'aob2.jpg', 'aob3.jpg'];
moments_array.map((picture) => {
  const img_img = document.createElement('img');
  img_img.src = `../assets/images/${picture}`;
  document.getElementById('picture-moments').append(img_img);
})

// Append Images - foods
foods_array = ['beverages.jpg', 'beverages1.jpg', 'beverages2.jpg', 'brunch.jpg', 'brunch1.jpg', 'brunch3.jpg', 'dinner.jpg', 'lunch1.jpg'];
foods_array.map((picture) => {
  const img_img = document.createElement('img');
  img_img.src = `../assets/images/${picture}`;
  document.getElementById('picture-foods').append(img_img);
})
