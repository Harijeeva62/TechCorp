import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Zap, CheckCircle, TrendingUp, Shield, Bell, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div>
      <section className="relative bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600 dark:from-primary-800 dark:via-secondary-800 dark:to-accent-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10 dark:bg-black/30"></div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10"
        >
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              Transform Your Business with Innovative Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl mb-8 text-white/90"
            >
              We deliver cutting-edge technology solutions that drive growth and
              success for businesses worldwide.
            </motion.p>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg"
                >
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-colors border-2 border-white"
                >
                  Get Started
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
        
        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </section>

      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose <span className="text-gradient">TechCorp</span>?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We combine expertise, innovation, and dedication to deliver
              exceptional results for our clients.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} whileHover={{ y: -10 }} className="text-center p-6 rounded-xl hover:shadow-2xl transition-all bg-white dark:bg-gray-800 border border-primary-100 dark:border-primary-900">
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 text-primary-600 dark:text-primary-400 rounded-full mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Target className="h-8 w-8" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Result-Driven
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We focus on delivering measurable results that align with your
                business objectives and drive real impact.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} whileHover={{ y: -10 }} className="text-center p-6 rounded-xl hover:shadow-2xl transition-all bg-white dark:bg-gray-800 border border-secondary-100 dark:border-secondary-900">
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary-100 to-secondary-200 dark:from-secondary-900 dark:to-secondary-800 text-secondary-600 dark:text-secondary-400 rounded-full mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Users className="h-8 w-8" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Expert Team
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our team of experienced professionals brings diverse skills and
                innovative thinking to every project.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} whileHover={{ y: -10 }} className="text-center p-6 rounded-xl hover:shadow-2xl transition-all bg-white dark:bg-gray-800 border border-accent-100 dark:border-accent-900">
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent-100 to-accent-200 dark:from-accent-900 dark:to-accent-800 text-accent-600 dark:text-accent-400 rounded-full mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Zap className="h-8 w-8" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Fast Delivery
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We utilize agile methodologies and modern tools to deliver
                high-quality solutions quickly and efficiently.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                About <span className="text-gradient">TechCorp</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                With over a decade of experience in the technology industry, we've
                helped hundreds of businesses achieve their digital transformation
                goals. Our commitment to excellence and innovation sets us apart.
              </p>
              <ul className="space-y-4">
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Over 500 successful projects delivered
                  </span>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start"
                >
                  <CheckCircle className="h-6 w-6 text-secondary-600 dark:text-secondary-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    98% client satisfaction rate
                  </span>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-start"
                >
                  <CheckCircle className="h-6 w-6 text-accent-600 dark:text-accent-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Award-winning team of experts
                  </span>
                </motion.li>
              </ul>
              <motion.div whileHover={{ x: 10 }}>
                <Link
                  to="/about"
                  className="inline-flex items-center mt-8 text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300"
                >
                  Learn more about us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl relative overflow-hidden border border-gray-100 dark:border-gray-700"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                {/* Gradient Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-secondary-500/5 to-accent-500/5 dark:from-primary-500/10 dark:via-secondary-500/10 dark:to-accent-500/10"></div>
                
                {/* Content */}
                <div className="relative p-8">
                  {/* Title */}
                  <motion.h3 
                    className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    Platform <span className="text-gradient">Highlights</span>
                  </motion.h3>

                  {/* Features Grid */}
                  <div className="space-y-6">
                    {/* Real-time IPO Market Data */}
                    <motion.div
                      className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 border border-primary-200 dark:border-primary-700/30"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg">
                          <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Real-time IPO Market Data</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Live updates and insights</p>
                      </div>
                    </motion.div>

                    {/* Secure Investment Platform */}
                    <motion.div
                      className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-800/20 border border-secondary-200 dark:border-secondary-700/30"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary-500 to-secondary-600 flex items-center justify-center shadow-lg">
                          <Shield className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Secure Investment Platform</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Bank-grade security</p>
                      </div>
                    </motion.div>

                    {/* Smart IPO Alerts */}
                    <motion.div
                      className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20 border border-accent-200 dark:border-accent-700/30"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center shadow-lg">
                          <Bell className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Smart IPO Alerts</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Never miss an opportunity</p>
                      </div>
                    </motion.div>

                    {/* Easy Online IPO Application */}
                    <motion.div
                      className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border border-primary-200 dark:border-primary-700/30"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg">
                          <FileCheck className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Easy Online IPO Application</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Simple & hassle-free</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Bottom Glow Effect */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 blur-xl opacity-50"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
