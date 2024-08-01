const request = require('supertest');
const express = require('express');
const app = require('../index'); // Adjust the path to your Express app

describe('Hotel API', () => {

  // Test fetching all hotels
  describe('GET /gethotels', () => {
    it('should fetch all hotels', async () => {
      const response = await request(app).get('/gethotels');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('message', 'Hotels fetched successfully');
      expect(response.body).toHaveProperty('hotels');
    });
  });

  // Test fetching hotels by state and city and optional price range
  describe('GET /gethotelsbystatecityandprice', () => {
    it('should fetch hotels by state, city, and optional price range', async () => {
      const response = await request(app)
        .get('/gethotelsbystatecityandprice')
        .query({ state: 'Gujarat', city: 'Ahmedabad', minPrice: '1000', maxPrice: '5000' });
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('message', 'Hotels fetched successfully');
      expect(response.body).toHaveProperty('hotels');
    });

    it('should return error if state or city is missing', async () => {
      const response = await request(app)
        .get('/gethotelsbystatecityandprice')
        .query({ state: 'Gujarat' }); // Missing city
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('message', 'Both state and city are required');
    });
  });

  // Test fetching hotels by state, city, rating, and optional price range
  describe('GET /gethotelsbystatecityratingandprice', () => {
    it('should fetch hotels by state, city, rating, and optional price range', async () => {
      const response = await request(app)
        .get('/gethotelsbystatecityratingandprice')
        .query({ state: 'Gujarat', city: 'Ahmedabad', minPrice: '1000', maxPrice: '5000', minRating: '4' });
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('message', 'Hotels fetched successfully');
      expect(response.body).toHaveProperty('hotels');
    });

    it('should return error if state or city is missing', async () => {
      const response = await request(app)
        .get('/gethotelsbystatecityratingandprice')
        .query({ state: 'Gujarat' }); // Missing city
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('message', 'Both state and city are required');
    });
  });

  // Test fetching cities by state
  describe('GET /getcitiesbystate', () => {
    it('should fetch all cities by state', async () => {
      const response = await request(app)
        .get('/getcitiesbystate')
        .query({ state: 'Gujarat' });
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('message', 'Cities fetched successfully');
      expect(response.body).toHaveProperty('cities');
    });

    it('should return error if state is missing', async () => {
      const response = await request(app)
        .get('/getcitiesbystate');
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('message', 'State is required');
    });
  });

});
