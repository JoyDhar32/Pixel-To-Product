import React, { useState } from 'react';

const CardDetails = () => {
    const [cardData, setCardData] = useState({
        cardNumber: '',
        cardholderName: '',
        expiryMonth: '',
        expiryYear: '',
        cvv: '',
      });
    
      const handleChange = (event) => {
        setCardData({ ...cardData, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Card details submitted:', cardData);
        // You can replace this with your actual payment processing logic
      };
  return (
    <>
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-80 mx-auto pb-16">
      <h2 className="text-lg font-medium mb-2">Payment Information</h2>
      <div className="flex flex-col">
        <label htmlFor="cardNumber" className="text-sm font-medium mb-1">
          Card Number
        </label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={cardData.cardNumber}
          onChange={handleChange}
          className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          maxLength="16" // Limit input to 16 characters for card number
          pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}" // Basic pattern for card number format (optional)
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="cardholderName" className="text-sm font-medium mb-1">
          Cardholder Name
        </label>
        <input
          type="text"
          id="cardholderName"
          name="cardholderName"
          value={cardData.cardholderName}
          onChange={handleChange}
          className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="expiryMonth" className="text-sm font-medium mb-1">
            Expiry Month
          </label>
          <input
            type="text"
            id="expiryMonth"
            name="expiryMonth"
            value={cardData.expiryMonth}
            onChange={handleChange}
            className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            maxLength="2" // Limit input to 2 characters for month
            placeholder="MM"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="expiryYear" className="text-sm font-medium mb-1">
            Expiry Year
          </label>
          <input
            type="text"
            id="expiryYear"
            name="expiryYear"
            value={cardData.expiryYear}
            onChange={handleChange}
            className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            maxLength="4" // Limit input to 4 characters for year
            placeholder="YYYY"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="cvv" className="text-sm font-medium mb-1">
          CVV
          <span className="text-xs text-gray-500">(3 digits at the back)</span>
        </label>
        <input
          type="text"
          id="cvv"
          name="cvv"
          value={cardData.cvv}
          onChange={handleChange}
          className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          maxLength="3" // Limit input to 3 characters for CVV
        />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-md px-4 py-2 disabled:opacity-50"
          >
            Pay Now
          </button>
        </form>
    
    </>
  )
}

export default CardDetails