// import { useState, FormEvent, useEffect } from 'react';
// import { Mail, Phone, MapPin, Send } from 'lucide-react';
// import { supabase } from '../lib/supabase';
// import { motion } from 'framer-motion';
// import GoogleMap from '../components/GoogleMap';

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [isMapLoaded, setIsMapLoaded] = useState(false);

//   useEffect(() => {
//     // Load Google Maps script
//     const script = document.createElement('script');
//     script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY`;
//     script.async = true;
//     script.defer = true;
//     script.onload = () => setIsMapLoaded(true);
//     document.head.appendChild(script);

//     return () => {
//       // Cleanup on unmount
//       const existingScript = document.querySelector(`script[src*="maps.googleapis.com"]`);
//       if (existingScript) {
//         document.head.removeChild(existingScript);
//       }
//     };
//   }, []);

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setStatus('submitting');
//     setErrorMessage('');

//     try {
//       const { error } = await supabase
//         .from('contact_submissions')
//         .insert([formData]);

//       if (error) throw error;

//       setStatus('success');
//       setFormData({ name: '', email: '', message: '' });

//       setTimeout(() => {
//         setStatus('idle');
//       }, 5000);
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       setStatus('error');
//       setErrorMessage('Failed to submit form. Please try again.');
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   return (
//     <div>
//       <section className="bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600 text-white py-20 relative overflow-hidden">
//         <motion.div 
//           className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.3, 0.5, 0.3],
//           }}
//           transition={{
//             duration: 5,
//             repeat: Infinity,
//             repeatType: "reverse",
//           }}
//         />
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
//           <p className="text-xl text-white/90 max-w-3xl mx-auto">
//             Get in touch with us to discuss your project or learn more about our
//             services.
//           </p>
//         </motion.div>
//       </section>

//       <section className="py-20 bg-gradient-to-br from-gray-50 via-primary-50/20 to-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-12">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <h2 className="text-3xl font-bold text-gray-900 mb-6">
//                 Let's <span className="text-gradient">Talk</span>
//               </h2>
//               <p className="text-lg text-gray-600 mb-8">
//                 Have a question or want to work together? Fill out the form and
//                 we'll get back to you as soon as possible.
//               </p>

//               <div className="space-y-6">
//                 <motion.div 
//                   variants={itemVariants}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                   whileHover={{ x: 10 }}
//                   className="flex items-start"
//                 >
//                   <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-3 rounded-lg">
//                     <MapPin className="h-6 w-6 text-primary-600" />
//                   </div>
//                   <div className="ml-4">
//                     <h3 className="text-lg font-semibold text-gray-900 mb-1">
//                       Address
//                     </h3>
//                     <p className="text-gray-600">
//                       123 Tech Street
//                       <br />
//                       San Francisco, CA 94105
//                     </p>
//                   </div>
//                 </motion.div>

//                 <motion.div 
//                   variants={itemVariants}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.1 }}
//                   whileHover={{ x: 10 }}
//                   className="flex items-start"
//                 >
//                   <div className="bg-gradient-to-br from-secondary-100 to-secondary-200 p-3 rounded-lg">
//                     <Phone className="h-6 w-6 text-secondary-600" />
//                   </div>
//                   <div className="ml-4">
//                     <h3 className="text-lg font-semibold text-gray-900 mb-1">
//                       Phone
//                     </h3>
//                     <p className="text-gray-600">+1 (555) 123-4567</p>
//                   </div>
//                 </motion.div>

//                 <motion.div 
//                   variants={itemVariants}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.2 }}
//                   whileHover={{ x: 10 }}
//                   className="flex items-start"
//                 >
//                   <div className="bg-gradient-to-br from-accent-100 to-accent-200 p-3 rounded-lg">
//                     <Mail className="h-6 w-6 text-accent-600" />
//                   </div>
//                   <div className="ml-4">
//                     <h3 className="text-lg font-semibold text-gray-900 mb-1">
//                       Email
//                     </h3>
//                     <p className="text-gray-600">info@techcorp.com</p>
//                   </div>
//                 </motion.div>
//               </div>

//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.3 }}
//                 className="mt-8 bg-white p-6 rounded-xl shadow-lg"
//               >
//                 <h3 className="text-lg font-semibold text-gray-900 mb-3">
//                   Business Hours
//                 </h3>
//                 <div className="space-y-2 text-gray-600">
//                   <div className="flex justify-between">
//                     <span>Monday - Friday:</span>
//                     <span className="font-medium text-primary-600">9:00 AM - 6:00 PM</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Saturday:</span>
//                     <span className="font-medium text-secondary-600">10:00 AM - 4:00 PM</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Sunday:</span>
//                     <span className="font-medium text-gray-400">Closed</span>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="bg-white p-8 rounded-2xl shadow-xl"
//             >
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                 Send us a <span className="text-gradient">message</span>
//               </h3>

//               {status === 'success' && (
//                 <motion.div 
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="mb-6 p-4 bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg text-green-800"
//                 >
//                   Thank you for contacting us! We'll get back to you soon.
//                 </motion.div>
//               )}

//               {status === 'error' && (
//                 <motion.div 
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="mb-6 p-4 bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-lg text-red-800"
//                 >
//                   {errorMessage}
//                 </motion.div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.1 }}
//                 >
//                   <label
//                     htmlFor="name"
//                     className="block text-sm font-medium text-gray-700 mb-2"
//                   >
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     required
//                     value={formData.name}
//                     onChange={(e) =>
//                       setFormData({ ...formData, name: e.target.value })
//                     }
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
//                     placeholder="Your name"
//                   />
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.2 }}
//                 >
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-gray-700 mb-2"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     required
//                     value={formData.email}
//                     onChange={(e) =>
//                       setFormData({ ...formData, email: e.target.value })
//                     }
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
//                     placeholder="your.email@example.com"
//                   />
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.3 }}
//                 >
//                   <label
//                     htmlFor="message"
//                     className="block text-sm font-medium text-gray-700 mb-2"
//                   >
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     required
//                     rows={6}
//                     value={formData.message}
//                     onChange={(e) =>
//                       setFormData({ ...formData, message: e.target.value })
//                     }
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
//                     placeholder="Tell us about your project..."
//                   />
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-3">
//                   Business Hours
//                 </h3>
//                 <div className="space-y-2 text-gray-600">
//                   <div className="flex justify-between">
//                     <span>Monday - Friday:</span>
//                     <span className="font-medium">9:00 AM - 6:00 PM</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Saturday:</span>
//                     <span className="font-medium">10:00 AM - 4:00 PM</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Sunday:</span>
//                     <span className="font-medium">Closed</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white p-8 rounded-2xl shadow-lg">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                 Send us a message
//               </h3>

