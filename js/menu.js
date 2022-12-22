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

// Breakfast
const food_items = {
  0: { desc: 'Tomatoes, eggs, potatoes, salami and toasted bread', title: 'Mambo Breakfast', price: 500 },
  1: { desc: 'Granola, youghurt and fruit salad', title: 'Mambo Wellness', price: 450 },
  2: { desc: '', title: 'Eggs & Toast', price: 150 },
  3: { desc: 'Baked beans, sausage, 2 eggs, bacon and toasted bread', title: 'English Breakfast', price: 500 },
  4: { desc: 'Served with fruit salad and maple syrup', title: 'Pancakes', price: 400 },
  5: { desc: 'Mbaazi, viazi karai, mahamri, 2 eggs', title: 'Swahili Breakfast', price: 500 },
  6: { desc: '', title: 'Spanish Omelette', price: 200 },
  7: { desc: '', title: 'French Toast', price: 200 },
};

const addBreakfastItems = () => {
  if (document.getElementById('food-content') != null) {
    document.getElementById('main-menu').removeChild(document.getElementById('food-content'));
  }

  const food_content = document.createElement('div');
  food_content.className = 'food_content';
  food_content.id = 'food-content';

  for (let index in food_items) {
    const row = document.createElement('div');
    row.className = 'row';

    const row_food = document.createElement('div');
    row_food.className = 'row_food';

    const row_food_span = document.createElement('span');
    row_food_span.innerHTML = `${food_items[index].title}`;

    const row_desc_span = document.createElement('span');
    row_desc_span.className = 'desc';
    if (food_items[index].desc == "") {
      row_desc_span.innerHTML = "";
    } else {
      row_desc_span.innerHTML = ` (${food_items[index].desc})`;
    }

    row_food.appendChild(row_food_span);
    row_food.appendChild(row_desc_span);
    
    const row_price = document.createElement('div');
    row_price.className = 'row_price';
    
    const row_price_span = document.createElement('span');
    row_price_span.innerHTML = `Ksh. ${food_items[index].price}`;
    row_price.appendChild(row_price_span);

    row.appendChild(row_food);
    row.appendChild(row_price);
  
    document.getElementById('main-menu').appendChild(food_content).append(row);
  }

  // Make side-menu height and main-menu height similar
  const menu_height = document.getElementById('food-content').clientHeight;
  document.getElementById('side-menu').style.maxHeight = `${menu_height}px`;
}

addBreakfastItems();

document.getElementById('breakfast').onclick = () => {
  document.getElementById('breakfast').className = 'active';
  document.getElementById('lunch').className = '';
  document.getElementById('dinner').className = '';
  document.getElementById('beverages').className = '';
  document.getElementById('drinks').className = '';

  addBreakfastItems();
}

