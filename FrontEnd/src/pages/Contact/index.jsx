import React from 'react'

const index = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <h2 className="text-2xl font-bold text-white bg-blue-600 py-4 px-6 mb-4">Contact Us</h2>
        <form className="px-6 py-4">
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    placeholder="Enter your name"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    placeholder="Enter your email"
                    required
                />
            </div>
            <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    placeholder="Write your message"
                    required
                ></textarea>
            </div>
            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
            >
                Send Message
            </button>
        </form>
    </div>
</div>
  )
}

export default index