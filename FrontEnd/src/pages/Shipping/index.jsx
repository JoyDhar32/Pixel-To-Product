import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import {useStateContext} from '../../contexts/contextprovider'

const index = () => {
const {user, token}= useStateContext();
if(!token){
    return <Navigate to={'/signin'} />
}
    const location = useLocation();
    const { state } = location;
    console.log(state);
  return (
    <>
    
<div className="my-16">
<div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap -mx-4">
        {/* User Info Form Column */}
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-xl font-bold mb-4">User Information</h2>
          <form>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="firstName">First Name</label>
              <input className="w-full px-3 py-2 border rounded-md" id="firstName" type="text" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="lastName">Last Name</label>
              <input className="w-full px-3 py-2 border rounded-md" id="lastName" type="text" />
            </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">Email Address</label>
              <input className="w-full px-3 py-2 border rounded-md" id="email" type="email" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="mobile">Mobile</label>
              <input className="w-full px-3 py-2 border rounded-md" id="mobile" type="tel" />
            </div>
            </div>
            <div className="grid md:grid-cols-3 md:gap-6">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="state">State</label>
              <input className="w-full px-3 py-2 border rounded-md" id="state" type="text" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="town">Town</label>
              <input className="w-full px-3 py-2 border rounded-md" id="town" type="text" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="suburb">Suburb</label>
              <input className="w-full px-3 py-2 border rounded-md" id="suburb" type="text" />
            </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="postalCode">Postal Code</label>
              <input className="w-full px-3 py-2 border rounded-md" id="postalCode" type="text" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="street">Street</label>
              <input className="w-full px-3 py-2 border rounded-md" id="street" type="text" />
            </div>
            </div>
            <button className="w-full bg-blue-500 text-white py-2 rounded-md" type="submit">Procced Checkout</button>
          </form>
        </div>
        {/* Order Details Column */}
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-xl font-bold mb-4">Order Details</h2>

          <div className="bg-white p-4 rounded-md shadow-md">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Product Name</h3>
              <p>{state.productName}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Total Price</h3>
              <p>${state.productPrice}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Size</h3>
              <p>{state.shoeSize}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">QTY</h3>
              <p>{state.shoeQty}</p>
            </div>
          </div>

</div>
        </div>
      </div>
    </div>
</div>

    </>
  )
}

export default index