// Lunch
const addLunchItems = () => {
  document.getElementById('main-menu').removeChild(document.getElementById('food-content'));

  const section = {
    0: { desc: '', title: 'Bites' },
    1: { desc: 'All burgers are served with chips or salad', title: 'Burgers' },
    2: { desc: 'All sandwiches are served with chips or fresh garden salad', title: 'Sandwiches'},
    3: { desc: '', title: 'Pizza'},
  }

  const food_content = document.createElement('div');
  food_content.className = 'food_content';
  food_content.id = 'food-content';

  document.getElementById('main-menu').appendChild(food_content);

  for (let section_keys in section) {
    const lunch = document.createElement('div');
    lunch.className = `lunch_${section[section_keys].title}`.toLowerCase() + ' lunch_item';
    lunch.id = `lunch-${section[section_keys].title}`.toLowerCase();

    const lunch_span_title = document.createElement('span');
    lunch_span_title.className = 'span_title';
    lunch_span_title.innerHTML = `${section[section_keys].title}`;

    lunch.appendChild(lunch_span_title);

    if (section[section_keys].desc != "") {
      const lunch_span_desc = document.createElement('span');
      lunch_span_desc.className = 'span_desc';
      lunch_span_desc.innerHTML = `${section[section_keys].desc}`;
      lunch.appendChild(lunch_span_desc);
    }

    document.getElementById('food-content').appendChild(lunch);

    const lunch_items = {
      0: { desc: 'Served with fries and chutney', title: 'Tandoori Chicken Skewers', price: 500, section: 'bites' },
      1: { desc: 'Served with chips and tartar sauce', title: 'Fish Fingers', price: 450, section: 'bites' },
      2: { desc: '', title: 'Shawarma with Chips', price: 500, section: 'bites' },
      3: { desc: '', title: 'Shawarma', price: 400, section: 'bites' },
      4: { desc: '2 pcs', title: 'Cheeky chicken', price: 300, section: 'bites' },
      5: { desc: '2 pcs', title: 'Drumsticks with Fries', price: 400, section: 'bites' },
      6: { desc: 'with Chips', title: 'Eggslut', price: 450, section: 'bites' },
      7: { desc: 'without Chips', title: 'Eggslut', price: 400, section: 'bites' },
      8: { desc: '', title: 'Beef Burger', price: 500, section: 'burgers' },
      9: { desc: '', title: 'Beef Cheese Burger', price: 550, section: 'burgers' },
      10: { desc: '', title: 'Chicken Burger', price: 500, section: 'burgers' },
      11: { desc: '', title: 'Chicken Cheese Burger', price: 550, section: 'burgers' },
      12: { desc: '', title: 'Chicken Sandwich', price: 500, section: 'sandwiches' },
      13: { desc: '', title: 'Beef Sandwich', price: 500, section: 'sandwiches' },
      14: { desc: '', title: 'Vegeterian Sandwich', price: 400, section: 'sandwiches' },
      15: { desc: '', title: 'Cheese tomato and basil', price: 500, section: 'sandwiches' },
      16: { desc: 'Halal bacon, pineapple and onions', title: 'Hawaiian Pizza', price: 700, section: 'pizza' },
      17: { desc: 'Tomato & Cheese', title: 'Margarita Pizza', price: 700, section: 'pizza' },
      18: { desc: 'Beef & Onions', title: 'Nyama Choma Pizza', price: 700, section: 'pizza' },
      19: { desc: 'Chicken & Onions', title: 'Chicken Pizza', price: 700, section: 'pizza' },
      20: { desc: '', title: 'Vegeterian Pizza', price: 600, section: 'pizza' }, 
    }

    for (let lunch_keys in lunch_items) {
      const row = document.createElement('div');
      row.className = 'row';

      const row_food = document.createElement('div');
      row_food.className = 'row_food';

      const row_food_span = document.createElement('span');
      row_food_span.innerHTML = `${lunch_items[lunch_keys].title}`;

      const row_desc_span = document.createElement('span');
      row_desc_span.className = 'desc';
      if (lunch_items[lunch_keys].desc == "") {
        row_desc_span.innerHTML = "";
      } else {
        row_desc_span.innerHTML = ` (${lunch_items[lunch_keys].desc})`;
      }

      row_food.appendChild(row_food_span);
      row_food.appendChild(row_desc_span);
      
      const row_price = document.createElement('div');
      row_price.className = 'row_price';
      
      const row_price_span = document.createElement('span');
      row_price_span.innerHTML = `Ksh. ${lunch_items[lunch_keys].price}`;
      row_price.appendChild(row_price_span);

      row.appendChild(row_food);
      row.appendChild(row_price);
    
      if (`${section[section_keys].title}`.toLowerCase() == `${lunch_items[lunch_keys].section}`.toLowerCase()) {
        document.getElementById(`lunch-${section[section_keys].title}`.toLowerCase()).append(row);
      }
    }
  }

  // Make side-menu height and main-menu height similar
  const menu_height = document.getElementById('food-content').clientHeight;
  document.getElementById('side-menu').style.maxHeight = `${menu_height}px`;
}

document.getElementById('lunch').onclick = () => {
  document.getElementById('breakfast').className = '';
  document.getElementById('lunch').className = 'active';
  document.getElementById('dinner').className = '';
  document.getElementById('beverages').className = '';
  document.getElementById('drinks').className = '';

  addLunchItems();
}

