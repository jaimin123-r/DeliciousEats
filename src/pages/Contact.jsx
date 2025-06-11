import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {toast} from 'react-hot-toast';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}

      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative bg-[url('contact-img.jpg')] bg-cover bg-center h-64"
      >
        <div className="mt-2 ml-2 text-xl flex items-center space-x-1">
          <Link to="/" className="underline hover:text-amber-900">
            Home
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-gray-800">Contact</span>
        </div>

       
      </motion.div> */}

      {/* Map Section */}
      <div className="container mx-auto px-4 -mt-20 mb-16">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        ></motion.div>
      </div>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Contact Form */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div whileTap={{ scale: 0.98 }} className="form-group">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                    />
                  </motion.div>
                  <motion.div whileTap={{ scale: 0.98 }} className="form-group">
                    <input
                      type="email"
                      placeholder="Enter email address"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                    />
                  </motion.div>
                </div>
                <motion.div whileTap={{ scale: 0.98 }} className="form-group">
                  <input
                    type="text"
                    placeholder="Enter Subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                  />
                </motion.div>
                <motion.div whileTap={{ scale: 0.98 }} className="form-group">
                  <textarea
                    rows="6"
                    placeholder="Enter Message"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                  ></textarea>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    toast.success('Message sent successfully');
                  }}
                  className="bg-gradient-to-r from-amber-600 to-amber-900 text-white px-8 py-3 rounded-lg hover:from-amber-700 hover:to-orange-900 transition-all"
                >
                  Send Message
                </motion.button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 mt-18">
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-start space-x-4"
              >
                <div className="bg-purple-100 p-4 rounded-lg">
                  <svg
                    className="w-6 h-6 text-amber-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Gujarat India.</h3>
                  <p className="text-gray-600">Bavla, Ahmedabad 382220</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-start space-x-4"
              >
                <div className="bg-purple-100 p-4 rounded-lg">
                  <svg
                    className="w-6 h-6 text-amber-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">+91 9876543210</h3>
                  <p className="text-gray-600">Mon to Fri 9am to 6pm</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex items-start space-x-4"
              >
                <div className="bg-purple-100 p-4 rounded-lg">
                  <svg
                    className="w-6 h-6 text-amber-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    jaiminrathod412@gmail.com
                  </h3>
                  <p className="text-gray-600">Send us your query anytime!</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
