import React, { useState } from 'react';
import { FaHome, FaInfoCircle, FaEnvelope, FaBars, FaTimes, FaSearch, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Typewriter from "typewriter-effect";
const Navbar = ({ setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: 'Home', icon: <FaHome />, onClick: () => setCurrentPage('home') },
    { name: 'About Us', icon: <FaInfoCircle />, onClick: () => setCurrentPage('about') },
    { name: 'Contact Us', icon: <FaEnvelope />, onClick: () => setCurrentPage('contact') },
  ];

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">CultureByte</div>
        <div className="hidden md:flex space-x-4">
          {navItems.map((item, index) => (
            <button
              key={index}
              className="flex items-center space-x-1 hover:text-gray-300"
              onClick={item.onClick}
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          {navItems.map((item, index) => (
            <button
              key={index}
              className="block w-full text-left py-2 px-4 hover:bg-gray-700"
              onClick={() => {
                item.onClick();
                setIsMenuOpen(false);
              }}
            >
              <span className="mr-2">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

const HomePage = () => {
  const foodItems = [
    { id: 1, name: 'Pizza', description: 'Delicious cheese pizza', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80' },
    { id: 2, name: 'Burger', description: 'Juicy beef burger', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80' },
    { id: 3, name: 'Sushi', description: 'Fresh sushi rolls', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80' },
    { id: 4, name: 'Pasta', description: 'Creamy pasta dish', image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">
      <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Welcome To CultureByte!!!")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Food Ambassador")
                        .start();
                }}
            />
      </h1>
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for food..."
            className="w-full p-2 pl-10 rounded border border-gray-300"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {foodItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600">{item.description}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AboutUsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="mb-4">
          FoodOrder is your go-to platform for delicious meals delivered right to your doorstep. We partner with the best local restaurants to bring you a wide variety of cuisines and flavors.
        </p>
        <p className="mb-4">
          Our mission is to make food ordering convenient, fast, and enjoyable for everyone. With our user-friendly platform, you can easily browse menus, customize your orders, and track your delivery in real-time.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <p className="mb-4">
          We're a dedicated team of food enthusiasts, tech experts, and customer service professionals working together to bring you the best food ordering experience possible.
        </p>
        <div className="flex space-x-4 mt-6">
          <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebook size={24} /></a>
          <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter size={24} /></a>
          <a href="#" className="text-pink-600 hover:text-pink-800"><FaInstagram size={24} /></a>
        </div>
      </div>
    </div>
  );
};

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a server
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Send Message
            </button>
          </form>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-2"><strong>Address:</strong> 123 Food Street, Tasty City, FL 12345</p>
          <p className="mb-2"><strong>Phone:</strong> (555) 123-4567</p>
          <p className="mb-2"><strong>Email:</strong> info@foodorder.com</p>
          <p className="mb-4"><strong>Hours:</strong> Monday - Friday: 9am - 5pm</p>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebook size={24} /></a>
            <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter size={24} /></a>
            <a href="#" className="text-pink-600 hover:text-pink-800"><FaInstagram size={24} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-gray-100">
      <HomePage setCurrentPage={setCurrentPage} />
      {currentPage === 'about' && <AboutUsPage />}
      {currentPage === 'contact' && <ContactUsPage />}
    </div>
  );
};

export default App;