// Dinner
const addDinnerItems = () => {
  document.getElementById('main-menu').removeChild(document.getElementById('food-content'));

  const section = {
    0: { desc: 'All main dishes are served with either rice, fries, mashed potatoes and steamed vegetables', title: 'Main Dishes' },
    1: { desc: 'Served with either chapati or rice', title: 'Curries' },
    2: { desc: 'Penne or linguini', title: 'Pasta'},
  }

  const food_content = document.createElement('div');
  food_content.className = 'food_content';
  food_content.id = 'food-content';

  document.getElementById('main-menu').appendChild(food_content);

  for (let section_keys in section) {
    const dinner = document.createElement('div');
    dinner.className = `dinner_${section[section_keys].title}`.toLowerCase() + ' dinner_item';
    dinner.id = `dinner-${section[section_keys].title}`.toLowerCase();

    const dinner_span_title = document.createElement('span');
    dinner_span_title.className = 'span_title';
    dinner_span_title.innerHTML = `${section[section_keys].title}`;

    dinner.appendChild(dinner_span_title);

    if (section[section_keys].desc != "") {
      const dinner_span_desc = document.createElement('span');
      dinner_span_desc.className = 'span_desc';
      dinner_span_desc.innerHTML = `${section[section_keys].desc}`;
      dinner.appendChild(dinner_span_desc);
    }

    document.getElementById('food-content').appendChild(dinner);

    const dinner_items = {
      0: { desc: '', title: 'Grilled Sirloin Steak', price: 600, section: 'main dishes' },
      1: { desc: '', title: 'Grilled Chicken Breast', price: 600, section: 'main dishes' },
      2: { desc: '', title: 'Pepper Steak', price: 600, section: 'main dishes' },
      3: { desc: '', title: 'Roast Chicken', price: 500, section: 'main dishes' },
      4: { desc: '', title: 'Grilled Fish Fillet', price: 600, section: 'main dishes' },
      5: { desc: '', title: 'Kuku Kienyeji', price: 750, section: 'main dishes' },
      6: { desc: '', title: 'Biryani', price: 500, section: 'main dishes' },
      7: { desc: '', title: 'Chicken Curry', price: 550, section: 'curries' },
      8: { desc: '', title: 'Beef Curry', price: 550, section: 'curries' },
      9: { desc: '', title: 'Vegetable Curry', price: 450, section: 'curries' },
      10: { desc: '', title: 'Pasta Bolognaise', price: 500, section: 'pasta' },
      11: { desc: '', title: 'Chicken in Red Sauce', price: 500, section: 'pasta' },
      12: { desc: '', title: 'Vegeterian Pasta', price: 350, section: 'pasta' },
    }

    for (let dinner_keys in dinner_items) {
      const row = document.createElement('div');
      row.className = 'row';

      const row_food = document.createElement('div');
      row_food.className = 'row_food';

      const row_food_span = document.createElement('span');
      row_food_span.innerHTML = `${dinner_items[dinner_keys].title}`;

      const row_desc_span = document.createElement('span');
      row_desc_span.className = 'desc';
      if (dinner_items[dinner_keys].desc == "") {
        row_desc_span.innerHTML = "";
      } else {
        row_desc_span.innerHTML = ` (${dinner_items[dinner_keys].desc})`;
      }

      row_food.appendChild(row_food_span);
      row_food.appendChild(row_desc_span);
      
      const row_price = document.createElement('div');
      row_price.className = 'row_price';
      
      const row_price_span = document.createElement('span');
      row_price_span.innerHTML = `Ksh. ${dinner_items[dinner_keys].price}`;
      row_price.appendChild(row_price_span);

      row.appendChild(row_food);
      row.appendChild(row_price);
    
      if (`${section[section_keys].title}`.toLowerCase() == `${dinner_items[dinner_keys].section}`.toLowerCase()) {
        document.getElementById(`dinner-${section[section_keys].title}`.toLowerCase()).append(row);
      }
    }
  }

  // Make side-menu height and main-menu height similar
  const menu_height = document.getElementById('food-content').clientHeight;
  document.getElementById('side-menu').style.maxHeight = `${menu_height}px`;
}

