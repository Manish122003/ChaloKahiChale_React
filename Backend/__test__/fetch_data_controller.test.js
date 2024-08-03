const supertest = require('supertest');

const baseUrl = 'http://localhost:4000/api/v1';


test('Test for fetching all hotels', async () => {
  const response = await supertest(baseUrl).get('/gethotels');
  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty('message', 'Hotels fetched successfully');
  expect(response.body).toHaveProperty('hotels');
});

test('Test for fetching all cities', async () => {
  const response = await supertest(baseUrl).get('/getcities');
  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty('message', 'Cities fetched successfully');
  expect(response.body).toHaveProperty('cities');
});

test('Test for fetching all states', async () => {
  const response = await supertest(baseUrl).get('/getstates');
  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty('message', 'States fetched successfully');
  expect(response.body).toHaveProperty('states');
});

test('Test for fetching cities by state', async () => {
  const response = await supertest(baseUrl).get('/getcitiesbystate').query({ state_name: 'StateName' });
  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty('message', 'Cities fetched successfully');
  expect(response.body).toHaveProperty('cities');
});

test('Test for fetching hotels by minimum rating', async () => {
  const response = await supertest(baseUrl).get('/gethotelsbyminrating').query({ minRating: 4 });
  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty('message', 'Hotels fetched successfully');
  expect(response.body).toHaveProperty('hotels');
});

test('Test for fetching hotels by price range', async () => {
  const response = await supertest(baseUrl).get('/gethotelsbypricerange').query({ minPrice: 100, maxPrice: 300 });
  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty('message', 'Hotels fetched successfully');
  expect(response.body).toHaveProperty('hotels');
});

test('Test for fetching hotels by state, city, rating, and price range', async () => {
  const response = await supertest(baseUrl).get('/gethotelsbystatecityratingandprice').query({
    state: 'StateName',
    city: 'CityName',
    minPrice: 100,
    maxPrice: 300,
    minRating: 4
  });
  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty('message', 'Hotels fetched successfully');
  expect(response.body).toHaveProperty('hotels');
});



