/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaTimes,
  FaBars,
  FaSearch,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import TypewriterComponent from "typewriter-effect";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-gradient-to-tr from-emerald-300 to-cyan-200 font-Madimi">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="culture"
            src="/backgroundhome.jpeg"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main className="flex items-start justify-start px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="p-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 sm:text-3xl md:text-4xl">
              Welcome to CultureByte!
            </h1>

            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter
                  .typeString("Your Go to food platform")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Food as a Cultural Ambassador")
                  .start();
              }}
            />

            <p className="mt-4 text-lg text-gray-700">
              At CultureByte, we believe food is more than just a meal; it’s an
              experience. We are here to bring you authentic flavors from every
              corner of Maharashtra. Whether you're craving a spicy Kolhapuri
              dish or a sweet treat from Pune, we’ve got you covered.
            </p>

            <p className="mt-4 text-lg text-gray-700">
              Discover unique regional cuisines, savor traditional recipes, and
              explore the rich heritage behind every bite. From local street
              food to home-cooked delicacies, CultureByte is your gateway to
              Maharashtra's diverse culinary culture.
            </p>

            <p className="mt-4 text-lg text-gray-700">
              Order now and experience the best flavors, delivered right to your
              door!
            </p>

            <button
              className="mt-6 px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              onClick={() => navigate("/region-maha")}
            >
              Let's order
            </button>

            <p className="mt-8 text-lg font-semibold text-gray-900">
              Why Choose CultureByte?
            </p>

            <ul className="mt-4 text-lg text-gray-700 list-disc list-inside">
              <li>Wide variety of regional dishes from Maharashtra</li>
              <li>Fresh ingredients sourced from local vendors</li>
              <li>Authentic recipes crafted by expert chefs</li>
              <li>Fast and reliable delivery service</li>
              <li>Special discounts and offers for regular customers</li>
            </ul>

            <button
              className="mt-6 px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              onClick={() => navigate("/menu")}
            >
              Explore Our Menu
            </button>
          </div>
        </main>
      </div>
    </section>
  );
};

export default HomePage;
