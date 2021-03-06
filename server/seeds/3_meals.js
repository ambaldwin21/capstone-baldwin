exports.seed = function(knex) {
  return knex('meals').del()
    .then(() => {
      return knex('meals').insert([{
        restaurant_id: 1,
        user_id: null,
        name: 'Chicken Fried Calamari Steak',
        details: 'Buttermilk brined wild caught squid, lemon aioli, Ozuke collard green kimchi.',
        dietary: 'gluten-free',
        pickup: 'Before close',
        price: 5.99
      },
      {
        restaurant_id: 1,
        user_id: null,
        name: 'Lamb & Oat Meatloaf',
        details: 'Triple m bar ranch lamb, grassfed beef, Elevation ketchup, pumpkin seed pesto, sweet potato bites.',
        dietary: 'gluten-free options',
        pickup: 'Before close',
        price: 6.99
      },
      {
        restaurant_id: 2,
        user_id: null,
        name: 'Next Door Beet Burger',
        details: 'Local beet, and topped with arugula, balsamic onions, and feta.',
        dietary: 'Vegetarian and can request gluten-free bun.',
        pickup: 'Between 5 and 6 pm.',
        price: 3.99
      },
      {
        restaurant_id: 2,
        user_id: null,
        name: 'Pineapple Express Burger',
        details: 'Balsamic pineapple, swiss, bacon, arugula, and honey sriracha sauce.',
        dietary: 'Gluten Free',
        pickup: 'Between 5 and 6 pm.',
        price: 4.99
      },
      {
        restaurant_id: 3,
        user_id: null,
        name: 'Buffalo Chicken Sandwich',
        details: 'Housemade pickles, blue cheese crumbles, and ranch dressing. Collard Greens side.',
        dietary: 'can request gluten-free bun.',
        pickup: 'After 7 pm',
        price: 5.99
      },
      {
        restaurant_id: 3,
        user_id: null,
        name: 'KC Half Rack of Ribs',
        details: 'St. Louis cut, Kansas City BBQ sauce. Fries on the side.',
        dietary: 'Dairy-free',
        pickup: 'After 7 pm',
        price: 8.99
      },
      {
        restaurant_id: 4,
        user_id: null,
        name: 'Scarola Pizza',
        details: 'Smoked mozzarella, bitter greens, black olive, red onion.',
        dietary: 'Vegetarian',
        pickup: 'Between 3-4pm',
        price: 7.99
      },
      {
        restaurant_id: 4,
        user_id: null,
        name: 'Mais Pizza',
        details: 'Mozzarella, sweet corn, crème fraîche, garlic, chive.',
        dietary: 'Can be vegan cheese.',
        pickup: 'Between 3-4pm',
        price: 4.99
      }]);
    });
};
