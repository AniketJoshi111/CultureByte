import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cancel = () => {
    const navigate = useNavigate(); 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-emerald-300 to-cyan-200">
  <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg text-center">
    <svg
      className="w-24 h-24 text-red-500 mx-auto mb-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
    <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Cancelled</h1>
    <p className="text-gray-600 mb-6">
      Your payment was not completed. Please try again or contact support.
    </p>
    <button
      className="px-6 py-3 bg-red-500 text-transperant rounded-md shadow hover:bg-red-600 transition duration-300"
      onClick={() => navigate('/')}
    >
      Return to Home
    </button>
  </div>
</div>

  )
}

export default Cancel
