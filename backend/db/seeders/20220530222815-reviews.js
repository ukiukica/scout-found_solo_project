'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [
        {
        content: 'Wow! Absolutely impressed.',
        userId: 1,
        filmLocationId: 1,
        createdAt: '2020-4-11',
        updatedAt: '2020-10-11'
      },
      {
        content: 'As they said, the future is here.',
        userId: 3,
        filmLocationId: 1,
        createdAt: '2020-3-2',
        updatedAt: '2020-10-11'
      },
      {
        content: 'It’s was great,they were cool.We were in and out and they didn’t bother us just let us work.Would book again 💖',
        userId: 4,
        filmLocationId: 1,
        createdAt: '2022-4-5',
        updatedAt: '2020-10-11'
      },
      {
        content: 'I was so very pleased with this space. It had everything I needed for my birthday shoot. But most of all the host was great! I was late for my booking and he was so patient and understanding with me.',
        userId: 5,
        filmLocationId: 1,
        createdAt: '2019-10-22',
        updatedAt: '2020-10-11'
      },
      {
        content: 'Meh. The weather sucks here. Not gonna shoot here again',
        userId: 3,
        filmLocationId: 2,
        createdAt: '2020-10-28',
        updatedAt: '2020-10-11'
      },
      {
        content: 'Makes me feel like I am back home.',
        userId: 4,
        filmLocationId: 2,
        createdAt: '2020-1-3',
        updatedAt: '2020-10-11'
      },
      {
        content: "Great place to visit and stay so you can see alot of things the park has to offer.  Grand Canyon if Yellowstone, excellent!!!!  The Norris Geyser, great place to see tons of great geysers going on, and if your lucky you'll see Pork chop geyser go off.  It's better then Old Faithful any day.  Lots to see and do",
        userId: 5,
        filmLocationId: 2,
        createdAt: '2020-12-11',
        updatedAt: '2020-10-11'
      },
      {
        content: 'We took a 3 day snowmobile tour. It was awesome. Snowmobiles are not allowed off the roads, so the landscape looks untouched and beautiful. ',
        userId: 6,
        filmLocationId: 2,
        createdAt: '2020-1-11',
        updatedAt: '2020-10-11'
      },
      {
        content: 'Eye opening to watch the bison root through the snow to find grass. Amazing thermals scattered over the park and the 1000 deep canyon with all the waterfalls was awesome.',
        userId: 7,
        filmLocationId: 2,
        createdAt: '2020-2-16',
        updatedAt: '2020-10-11'
      },
      {
        content: "So great! I booked this last minute and it worked perfectly for what I needed. Great value and lots of equipment available for the price!",
        userId: 1,
        filmLocationId: 3,
        createdAt: '2021-4-4',
        updatedAt: '2020-10-11'
      },
      {
        content: "Great experience and service, recommend requesting to have work done here cause i’ll definitely be back.",
        userId: 2,
        filmLocationId: 3,
        createdAt: '2021-7-6',
        updatedAt: '2020-10-11'
      },
      {
        content: "Love the space, it was perfect for what I needed! Will definitely be booking again! The host was so sweet and helpful!",
        userId: 4,
        filmLocationId: 3,
        createdAt: '2021-7-4',
        updatedAt: '2020-10-11'
      },
      {
        content: "The space was very nice and a perfect setup for a photo shoot. I chose to do a 90s themed shoot including Poetic Justice. What better location than one with inspo. on the wall. ",
        userId: 7,
        filmLocationId: 3,
        createdAt: '2022-2-4',
        updatedAt: '2020-10-11'
      },
      {
        content: "Duhon the property manager was also great to work with. Very responsive and easy-going. Overall the experience was great. Parking was easy, we were in and out, and the overall decor contributed to a great vibe. Would highly recommend it.",
        userId: 6,
        filmLocationId: 4,
        createdAt: '2021-1-1',
        updatedAt: '2020-10-11'
      },
      {
        content: "Needed a space for an hour (that didn’t require a two hour min), and booked this place the day prior to shooting. Host was patient as we located parking and escorted us to the space. ",
        userId: 7,
        filmLocationId: 4,
        createdAt: '2021-8-2',
        updatedAt: '2020-10-11'
      },
      {
        content: "Space was identical to photos and there was a Bluetooth speaker available for us to play music! Host was very nice and checked on us and was nearby if we had any questions or concerns.",
        userId: 8,
        filmLocationId: 4,
        createdAt: '2021-9-4',
        updatedAt: '2020-10-11'
      },
      {
        content: "great place great people. everything was perfect!",
        userId: 10,
        filmLocationId: 4,
        createdAt: '2021-10-9',
        updatedAt: '2020-10-11'
      },
      {
        content: "This space was perfect for a newborn/family session I had. The host was extremely kind, helpful, and let us do our thing! The space was neat and the props/equipment available were so awesome. I would book here again and again!",
        userId: 2,
        filmLocationId: 5,
        createdAt: '2021-5-4',
        updatedAt: '2020-10-11'
      },
      {
        content: "This was a great space for our team photo shoot for our website, etc. As an interior design firm the environment had to be beautiful and Sadie's space was just the ticket!",
        userId: 3,
        filmLocationId: 5,
        createdAt: '2022-6-4',
        updatedAt: '2020-10-11'
      },
      {
        content: "This place was amazing!! The hosts were extremely helpful. Plus that had so many different props/clothing that could be used during your session. I 10/10 recommended using this place!",
        userId: 7,
        filmLocationId: 5,
        createdAt: '2021-12-4',
        updatedAt: '2020-10-11'
      },
      {
        content: "great place, clean the host is wonderfull, they take care of every details to make the studio comfortable.",
        userId: 8,
        filmLocationId: 5,
        createdAt: '2022-4-1',
        updatedAt: '2020-10-11'
      },
      {
        content: "Used space 2nd time as everything was smooth as usual .",
        userId: 9,
        filmLocationId: 6,
        createdAt: '2021-4-15',
        updatedAt: '2020-10-11'
      },
      {
        content: "Great space! And the owners were so easy going. 10 out of 10 would use again!",
        userId: 8,
        filmLocationId: 6,
        createdAt: '2021-9-4',
        updatedAt: '2020-10-11'
      },
      {
        content: "It’s a actually home that was surprising in a nice neighborhood. My session started late but they were so sweet ,& accommodating. ",
        userId: 7,
        filmLocationId: 6,
        createdAt: '2020-6-4',
        updatedAt: '2020-10-11'
      },
      {
        content: "Place was very clean, beautiful and Creative they had a bunch of props included and u get the whole upstairs with your own bathroom for you and your clients with privacy.",
        userId: 10,
        filmLocationId: 6,
        createdAt: '2021-1-3',
        updatedAt: '2020-10-11'
      },
      {
        content: "It is a beautiful studio space I highly recommend booking this space",
        userId: 2,
        filmLocationId: 7,
        createdAt: '2022-7-4',
        updatedAt: '2020-10-11'
      },
      {
        content: "A great little space with all the basics you need. Window light, newborn props, even some maternity dresses and basic lights. 10/10.",
        userId: 3,
        filmLocationId: 7,
        createdAt: '2021-2-15',
        updatedAt: '2020-10-11'
      },
      {
        content: "The only thing I wish is that they had a garment rack for all of our clothes.",
        userId: 4,
        filmLocationId: 7,
        createdAt: '2021-9-7',
        updatedAt: '2020-10-11'
      },
      {
        content: "BEAUTIFUL!",
        userId: 5,
        filmLocationId: 7,
        createdAt: '2022-1-1',
        updatedAt: '2020-10-11'
      },
      {
        content: "Best experience",
        userId: 2,
        filmLocationId: 8,
        createdAt: '2021-4-19',
        updatedAt: '2020-10-11'
      },
      {
        content: "Amazing space will definitely book again",
        userId: 5,
        filmLocationId: 8,
        createdAt: '2021-7-1',
        updatedAt: '2020-10-11'
      },
      {
        content: "Amazing experience, Rahim was great and very informative & helpful during our videoshoot, I highly recommend this space!",
        userId: 7,
        filmLocationId: 8,
        createdAt: '2021-9-9',
        updatedAt: '2020-10-11'
      },
      {
        content: "Epitome of professional. Easy to book, great lighting options, potential for many different scenes in a movie video.",
        userId: 6,
        filmLocationId: 8,
        createdAt: '2021-4-4',
        updatedAt: '2020-10-11'
      },
      {
        content: "Host was great , he provided as much help as needed",
        userId: 2,
        filmLocationId: 9,
        createdAt: '2022-3-3',
        updatedAt: '2020-10-11'
      },
      {
        content: "Very profecional work!",
        userId: 3,
        filmLocationId: 9,
        createdAt: '2021-8-8',
        updatedAt: '2020-10-11'
      },
      {
        content: "Great host went above & beyond!",
        userId: 6,
        filmLocationId: 9,
        createdAt: '2021-6-5',
        updatedAt: '2020-10-11'
      },
      {
        content: "It was better than I anticipated. Rahim is amazing! Definitely would recommend and ready to come back!!!",
        userId: 7,
        filmLocationId: 9,
        createdAt: '2021-7-6',
        updatedAt: '2020-10-11'
      },
      {
        content: "I loved it good place to shoot your music videos",
        userId: 4,
        filmLocationId: 10,
        createdAt: '2021-3-3',
        updatedAt: '2020-10-11'
      },
      {
        content: "Wonderful Amazing ... dear directors don’t be scared to use your artist budget for scenes like these . There is so much I could say but you have to experience for yourself .",
        userId: 8,
        filmLocationId: 10,
        createdAt: '2021-6-17',
        updatedAt: '2020-10-11'
      },
      {
        content: "Good experience",
        userId: 2,
        filmLocationId: 10,
        createdAt: '2022-2-4',
        updatedAt: '2020-10-11'
      },
      {
        content: "Loved everything about the space, rahim was very helpful and understanding",
        userId: 9,
        filmLocationId: 10,
        createdAt: '2020-7-6',
        updatedAt: '2020-10-11'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
