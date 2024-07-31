// // src/NotificationPage.jsx
// import { useState } from 'react';

// const NotificationPage = () => {
//   const [accordionOpen, setAccordionOpen] = useState(false);
//   const [notificationsEnabled, setNotificationsEnabled] = useState(false);

//   const toggleAccordion = () => {
//     setAccordionOpen(!accordionOpen);
//   };

//   const toggleNotifications = () => {
//     setNotificationsEnabled(!notificationsEnabled);
//   };

//   return (
//     <div className="note">
//       <h1>Notification Page</h1>
//       <div className="notification-box">
//         <div className="notification-title">Stay Updated with Travel</div>
//         <div className="notification-content">
//           <p>Welcome to Trawell - your ultimate travel companion!</p>
//           <p>Stay informed about our latest offers, travel tips, and exciting destinations by enabling notifications.</p>
//           <p>Get exclusive discounts, discover hidden gems, and plan your dream vacation with ease.</p>
//           <p>Join our community of travelers and embark on unforgettable journeys!</p>
//         </div>
//         <div className="accordion">
//           <button className="accordion-btn" id="accordionBtn" onClick={toggleAccordion}>
//             FAQs
//           </button>
//           {accordionOpen && (
//             <div className="accordion-content">
//               <p><strong>Q: How do I book a trip?</strong></p>
//               <p>A: Booking a trip with Trawell is easy! Simply browse our website or app, select your desired destination and dates, choose your accommodations and activities, and proceed to checkout.</p>
//               <p><strong>Q: Can I cancel or modify my booking?</strong></p>
//               <p>A: Yes, you can cancel or modify your booking depending on the terms and conditions of your reservation. Please refer to your booking confirmation for more details or contact our customer support team for assistance.</p>
//               <p><strong>Q: Do you offer travel insurance?</strong></p>
//               <p>A: We partner with trusted insurance providers to offer travel insurance options for your convenience and peace of mind. You can add travel insurance during the booking process.</p>
//             </div>
//           )}
//         </div>
//         <br /><br />
//         <div className="toggle-btn">
//           <label className="switch">
//             <input type="checkbox" id="notificationToggle" checked={notificationsEnabled} onChange={toggleNotifications} />
//             <span className="slider round"></span>
//           </label>
//           <label htmlFor="notificationToggle">Turn Notifications On/Off</label>
//         </div>
//         <div className="btn-note">
//           <a href="#" className="btn">View Details</a>
//         </div>
//         <br />
//       </div>
//     </div>
//   );
// };

// export default NotificationPage;


import { useState } from 'react';

const NotificationPage = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  return (
    <div className="note">
      <h1>Notification Page</h1><br></br>
      <div className="notification-box">
        <div className="notification-title">Stay Updated with Travel</div>
        <div className="notification-content">
          <p>Welcome to Trawell - your ultimate travel companion!</p>
          <p>Stay informed about our latest offers, travel tips, and exciting destinations by enabling notifications.</p>
          <p>Get exclusive discounts, discover hidden gems, and plan your dream vacation with ease.</p>
          <p>Join our community of travelers and embark on unforgettable journeys!</p>
        </div><br></br>
        <div className="accordion">
          <button className="accordion-btn" id="accordionBtn" onClick={toggleAccordion}>
            FAQs
          </button><br></br>
          {accordionOpen && (
            <div className="accordion-content"><br></br>
              <p><strong>Q: How do I book a trip?</strong></p>
              <p>A: Booking a trip with Trawell is easy! Simply browse our website or app, select your desired destination and dates, choose your accommodations and activities, and proceed to checkout.</p><br></br>
              <p><strong>Q: Can I cancel or modify my booking?</strong></p>
              <p>A: Yes, you can cancel or modify your booking depending on the terms and conditions of your reservation. Please refer to your booking confirmation for more details or contact our customer support team for assistance.</p><br></br>
              <p><strong>Q: Do you offer travel insurance?</strong></p>
              <p>A: We partner with trusted insurance providers to offer travel insurance options for your convenience and peace of mind. You can add travel insurance during the booking process.</p><br></br>
            </div>
          )}
        </div>
        <br /><br />
        <div className="toggle-btn">
          <label className="switch">
            <input type="checkbox" id="notificationToggle" checked={notificationsEnabled} onChange={toggleNotifications} />
            <span className="slider round"></span>
          </label>
          <label htmlFor="notificationToggle">Turn Notifications On/Off</label>
        </div><br></br>
        <div className="btn-note">
          <button className="btn">View Details</button>
        </div>
        <br />
      </div>
    </div>
  );
};

export default NotificationPage;
