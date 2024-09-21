import React, { useState } from 'react';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form validation here
    // ...
    setSubmissionStatus('success');
  };

  return (
    <section className="bg-gray-100 py-14">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8 pt-1">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 shadow-md">
          <div className="bg-white p-8">
            <h2 className="text-xl font-bold mb-4 text-center pt-4">Feedback!</h2>
            <p className="text-gray-600 mb-6 text-center">
              Have a question, feedback, or just want to say hello? We'd love to hear from you!
            </p>
            <ul className="flex justify-center space-x-6 gap-5 pt-3">
              <li>
                <span className="font-bold">Email:</span><br/> <a href="mailto:culturebyte@gmail.com" className="underline text-decoration-none">culturebyte@gmail.com</a>
              </li>
              <li>
                <span className="font-bold">
                Address:</span>
                <br/>
                 Gokul Nagar , Katraj-Kondhwa Road,Pune.
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-center">Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2 pl-2">
                  Name
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Your Name"
                    aria-label="Name"
                  />
                </label>
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 text-md font-bold mb-2">
                  Email
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Your Email"
                    aria-label="Email"
                  />
                </label>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 text-md font-bold mb-2">
                  How was the Service?
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24 resize-none"
                    placeholder="Your Message"
                    aria-label="Message"
                  />
                </label>
              </div>
              <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                Send Message
              </button>
              {submissionStatus === 'success' && (
                <p className="text-green-600 text-center pt-4">Thank you for your message!</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;