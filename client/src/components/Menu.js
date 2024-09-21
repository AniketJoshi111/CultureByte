import React from 'react'
import { useNavigate } from 'react-router-dom'

const Menu = () => {
    const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-8">
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <h2 className="text-xl font-semibold mb-4">Maharashtra</h2>
    <p className="text-gray-600 mb-4">Explore the vibrant flavors of Maharashtra!</p>
    <button
      className="px-4 py-2 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700"
      onClick={() => navigate('/region-maha')}
    >
      Explore Maharashtra
    </button>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <h2 className="text-xl font-semibold mb-4">South India</h2>
    <p className="text-gray-600 mb-4">Taste the rich flavors of South Indian cuisine!</p>
    <button
      className="px-4 py-2 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700"
      onClick={() => navigate('/region-south')}
    >
      Explore South India
    </button>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <h2 className="text-xl font-semibold mb-4">Rajasthan</h2>
    <p className="text-gray-600 mb-4">Discover the royal cuisine of Rajasthan!</p>
    <button
      className="px-4 py-2 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700"
      onClick={() => navigate('/region-rajasthan')}
    >
      Explore Rajasthan
    </button>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <h2 className="text-xl font-semibold mb-4">Gujarati</h2>
    <p className="text-gray-600 mb-4">Savor the sweet and tangy dishes of Gujarat!</p>
    <button
      className="px-4 py-2 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700"
      onClick={() => navigate('/region-gujrati')}
    >
      Explore Gujarat
    </button>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <h2 className="text-xl font-semibold mb-4">Punjabi</h2>
    <p className="text-gray-600 mb-4">Enjoy the hearty flavors of Punjab!</p>
    <button
      className="px-4 py-2 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700"
      onClick={() => navigate('/region-punjabi')}
    >
      Explore Punjab
    </button>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <h2 className="text-xl font-semibold mb-4">Bengali</h2>
    <p className="text-gray-600 mb-4">Dive into the rich seafood and sweets of Bengal!</p>
    <button
      className="px-4 py-2 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700"
      onClick={() => navigate('/region-bengali')}
    >
      Explore Bengal
    </button>
  </div>
</div>

  )
}

export default Menu
