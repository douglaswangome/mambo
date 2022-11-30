const moment_images = ['aob1.jpg', 'aob2.jpg', 'aob3.jpg']

moment_images.map((image) => {
    const image_container = document.createElement('img');
    image_container.src = `../assets/images/${image}`;
    document.getElementById('moments').append(image_container);
})

const foods_images = ['dinner.jpg', 'lunch1.jpg', 'lunch2.jpg', 'aob4.jpg']

foods_images.map((image) => {
    const image_container = document.createElement('img');
    image_container.src = `../assets/images/${image}`;
    document.getElementById('foods').append(image_container);
})

document.getElementById('gallery-foods').onclick = () => {
    document.getElementById('foods').className = 'foods active';
    document.getElementById('moments').className = 'moments inactive';
}

document.getElementById('gallery-moments').onclick = () => {
    document.getElementById('moments').className = 'moments active';
    document.getElementById('foods').className = 'foods inactive';
}