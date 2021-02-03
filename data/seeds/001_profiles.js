const faker = require('faker');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('profiles')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {
          id: '00ulthapbErVUwVJy4x6',
          email: 'llama001@maildrop.cc',
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          avatarUrl : faker.image.avatar(),
          address1:'627 This is a real road' ,
          address2: 'Apt 22K',
          city: 'New Braunfels', 
          state: 'Texas',
          zip: '78163',
          phone: '830-882-8855' ,
          image: ''
        },
        {
          id: '00ultwew80Onb2vOT4x6',
          email: 'llama002@maildrop.cc',
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          avatarUrl : faker.image.avatar(),
          address1:'1221 Not Seed data' ,
          address2: '',
          city: 'Akron', 
          state: 'Georgia',
          zip: '30124',
          phone: '706-706-7060' ,
          image: ''
        },
        {
          id: '00ultx74kMUmEW8054x6',
          email: 'llama003@maildrop.cc',
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          avatarUrl : faker.image.avatar(),
          address1:'Farm Road 322' ,
          address2: 'MBX 21',
          city: 'Citysville', 
          state: 'Stateston',
          zip: '858581',
          phone: '444-444-4441' ,
          image: ''
        },
        {
          id: '00ultwqjtqt4VCcS24x6',
          email: 'llama004@maildrop.cc',
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          avatarUrl : faker.image.avatar(),
          address1:'25 Slagathor Way' ,
          address2: '',
          city: 'Kelsoville', 
          state: 'New Yonk',
          zip: '82585',
          phone: '111-111-4111' ,
          image: ''
        },
        {
          id: '00ultwz1n9ORpNFc04x6',
          email: 'llama005@maildrop.cc',
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          avatarUrl : faker.image.avatar(),
          address1:'621 Real Street' ,
          address2: '',
          city: 'San DiFrangeles', 
          state: 'California',
          zip: '12252',
          phone: '216-457-5748' ,
          image: ''
        },
        {
          id: '00u13omswyZM1xVya4x7',
          email: 'llama006@maildrop.cc',
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          avatarUrl : faker.image.avatar(),
          address1:'2990 Charter Street' ,
          address2: '',
          city: 'Kansas City', 
          state: 'Kansas',
          zip: '66223',
          phone: '913-681-7537' ,
          image: ''
        },
        {
          id: '00u13ol5x1kmKxVJU4x7',
          email: 'llama007@maildrop.cc',
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          avatarUrl : faker.image.avatar(),
          address1:'4480 Kimberly Way' ,
          address2: '',
          city: 'Canoga Park', 
          state: 'California',
          zip: '91303',
          phone: '616-843-2697' ,
          image: ''
        },
        {
          id: '00u13oned0U8XP8Mb4x7',
          email: 'llama008@maildrop.cc',
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          avatarUrl : faker.image.avatar(),
          address1:'902 Froe Street' ,
          address2: '',
          city: 'St. Marys', 
          state: 'West Virginia',
          zip: '26170',
          phone: '304-299-4960' ,
          image: ''
        }
      ]);
    });
};