document.getElementById('dinner').onclick = () => {
  document.getElementById('breakfast').className = '';
  document.getElementById('lunch').className = '';
  document.getElementById('dinner').className = 'active';
  document.getElementById('beverages').className = '';
  document.getElementById('drinks').className = '';

  addDinnerItems();
}

// Beverages
const addBeverageItems = () => {
  document.getElementById('main-menu').removeChild(document.getElementById('food-content'));

  const section = {
    0: { desc: '', title: 'Coffee' },
    1: { desc: '', title: 'Tea' },
    2: { desc: '', title: 'Iced'},
    3: { desc: '', title: 'Booz Coffee'},
  }

  const food_content = document.createElement('div');
  food_content.className = 'food_content';
  food_content.id = 'food-content';

  document.getElementById('main-menu').appendChild(food_content);

  for (let section_keys in section) {
    const beverage = document.createElement('div');
    beverage.className = `beverage_${section[section_keys].title}`.toLowerCase() + ' beverage_item';
    beverage.id = `beverage-${section[section_keys].title}`.toLowerCase();

    const beverage_span_title = document.createElement('span');
    beverage_span_title.className = 'span_title';
    beverage_span_title.innerHTML = `${section[section_keys].title}`;

    beverage.appendChild(beverage_span_title);

    if (section[section_keys].desc != "") {
      const beverage_span_desc = document.createElement('span');
      beverage_span_desc.className = 'span_desc';
      beverage_span_desc.innerHTML = `${section[section_keys].desc}`;
      beverage.appendChild(beverage_span_desc);
    }

    document.getElementById('food-content').appendChild(beverage);

    const beverage_items = {
      0: { desc: '', title: 'Espresso', price: 100, section: 'coffee' },
      1: { desc: '', title: 'Cappuccino', price: 150, section: 'coffee' },
      2: { desc: '', title: 'Caffe Latte', price: 150, section: 'coffee' },
      3: { desc: '', title: 'Mocha', price: 250, section: 'coffee' },
      4: { desc: '', title: 'Mambo Machiato', price: 200, section: 'coffee' },
      5: { desc: '', title: 'Americano', price: 100, section: 'coffee' },
      6: { desc: '', title: 'Spiced Cappuccino', price: 200, section: 'coffee' },
      7: { desc: '', title: 'Spiced Latte', price: 200, section: 'coffee' },
      8: { desc: '', title: 'House Coffee', price: 150, section: 'coffee' },
      9: { desc: '', title: 'Syrups', price: 50, section: 'coffee' },
      10: { desc: '', title: 'Kenyan Tea', price: 100, section: 'tea' },
      11: { desc: '', title: 'Hot Chocolate', price: 150, section: 'tea' },
      12: { desc: '', title: 'Dirty Chai', price: 150, section: 'tea' },
      13: { desc: '', title: 'Masala Tea', price: 150, section: 'tea' },
      14: { desc: '', title: 'Dawa', price: 150, section: 'tea' },
      15: { desc: '', title: 'Herbal Tea', price: 150, section: 'tea' },
      16: { desc: '', title: 'Iced Cappuccino', price: 150, section: 'iced' },
      17: { desc: '', title: 'Americano on rocks', price: 150, section: 'iced' },
      18: { desc: '', title: 'Iced Tea', price: 150, section: 'iced' },
      19: { desc: '', title: 'Irish Coffee', price: 400, section: 'booz coffee' },
      20: { desc: '', title: 'Hot toddy', price: 400, section: 'booz coffee' },
    }

    for (let beverage_keys in beverage_items) {
      const row = document.createElement('div');
      row.className = 'row';

      const row_food = document.createElement('div');
      row_food.className = 'row_food';

      const row_food_span = document.createElement('span');
      row_food_span.innerHTML = `${beverage_items[beverage_keys].title}`;

      const row_desc_span = document.createElement('span');
      row_desc_span.className = 'desc';
      if (beverage_items[beverage_keys].desc == "") {
        row_desc_span.innerHTML = "";
      } else {
        row_desc_span.innerHTML = ` (${beverage_items[beverage_keys].desc})`;
      }

      row_food.appendChild(row_food_span);
      row_food.appendChild(row_desc_span);
      
      const row_price = document.createElement('div');
      row_price.className = 'row_price';
      
      const row_price_span = document.createElement('span');
      row_price_span.innerHTML = `Ksh. ${beverage_items[beverage_keys].price}`;
      row_price.appendChild(row_price_span);

      row.appendChild(row_food);
      row.appendChild(row_price);
    
      if (`${section[section_keys].title}`.toLowerCase() == `${beverage_items[beverage_keys].section}`.toLowerCase()) {
        document.getElementById(`beverage-${section[section_keys].title}`.toLowerCase()).append(row);
      }
    }
  }

  // Make side-menu height and main-menu height similar
  const menu_height = document.getElementById('food-content').clientHeight;
  document.getElementById('side-menu').style.maxHeight = `${menu_height}px`;  
}