//               {status === 'success' && (
//                 <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
//                   Thank you for contacting us! We'll get back to you soon.
//                 </div>
//               )}

//               {status === 'error' && (
//                 <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
//                   {errorMessage}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="block text-sm font-medium text-gray-700 mb-2"
//                   >
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     required
//                     value={formData.name}
//                     onChange={(e) =>
//                       setFormData({ ...formData, name: e.target.value })
//                     }
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
//                     placeholder="Your name"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-gray-700 mb-2"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     required
//                     value={formData.email}
//                     onChange={(e) =>
//                       setFormData({ ...formData, email: e.target.value })
//                     }
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
//                     placeholder="your.email@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="message"
//                     className="block text-sm font-medium text-gray-700 mb-2"
//                   >
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     required
//                     rows={6}
//                     value={formData.message}
//                     onChange={(e) =>
//                       setFormData({ ...formData, message: e.target.value })
//                     }
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
//                     placeholder="Tell us about your project..."
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={status === 'submitting'}
//                   className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center"
//                 >
//                   {status === 'submitting' ? (
//                     'Sending...'
//                   ) : (
//                     <>
//                       Send Message
//                       <Send className="ml-2 h-5 w-5" />
//                     </>
//                   )}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-12 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="bg-gray-200 rounded-2xl overflow-hidden h-96">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977893351207!2d-122.39868668468204!3d37.79240797975806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807d3e8c51b9%3A0x875e28cc1f0f8a4d!2s123%20Market%20St%2C%20San%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
