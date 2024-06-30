# Pixel-To-Product

Pixel-To-Product is a 3D Full Stack Single Page Application (SPA) that allows users to view products in 3D, customize them in real-time, and make purchases directly through the platform.

![image](https://github.com/JoyDhar32/Pixel-To-Product/assets/54507249/8effaa5f-7d90-4b26-b319-8bd334ffb8ff)


![image](https://github.com/JoyDhar32/Pixel-To-Product/assets/54507249/a88401aa-5122-492e-8d9b-7c048b2e60d3)

## Features

- **3D Product Viewing:** View products from all angles in a dynamic 3D environment.
- **Real-time Customization:** Customize products with various options such as colors, materials, and designs.
- **Secure Checkout:** Integrated secure payment gateway for seamless purchase transactions.
- **User Authentication:** User registration and authentication system for personalized experiences.

## Technologies Used

- **Frontend:** React.js, Three.js (for 3D rendering), Tailwind CSS (for styling)
- **Backend:** Laravel, MySQL
- **Payment Gateway:** Stripe (or other payment services)
- **Deployment:** Vercel & Hostinger

## Getting Started

To run Pixel-To-Product locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone (https://github.com/JoyDhar32/Pixel-To-Product)
   cd pixel-to-product

2. # Install frontend dependencies
cd frontend
npm install

  # Install backend dependencies
cd ../backend
npm install
3. Set up environment variables:

Create a .env file in the server directory for environment variables such as database connection string, Stripe API keys


4. # Start frontend (runs on http://localhost:5173)
cd frontend
npm start

# Start backend (runs on http://localhost:8000)
cd ../backend
npm start
