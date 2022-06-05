'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('FilmLocations', [
      {
      title: '360 Projection Studio',
      logline: 'Ditch the green screen. The future is here.',
      description: 'Lose yourself in this state-of-the-art studio featuring a 360-degree projection suitable for all of your shooting needs. With a variety of lighting options and backdrops this space can be used for fashion, basic photography and even some video. Let your mind spring with inspiration around you. Infinity Black Room with RGB Wall That Can Be Customized To Change To Hundreds of Colors and Effects',
      imageUrl: '/images/360-studio-1.jpg',
      address: 'Studio City, Los Angeles',
      userId: 2,
      createdAt: '2020-10-11',
      updatedAt: '2020-10-11'
    },
    {
      title: 'Death Valley',
      logline: 'Where westerns are shot.',
      description: 'Imagine yourself riding a horse into the sunset. You would be riding it over these lands. A perfect location for all your film needs. With its warm, blue waters, red rock, and sand dunes, Sand Hollow is a unique reservoir. Paved roads and parking lots offer great accessibility. There are bathrooms, loading docks, and campgrounds with picnic tables. Much of the scenic southern and southeastern landscape (specifically the Colorado Plateau region) is sandstone, specifically Kayenta sandstone and Navajo sandstone. ',
      imageUrl: '/images/valley-1.jpg',
      address: '16663 N Paso Rd, Canyon Of Death, Utah',
      userId: 3,
      createdAt: '2020-10-11',
      updatedAt: '2020-10-11'
    },
    {
      title: 'Beach Club',
      logline: 'It happened in the 50s.',
      description: "Beach Club 21 miles from Toims Square, about a 45 minute drive. Who doesn’t love an all-American road trip? As automobile travel gained popularity in the early 20th century, a slew of kitschy roadside motels popped up along the country's brand-new highways. The golden age of road trips may have passed, but some of these hidden gems are still going strong today. They’re renovated, retro, and steeped in classic Americana. So, the next time you hit the road, consider skipping corporate hotel chains and checking into one of these 15 iconic roadside motels instead.",
      imageUrl: '/images/beach-club-1.jpg',
      address: 'Atlantic Beach, NY',
      userId: 3,
      createdAt: '2020-10-11',
      updatedAt: '2020-10-11'
    },
    {
      title: "Open Plan 1920's Brick House With Modern Feel",
      logline: 'Elegant brick house with period details and open plan kitchen/dining room. ',
      description: "Located in leafy Westchester County, built in 1924, and fully renovated in 2019 in a clean, modern interpretation of the original. Spectacular original steel casement windows, mostly 5'x5', but floor to ceiling in the sunroom/playroom. Newly refurbished by the same master craftsmen trusted by Frank Lloyd Wright's Fallingwater.  South-facing house is flooded with natural light all day long. Decorated in a neutral palette of black, white, and natural wood tones, ready for your set designer.",
      imageUrl: '/images/1920-house-1.jpg',
      address: 'Hastings-on-Hudson, NY',
      userId: 4,
      createdAt: '2021-11-15',
      updatedAt: '2021-11-15'
    },
    {
      title: 'Westchester Tudor Home - Minutes from NYC',
      logline: 'A traditional tudor house, with over 4000 square feet of space.',
      description: "A perfect location for all your film needs. The space includes four bedrooms, large open kitchen that opens to a back deck, dinning room, living room (with paneled wood walls), home office, and a basement that includes a home gym and play room. The house is well kept and in great condition, ready for production now! I am a video producer and know the ins and outs of your production needs -- let's chat so I can tell you more about the location!",
      imageUrl: '/images/tudor-house-1.jpg',
      address: 'New Rochelle, NY',
      userId: 5,
      createdAt: '2020-10-11',
      updatedAt: '2020-10-11'
    },
    {
      title: 'Spacious studio with pre-rigged RGB lighting',
      logline: 'The place speaks for itself.',
      description: "The space is located in East Williamsburg/ Bushwick, 5 min away from Jefferson st @ L train. Easy and private 24/7 street access (1st floor). 1700 sq ft open space with make up tables, clothing racks, steamers, kitchen, lounge and dining areas. Complimentary tea/coffee/water. 900 sq ft cyc wall room with lighting grid. Private bathroom. In-house equipment with package deals: RGB LED PRO LIGHTING KIT (12 LIGHTS) --- $50 per hour All the lights are pre-rigged to the grid above the cyc wall and controlled wirelessly via Luminair app on an ipad. It saves a lot of time for the crew, because everything is ready to go and changing the looks takes seconds.",
      imageUrl: '/images/pink-studio-1.jpg',
      address: 'East Williamsburg, Kings County, NY',
      userId: 4,
      createdAt: '2020-10-11',
      updatedAt: '2020-10-11'
    },
    {
      title: 'Waterfall at a Tranquil Forest Haven',
      logline: 'Jurrasic Park much?',
      description: "Sip a refreshing glass of the natural spring water, then take a dip in the secluded natural pool at this nature-inspired, architectural masterpiece in the forest's heart. Pick bananas, look for monkeys and watch blue butterflies fluttering by too. Occupying much of Brazil and Peru, and also parts of Guyana, Colombia, Ecuador, Bolivia, Suriname, French Guiana, and Venezuela, the Amazon River Basin is the world's largest drainage system. The Amazon Basin supports the world's largest rainforest, which accounts for more than half the total volume of rainforests in the world.",
      imageUrl: '/images/brazil-1.jpg',
      address: 'Rio de Janeiro, Brazil',
      userId: 8,
      createdAt: '2020-10-11',
      updatedAt: '2020-10-11'
    },
    {
      title: 'Joshua Tree',
      logline: 'Where every tree is a character.',
      description: "Joshua Tree National Park is a vast protected area in southern California. It's characterized by rugged rock formations and stark desert landscapes. Named for the region's twisted, bristled Joshua trees, the park straddles the cactus-dotted Colorado Desert and the Mojave Desert, which is higher and cooler. Keys View looks out over the Coachella Valley. Hiking trails weave through the boulders of Hidden Valley. The earliest known residents of the land in and around what later became Joshua Tree National Park were the people of the Pinto Culture, who lived and hunted here between 8000 and 4000 BCE. Their stone tools and spear points, discovered in the Pinto Basin in the 1930s, suggest that they hunted game and gathered seasonal plants, but little else is known about them.",
      imageUrl: '/images/joshua-1.jpg',
      address: 'California, US',
      userId: 9,
      createdAt: '2020-10-11',
      updatedAt: '2020-10-11'
    },
    {
      title: 'Bash Bish Falls',
      logline: 'Nature, nature, nature. And then some sun for the perfect key.',
      description: 'Bash Bish Falls is the highest waterfall in Massachusetts and a popular scenic destination. The dramatic final pitch of Bash Bish Brook drops about 80 feet into an emerald plunge pool. Enjoy a hike to experience the wonder and beauty of this deep, verdant gorge. Nearby, Taconic State Park in New York state offers more visitor amenities, picnicking, swimming, and camping. Where you park determines your hike to the falls. Refer to All Activities - Hiking below to park at the appropriate location for your hike. Parking is free at the parking lot on Falls Road in Mount Washington, MA, limited to 24 cars. Parking is also available at Taconic State Park, off NY Route 344 in Copake Falls, NY. On-road parking along Falls Road or Route 344 is not permitted at any time.',
      imageUrl: '/images/bash-1.jpg',
      address: 'Mt. Washington, MA',
      userId: 9,
      createdAt: '2020-10-11',
      updatedAt: '2020-10-11'
    },
    {
      title: 'Yellowstone',
      logline: 'In the words of my cinematography professor, "God as a gaffer."',
      description: 'Yellowstone National Park is the flagship of the National Park Service and a favorite to millions of visitors each year. The park is a major destination for all members of the family. By driving the grand loop road, visitors can view the park from the comfort of their vehicle and also take a rest at one of the many roadside picnic areas. For the active visitor, the park has thousands of miles of trails from dayhikes to backcountry explorations. The main attractions are all located on the grand loop road and here are some of the top reasons to visit the park. This site has a lot of the information you need for your trip and you may also consider our dvd "The Wonders of Yellowstone" to help you plan your visit.',
      imageUrl: '/images/yellowstone-1.jpg',
      address: 'Wyoming, US',
      userId: 10,
      createdAt: '2020-10-11',
      updatedAt: '2020-10-11'
    },

  ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('FilmLocations', null, {});
  }
};
