import React, { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useStateContext } from "../../contexts/contextprovider";
import axios from "../../axiosClient";

const index = () => {
  const { user, token } = useStateContext();
  if (!token) {
    return <Navigate to={"/signup"} />;
  }
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const [order, setOrder] = useState({
    user_id: user.id,
    total: state.productPrice,
    status: "pending",
    product_name: state.productName,
    product_category: "shoes",
    quantity: state.shoeQty,
    product_details: state,
  });

  const [shippingdata, setShippingData] = useState({
    user_id: user.id,
    order_id: "",
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    state: "",
    city: "",
    suburb: "",
    postal_code: "",
    address: "",
  });

  const handleChange = (e) => {
    setShippingData({ ...shippingdata, [e.target.id]: e.target.value });
  };

  const OrderSubmitted = async (e) => {
    e.preventDefault();

    try {
      const orderResponse = await axios.post(
        "http://localhost:8000/api/order-store",
        order
      );
      console.log("Order submitted successfully", orderResponse.data);

      const shippingResponse = await axios.post(
        "http://localhost:8000/api/shipping-store",
        { ...shippingdata, order_id: orderResponse.data.id }
      );
      console.log("Shipping submitted successfully", shippingResponse.data);

      alert("Form submitted successfully");
      const finalTotal = order.total;
      const finalProductName = order.product_name;

      window.open(
        `http://127.0.0.1:8000/${finalProductName}/${finalTotal}`,
        "_blank"
      );
    } catch (error) {
      if (error.response && error.response.data) {
        console.error(error.response.data.errors);
      } else {
        console.error("There was an error submitting the form!", error);
      }
    }
  };

  return (
    <>
      <div className="my-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap -mx-4">
            {/* User Info Form Column */}
            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-xl font-bold mb-4">User Information</h2>
              <form onSubmit={OrderSubmitted}>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-medium mb-2"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      className="w-full px-3 py-2 border rounded-md"
                      id="first_name"
                      type="text"
                      value={shippingdata.first_name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-medium mb-2"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      required
                      className="w-full px-3 py-2 border rounded-md"
                      id="last_name"
                      type="text"
                      value={shippingdata.last_name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-medium mb-2"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      required
                      className="w-full px-3 py-2 border rounded-md"
                      id="email"
                      type="email"
                      value={shippingdata.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-medium mb-2"
                      htmlFor="mobile"
                    >
                      Mobile
                    </label>
                    <input
                      required
                      className="w-full px-3 py-2 border rounded-md"
                      id="mobile"
                      type="tel"
                      value={shippingdata.mobile}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-3 md:gap-6">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-medium mb-2"
                      htmlFor="state"
                    >
                      State
                    </label>
                    <input
                      required
                      className="w-full px-3 py-2 border rounded-md"
                      id="state"
                      type="text"
                      value={shippingdata.state}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-medium mb-2"
                      htmlFor="town"
                    >
                      City
                    </label>
                    <input
                      required
                      className="w-full px-3 py-2 border rounded-md"
                      id="city"
                      type="text"
                      value={shippingdata.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-medium mb-2"
                      htmlFor="suburb"
                    >
                      Suburb
                    </label>
                    <input
                      required
                      className="w-full px-3 py-2 border rounded-md"
                      id="suburb"
                      type="text"
                      value={shippingdata.suburb}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-medium mb-2"
                      htmlFor="postalCode"
                    >
                      Postal Code
                    </label>
                    <input
                      required
                      className="w-full px-3 py-2 border rounded-md"
                      id="postal_code"
                      type="text"
                      value={shippingdata.postal_code}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-medium mb-2"
                      htmlFor="street"
                    >
                      Address
                    </label>
                    <input
                      required
                      className="w-full px-3 py-2 border rounded-md"
                      id="address"
                      type="text"
                      value={shippingdata.address}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <button
                  className="w-full bg-blue-500 text-white py-2 rounded-md"
                  type="submit"
                >
                  Procced Checkout
                </button>
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
  );
};

export default index;
