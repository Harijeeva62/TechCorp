import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-secondary-900/20 to-accent-900/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <motion.div 
              className="flex items-center space-x-3 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="/logo.svg" 
                alt="TechCorp Logo" 
                className="h-10 w-10 object-contain flex-shrink-0"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent">
                TechCorp
              </span>
            </motion.div>
            <p className="text-gray-400 mb-4 max-w-md">
              Leading the way in innovative technology solutions. We help businesses
              transform their digital presence and achieve their goals.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }}>
                <Link to="/" className="hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link to="/about" className="hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link to="/services" className="hover:text-secondary-400 transition-colors">
                  Services
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link to="/contact" className="hover:text-accent-400 transition-colors">
                  Contact
                </Link>
              </motion.li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <motion.li 
                className="flex items-start space-x-2"
                whileHover={{ x: 5 }}
              >
                <MapPin className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span>123 Tech Street, San Francisco, CA 94105</span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-2"
                whileHover={{ x: 5 }}
              >
                <Phone className="h-5 w-5 text-secondary-500 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-2"
                whileHover={{ x: 5 }}
              >
                <Mail className="h-5 w-5 text-accent-500 flex-shrink-0" />
                <span>info@techcorp.com</span>
              </motion.li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} TechCorp. All rights reserved. Built with passion and innovation.</p>
        </div>
      </div>
    </footer>
  );
}