document.getElementById('beverages').onclick = () => {
  document.getElementById('breakfast').className = '';
  document.getElementById('lunch').className = '';
  document.getElementById('dinner').className = '';
  document.getElementById('beverages').className = 'active';
  document.getElementById('drinks').className = '';

  addBeverageItems();
}

// Drinks
const addDrinkItem = () => {
  document.getElementById('main-menu').removeChild(document.getElementById('food-content'));

  const section = {
    0: { desc: '', title: 'Juices' },
    1: { desc: '', title: 'Smoothies' },
    2: { desc: '', title: 'Milkshakes'},
    3: { desc: '', title: 'Mocktails'},
    4: { desc: '', title: 'Soft Drinks'},
  }

  const food_content = document.createElement('div');
  food_content.className = 'food_content';
  food_content.id = 'food-content';

  document.getElementById('main-menu').appendChild(food_content);

  for (let section_keys in section) {
    const drink = document.createElement('div');
    drink.className = `drink_${section[section_keys].title}`.toLowerCase() + ' drink_item';
    drink.id = `drink-${section[section_keys].title}`.toLowerCase();

    const drink_span_title = document.createElement('span');
    drink_span_title.className = 'span_title';
    drink_span_title.innerHTML = `${section[section_keys].title}`;

    drink.appendChild(drink_span_title);

    if (section[section_keys].desc != "") {
      const drink_span_desc = document.createElement('span');
      drink_span_desc.className = 'span_desc';
      drink_span_desc.innerHTML = `${section[section_keys].desc}`;
      drink.appendChild(drink_span_desc);
    }

    document.getElementById('food-content').appendChild(drink);

    const drink_items = {
      0: { desc: '', title: 'Fresh Juices', price: 150, section: 'juices' },
      1: { desc: 'Classic and strawberry', title: 'Lemonade', price: 250, section: 'juices' },
      2: { desc: 'Plain', title: 'Lemonade', price: 200, section: 'juices' },
      3: { desc: '', title: 'Pineapple', price: 200, section: 'juices' },
      4: { desc: 'Spinach, avocado, apple and celery', title: 'Green Smoothie', price: 250, section: 'smoothies' },
      5: { desc: '', title: 'Avocado Mango Smoothie', price: 250, section: 'smoothies' },
      6: { desc: 'Banana, mango, pineapple and strawberry', title: 'Classic Smoothie', price: 250, section: 'smoothies' },
      7: { desc: 'Vanilla, chocolate, strawberry, mango and banana', title: 'Classic Milkshake', price: 300, section: 'milkshakes' },
      8: { desc: '', title: 'Oreo Milkshake', price: 350, section: 'milkshakes' },
      9: { desc: '', title: 'Cappuccino Shake', price: 350, section: 'milkshakes' },
      10: { desc: '', title: 'Virgin Mojito', price: 350, section: 'mocktails' },
      11: { desc: '', title: 'Virgin Pinacolada', price: 350, section: 'mocktails' },
      12: { desc: '', title: 'Passion Mojito', price: 350, section: 'mocktails' },
      13: { desc: '', title: 'Tropical Blue', price: 350, section: 'mocktails' },
      14: { desc: '', title: 'Green Apple', price: 350, section: 'mocktails' },
      15: { desc: '', title: 'Kiwi', price: 350, section: 'mocktails' },
      16: { desc: '', title: 'Strawberry Mojito', price: 350, section: 'mocktails' },
      17: { desc: '', title: 'Soda', price: 70, section: 'soft drinks' },
      18: { desc: '', title: 'Red Bull', price: 200, section: 'soft drinks' },
      19: { desc: '500ml', title: 'Still water', price: 100, section: 'soft drinks' },
      20: { desc: '1000ml/1L', title: 'Still water', price: 150, section: 'soft drinks' },
      21: { desc: '500ml', title: 'Sparkling water', price: 100, section: 'soft drinks' },
      22: { desc: '1000ml/1L', title: 'Sparkling water', price: 200, section: 'soft drinks' },
      23: { desc: '500ml', title: 'Mambo bottled water', price: 50, section: 'soft drinks' },
      24: { desc: '1000ml/1L', title: 'Mambo bottled water', price: 100, section: 'soft drinks' },
    }

    for (let drink_keys in drink_items) {
      const row = document.createElement('div');
      row.className = 'row';

      const row_food = document.createElement('div');
      row_food.className = 'row_food';

      const row_food_span = document.createElement('span');
      row_food_span.innerHTML = `${drink_items[drink_keys].title}`;

      const row_desc_span = document.createElement('span');
      row_desc_span.className = 'desc';
      if (drink_items[drink_keys].desc == "") {
        row_desc_span.innerHTML = "";
      } else {
        row_desc_span.innerHTML = ` (${drink_items[drink_keys].desc})`;
      }

      row_food.appendChild(row_food_span);
      row_food.appendChild(row_desc_span);
      
      const row_price = document.createElement('div');
      row_price.className = 'row_price';
      
      const row_price_span = document.createElement('span');
      row_price_span.innerHTML = `Ksh. ${drink_items[drink_keys].price}`;
      row_price.appendChild(row_price_span);

      row.appendChild(row_food);
      row.appendChild(row_price);
    
      if (`${section[section_keys].title}`.toLowerCase() == `${drink_items[drink_keys].section}`.toLowerCase()) {
        document.getElementById(`drink-${section[section_keys].title}`.toLowerCase()).append(row);
      }
    }
  }

  // Make side-menu height and main-menu height similar
  const menu_height = document.getElementById('food-content').clientHeight;
  document.getElementById('side-menu').style.maxHeight = `${menu_height}px`;
}

