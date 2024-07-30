// src/NewsletterSubscription.jsx
// import React from 'react';

const NewsletterSubscription = () => {
    return (
      <div>
        <h1>Newsletter Subscription</h1>
        <p>
          We are going to provide subscriptions for some special places and
          hotels/restaurants that are not easily found but are incredibly beautiful
          and comfortable. Subscribe now to stay updated!
        </p>
        <form id="newsletterForm">
          <label htmlFor="mail">Mail:</label>
          <input
            type="email"
            id="mail"
            name="mail"
            placeholder="Enter your mail"
            className="main"
          /><br /><br />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    );
  };
  
  export default NewsletterSubscription;
  