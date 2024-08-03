const supertest = require('supertest');

const baseUrl = 'http://localhost:4000/api/v1'; 


test('Test for adding multiple states', async () => {
  const response = await supertest(baseUrl)
    .post('/addstate')
    .send({
      states: [
        { 
            state_name: 'Odisha1', 
            state_description: 'Odisha is a state in eastern India, known for its vibrant culture and history. Its capital is Bhubaneswar.' 
        },
        { 
            state_name: 'Tamil Nadu1', 
            state_description: 'Tamil Nadu is a state in southern India, known for its vibrant culture and history. Its capital is Chennai.' 
        },
      ],
    });
    
  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty('message', 'States Added Successfully');
  expect(response.body).toHaveProperty('addedStates');
});

test('Test for adding multiple cities', async () => {
  const response = await supertest(baseUrl)
    .post('/addcity')
    .send({
      cities: [
        { 
            city_name: 'Bhubaneswar1', 
            city_description: 'Bhubaneswar the temple city of India is the capital of Orissa. It is believed that there were about 7000 temples. ', 
            state: 'Odisha', 
            image_urls: ['url1', 'url2'] 
        },
        { 
            city_name: 'Chennai1', 
            city_description: 'Chennai is the capital city of Tamil Nadu. Chennai was earlier known as Madras. Madras was the official name of the city till 1996. Chennai is known as the “Health capital of India”.', 
            state: 'Tamil Nadu', 
            image_urls: ['url3', 'url4'] },
      ],
    });

  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty('message', 'Cities Added Successfully');
  expect(response.body).toHaveProperty('addedCities');
});

test('Test for adding multiple hotels', async () => {
  const response = await supertest(baseUrl)
    .post('/addhotel')
    .send({
      hotels: [
        { 
            hotel_name: 'Novotel Chennai Chamiers Road1', 
            hotel_review: 4.5, 
            hotel_price: 1000, 
            city: 'Chennai',  
            state: 'Tamil Nadu',   
            image_urls: ['url1', 'url2'] 
        },
        { 
            hotel_name: 'The Crown1', 
            hotel_review: 4.0, 
            hotel_price: 2000, 
            city: 'Bhubaneswar', 
            state: 'Odisha', 
            image_urls: ['url3', 'url4'] },
      ],
    });

  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty('message', 'Hotels Added Successfully');
  expect(response.body).toHaveProperty('addedHotels');
});
