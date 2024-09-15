import React from 'react';

const ContactUs = () => {
  return (
    <section className="bg-sky-300 py-14 font-Madimi">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8 pt-1">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 shadow">
          <div className="bg-white p-8 ">
            <h2 className="text-xl font-bold mb-4 text-center pt-4">Feedback!</h2>
            <p className="text-gray-600 mb-6 text-center ">
              Have a question, feedback, or just want to say hello? We'd love to hear from you!
            </p>
            <ul className="flex justify-center space-x-6 gap-5 pt-3">
              <li>
                <span className="font-bold">Email:</span> <a href="mailto:support@gemini.com" className="underline text-decoration-none" >support@gemini.com</a>
              </li>
              <li>
                <span className="font-bold">Phone:</span> <a href="tel:+15551234567" className="underline text-decoration-none">+91-555-123-4567</a>
              </li>
              <li>
                <span className="font-bold ">Address:</span> Gokul Nagar , Katraj-Kondhwa Road,Pune.
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-center ">Send a Message</h2>
            <form action="/" method="POST">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2 pl-2">Name</label>
                <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Name" />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 text-md font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Email" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 text-md font-bold mb-2">How was the Service?</label>
                <textarea id="message" name="message" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24 resize-none" placeholder="Your Message" />
              </div>
              <button type="submit" className="text-center mx-auto">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;