document.getElementById('drinks').onclick = () => {
  document.getElementById('breakfast').className = '';
  document.getElementById('lunch').className = '';
  document.getElementById('dinner').className = '';
  document.getElementById('beverages').className = '';
  document.getElementById('drinks').className = 'active';

  addDrinkItem();
}

// Side menu
const addSideMenuItems = () => {
  const section = {
    0: { desc: '', title: 'Pastries' },
    1: { desc: '', title: 'Kids Menu' },
    2: { desc: '', title: 'Starters'},
    3: { desc: '', title: 'Sides'},
    4: { desc: '', title: 'Salads'},
    4: { desc: '', title: 'Desserts'},
  }

  const side_food_content = document.createElement('div');
  side_food_content.className = 'side_food_content';
  side_food_content.id = 'side-food-content';

  document.getElementById('side-menu').appendChild(side_food_content);

  for (let section_keys in section) {
    const sidefood = document.createElement('div');
    sidefood.className = `sidefood_${section[section_keys].title}`.toLowerCase() + ' side_food_content_item';
    sidefood.id = `sidefood-${section[section_keys].title}`.toLowerCase();

    const sidefood_span_title = document.createElement('span');
    sidefood_span_title.className = 'span_title';
    sidefood_span_title.innerHTML = `${section[section_keys].title}`;

    sidefood.appendChild(sidefood_span_title);

    if (section[section_keys].desc != "") {
      const sidefood_span_desc = document.createElement('span');
      sidefood_span_desc.className = 'span_desc';
      sidefood_span_desc.innerHTML = `${section[section_keys].desc}`;
      sidefood.appendChild(sidefood_span_desc);
    }

    document.getElementById('side-food-content').appendChild(sidefood);

    const sidefood_items = {
      0: { desc: '', title: 'Doughnut', price: 50, section: 'pastries' },
      1: { desc: '', title: 'Plain Croissant', price: 150, section: 'pastries' },
      2: { desc: '', title: 'Plain Cupcake', price: 50, section: 'pastries' },
      3: { desc: '', title: 'Frosted Cupcake', price: 150, section: 'pastries' },
      4: { desc: '2 pcs', title: 'Tea Scones', price: 50, section: 'pastries' },
      5: { desc: '', title: 'Bun', price: 50, section: 'pastries' },
      6: { desc: '', title: 'Slice of cake', price: 150, section: 'pastries' },
      7: { desc: 'Served with Chips', title: 'Fish Fingers', price: 350, section: 'kids menu' },
      8: { desc: '', title: 'Chips and Sausage', price: 300, section: 'kids menu' },
      9: { desc: 'Please ask your waiter', title: 'Soup of the day', price: 250, section: 'starters' },
      10: { desc: '', title: 'Vegetable Samosa', price: 100, section: 'starters' },
      11: { desc: '6 pcs', title: 'Chicken Wings', price: 450, section: 'starters' },
      12: { desc: '3 pcs', title: 'Beef Samosa', price: 150, section: 'starters' },
      13: { desc: '2pcs served with tamarind dip', title: 'Beef Skewers', price: 450, section: 'starters' },
      14: { desc: '', title: 'Chips', price: 200, section: 'sides' },
      15: { desc: '', title: 'Masala Chips', price: 250, section: 'sides' },
      16: { desc: '', title: 'Bhajias', price: 250, section: 'sides' },
      17: { desc: '', title: 'Mahamri', price: 150, section: 'sides' },
      18: { desc: '', title: 'Sausage', price: 180, section: 'sides' },
      19: { desc: '', title: 'Chapati', price: 50, section: 'sides' },
      20: { desc: 'Lettuce, bread crouton & parmesian cheese', title: 'Chicken Caesar Salad', price: 400, section: 'salads' },
      21: { desc: 'Lettuce, tomatoes, onions, cucumber, olives and feta cheese', title: 'Greek Salad', price: 400, section: 'salads' },
      22: { desc: '', title: 'Mambo Fresh Garden Salad', price: 350, section: 'salads' },
      23: { desc: 'Served with a scoop of vanilla ice cream', title: 'Fruit Salad', price: 400, section: 'desserts' },
      24: { desc: '', title: 'Black Forest Cake', price: 250, section: 'desserts' },
      25: { desc: '', title: 'White Forest Cake', price: 250, section: 'desserts' },
      26: { desc: 'Dry Fruits/ Vanilla and Chocolate', title: 'Muffins', price: 100, section: 'desserts' },
      27: { desc: '2 scoops - Vanilla and Chocolate', title: 'Ice Cream', price: 300, section: 'desserts' },
    }

    for (let sidefood_keys in sidefood_items) {
      const row = document.createElement('div');
      row.className = 'row';

      const row_food = document.createElement('div');
      row_food.className = 'row_food';

      const row_food_span = document.createElement('span');
      row_food_span.innerHTML = `${sidefood_items[sidefood_keys].title}`;

      const row_desc_span = document.createElement('span');
      row_desc_span.className = 'desc';
      if (sidefood_items[sidefood_keys].desc == "") {
        row_desc_span.innerHTML = "";
      } else {
        row_desc_span.innerHTML = ` (${sidefood_items[sidefood_keys].desc})`;
      }

      row_food.appendChild(row_food_span);
      row_food.appendChild(row_desc_span);
      
      const row_price = document.createElement('div');
      row_price.className = 'row_price';
      
      const row_price_span = document.createElement('span');
      row_price_span.innerHTML = `Ksh. ${sidefood_items[sidefood_keys].price}`;
      row_price.appendChild(row_price_span);

      row.appendChild(row_food);
      row.appendChild(row_price);
    
      if (`${section[section_keys].title}`.toLowerCase() == `${sidefood_items[sidefood_keys].section}`.toLowerCase()) {
        document.getElementById(`sidefood-${section[section_keys].title}`.toLowerCase()).append(row);
      }
    }
  }
}

addSideMenuItems();