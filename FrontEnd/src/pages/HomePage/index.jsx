// src/components/Slider.js
import React, { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Link } from "react-router-dom";
const slides = [

  {
    title: "Nike Air Force ",
    subtitle: "Sustainable Materials",
    highlight: "Unisex Shoes",
    description:
      "Discover the iconic Nike Air Force like never before. Immerse yourself in a cutting-edge 3D environment, allowing you to examine every detail of this legendary sneaker. Customize your Nike Air Force in real-time, choosing from an array of colors, materials, and design elements to craft a pair that truly reflects your unique style",
    buttonText: "Customize Now",
    buttonLink: "/shoes/airforce",
    imgSrc: "/images/nikeAir.png",
  },
  {
    title: "Perfect Casual Shoe",
    subtitle: "Comfort and Style for Everyday Wear",
    highlight: "Unisex Shoes",
    description:
      "Experience unparalleled comfort and style with our latest casual shoe, now viewable in a dynamic 3D environment. Explore every angle of this versatile footwear, crafted for your everyday adventures. Personalize your pair in real-time with a variety of color options, materials, and design features to create a look that's uniquely yours. Step into innovation and make a statement with shoes that are as adaptable as you are.",
    buttonText: "Customize Now",
    buttonLink: "/shoes/casual",
    imgSrc: "/images/Casual1.png",
  },
  // {
  //   title: "Our Unbeatable Trade-in Deal",
  //   subtitle: "Supper value deals",
  //   highlight: "On Beverage",
  //   description: "Quench your thirst with delightful sips of flavor! Experience the refreshing taste of our beverages, crafted with care.",
  //   buttonText: "Shop Now",
  //   buttonLink: "/product/category/beverage",
  //   imgSrc: "/assets/imgs/slider/beverages.png",
  // },
];


const index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col md:flex-row w-full h-auto md:h-full ">
            <div className="order-2 md:order-1 w-full md:w-1/2 flex items-center justify-center text-white p-10 text-center px-12">
              <div className="hero-slider-content-2">
                <h4 className="animated text-3xl text-center text-black font-bold">{slide.title}</h4>
                <h2 className="animated fw-900 text-black text-xl text-center">{slide.subtitle}</h2>
                <h1
                  className="animated fw-900 text-brand"
                  style={{ color: "#16542E" }}
                >
                  {slide.highlight}
                </h1>
                <p
                  className="animated my-4 text-center text-black"
                  style={{ color: "black", fontWeight: "bold" }}
                >
                  {slide.description}
                </p>
                <Link
                  className="animated btn btn-brush btn-brush-3 bg-purple-500 text-white px-4 py-2 rounded"
                  to={slide.buttonLink}
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2 w-full md:w-1/2 my-auto px-12">
              <img
                src={slide.imgSrc}
                alt="slide"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        ▶
      </button>
    </div>
  );
};

export default index;
