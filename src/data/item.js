// const items = {
//     Laptop: [
//       { name: 'Laptop 1', description: 'High performance laptop', price: '$1000', reviews: 4.5, category: 'Laptop' },
//       { name: 'Laptop 2', description: 'Affordable laptop', price: '$500', reviews: 4.0, category: 'Laptop' },
//       { name: 'Laptop 3', description: 'Gaming laptop', price: '$1500', reviews: 4.8, category: 'Laptop' },
//     ],
//     Monitor: [
//       { name: 'Monitor 1', description: '4K monitor', price: '$300', reviews: 4.3, category: 'Monitor' },
//       { name: 'Monitor 2', description: 'HD monitor', price: '$150', reviews: 4.0, category: 'Monitor' },
//       { name: 'Monitor 3', description: 'Curved monitor', price: '$400', reviews: 4.7, category: 'Monitor' },
//     ],
//     Speaker: [
//       { name: 'Speaker 1', description: 'Bluetooth speaker', price: '$50', reviews: 4.2, category: 'Speaker' },
//       { name: 'Speaker 2', description: 'WiFi speaker', price: '$100', reviews: 4.5, category: 'Speaker' },
//       { name: 'Speaker 3', description: 'Portable speaker', price: '$70', reviews: 4.6, category: 'Speaker' },
//     ],
//   };
  
//   export default items;
  



// const items = {
//     Laptop: Array.from({ length: 20 }, (_, i) => ({
//       name: `Laptop ${i + 1}`,
//       description: 'High performance laptop',
//       price: `$${1000 + i * 50}`,
//       reviews: 4.5 - (i % 5) * 0.1,
//       category: 'Laptop',
//       popularity: i + 1,
//       arrival: new Date(2024, 0, 1).setDate(new Date().getDate() - i),
//     })),
//     Monitor: Array.from({ length: 20 }, (_, i) => ({
//       name: `Monitor ${i + 1}`,
//       description: 'High quality monitor',
//       price: `$${300 + i * 30}`,
//       reviews: 4.3 - (i % 5) * 0.1,
//       category: 'Monitor',
//       popularity: i + 1,
//       arrival: new Date(2024, 0, 1).setDate(new Date().getDate() - i),
//     })),
//     Speaker: Array.from({ length: 20 }, (_, i) => ({
//       name: `Speaker ${i + 1}`,
//       description: 'High fidelity speaker',
//       price: `$${50 + i * 10}`,
//       reviews: 4.2 - (i % 5) * 0.1,
//       category: 'Speaker',
//       popularity: i + 1,
//       arrival: new Date(2024, 0, 1).setDate(new Date().getDate() - i),
//     })),
//   };
  
//   export default items;
  

// const items = {
//     Laptop: Array.from({ length: 20 }, (_, i) => ({
//       name: `Laptop ${i + 1}`,
//       description: 'High performance laptop',
//       price: `$${1000 + i * 50}`,
//       reviews: 4.5 - (i % 5) * 0.1,
//       category: 'Laptop',
//       popularity: 20 - i,
//       arrival: new Date(2024, 0, 1).setDate(new Date().getDate() - i),
//     })),
//     Monitor: Array.from({ length: 20 }, (_, i) => ({
//       name: `Monitor ${i + 1}`,
//       description: 'High quality monitor',
//       price: `$${300 + i * 30}`,
//       reviews: 4.3 - (i % 5) * 0.1,
//       category: 'Monitor',
//       popularity: 20 - i,
//       arrival: new Date(2024, 0, 1).setDate(new Date().getDate() - i),
//     })),
//     Speaker: Array.from({ length: 20 }, (_, i) => ({
//       name: `Speaker ${i + 1}`,
//       description: 'High fidelity speaker',
//       price: `$${50 + i * 10}`,
//       reviews: 4.2 - (i % 5) * 0.1,
//       category: 'Speaker',
//       popularity: 20 - i,
//       arrival: new Date(2024, 0, 1).setDate(new Date().getDate() - i),
//     })),
//   };
  
//   export default items;
  




const items = {
    Laptop: Array.from({ length: 20 }, (_, i) => ({
      name: `Laptop ${i + 1}`,
      description: 'High performance laptop',
      price: `$${1000 + i * 50}`,
      reviews: 4.5 - (i % 5) * 0.1,
      category: 'Laptop',
      popularity: i + 1,
      arrival: new Date(2024, 0, 1).setDate(new Date().getDate() - i),
    })),
    Monitor: Array.from({ length: 20 }, (_, i) => ({
      name: `Monitor ${i + 1}`,
      description: 'High quality monitor',
      price: `$${300 + i * 30}`,
      reviews: 4.3 - (i % 5) * 0.1,
      category: 'Monitor',
      popularity: i + 1,
      arrival: new Date(2024, 0, 1).setDate(new Date().getDate() - i),
    })),
    Speaker: Array.from({ length: 20 }, (_, i) => ({
      name: `Speaker ${i + 1}`,
      description: 'High fidelity speaker',
      price: `$${50 + i * 10}`,
      reviews: 4.2 - (i % 5) * 0.1,
      category: 'Speaker',
      popularity: i + 1,
      arrival: new Date(2024, 0, 1).setDate(new Date().getDate() - i),
    })),
  };
  
  export default items;
  


