import React from 'react'

const index = () => {
  return (
    <main className="">
     <div className="bg-gray-100 py-12 px-6">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
                <p className="text-lg text-gray-700 mb-8">
                    Welcome to <span className="font-semibold text-blue-600">Pixel To Product</span>, a cutting-edge 3D eCommerce platform that revolutionizes the way you shop online. Our website allows you to view and customize products in a 3D environment, ensuring every detail meets your exact specifications. From the smallest pixel to the final product, we provide an immersive and interactive shopping experience that lets you proceed with your purchases confidently.
                </p>
                <img
                    src="/images/about_us.jpeg" // Ensure this path points to an actual image in your public folder
                    alt="About Us"
                    className="w-full h-auto rounded-lg shadow-lg mb-8"
                />
                <p className="text-md text-gray-600">
                    At <span className="font-semibold text-blue-600">Pixel To Product</span>, we are committed to delivering top-quality products and exceptional customer service. Our advanced 3D customization tools empower you to bring your vision to life, ensuring you get exactly what you want. Join us in redefining the online shopping experience.
                </p>
            </div>
        </div>
        </main>
  )
}

export default index