import { Eye, Target, Heart, Award, TrendingUp, Shield, Users, Zap, Globe, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600 dark:from-primary-800 dark:via-secondary-800 dark:to-accent-800 text-white py-20 relative overflow-hidden">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-white">TechCorp</span></h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Pioneering technology solutions since 2010, empowering businesses to
            thrive in the digital age.
          </p>
        </motion.div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="text-gradient">Story</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Founded in 2010, TechCorp began with a simple mission: to bridge the
              gap between businesses and technology. What started as a small team of
              passionate developers has grown into a full-service technology
              solutions provider serving clients worldwide.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Today, we continue to push boundaries, embrace innovation, and deliver
              exceptional value to our clients. Our journey is driven by a
              commitment to excellence and a passion for transforming businesses
              through technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="flex items-center mb-4">
                <motion.div 
                  className="bg-gradient-to-br from-primary-500 to-primary-600 dark:from-primary-400 dark:to-primary-500 text-white p-3 rounded-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Eye className="h-8 w-8" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white ml-4">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To be the world's most trusted technology partner, recognized for
                innovation, excellence, and transformative impact on businesses
                across all industries. We envision a future where technology
                empowers every organization to achieve its full potential.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900/30 dark:to-secondary-800/30 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="flex items-center mb-4">
                <motion.div 
                  className="bg-gradient-to-br from-secondary-500 to-secondary-600 dark:from-secondary-400 dark:to-secondary-500 text-white p-3 rounded-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Target className="h-8 w-8" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white ml-4">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To deliver innovative, scalable, and secure technology solutions
                that drive business growth and create lasting value. We are
                committed to understanding our clients' unique challenges and
                crafting tailored solutions that exceed expectations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-accent-50 via-primary-50 to-secondary-50 dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we work with
              our clients and each other.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} whileHover={{ y: -10, scale: 1.05 }} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-2xl transition-all">
              <motion.div 
                className="bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Heart className="h-7 w-7 text-primary-600 dark:text-primary-400" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Client-Centric
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our clients' success is our success. We listen, understand, and
                deliver solutions that truly make a difference.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} whileHover={{ y: -10, scale: 1.05 }} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-2xl transition-all">
              <motion.div 
                className="bg-gradient-to-br from-secondary-100 to-secondary-200 dark:from-secondary-900 dark:to-secondary-800 w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Award className="h-7 w-7 text-secondary-600 dark:text-secondary-400" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We maintain the highest standards in everything we do, from code
                quality to customer service.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} whileHover={{ y: -10, scale: 1.05 }} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-2xl transition-all">
              <motion.div 
                className="bg-gradient-to-br from-accent-100 to-accent-200 dark:from-accent-900 dark:to-accent-800 w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <TrendingUp className="h-7 w-7 text-accent-600 dark:text-accent-400" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We embrace new technologies and creative approaches to solve
                complex challenges.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} whileHover={{ y: -10, scale: 1.05 }} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-2xl transition-all">
              <motion.div 
                className="bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Shield className="h-7 w-7 text-primary-600 dark:text-primary-400" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Integrity</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We build trust through transparency, honesty, and ethical business
                practices.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} whileHover={{ y: -10, scale: 1.05 }} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-2xl transition-all">
              <motion.div 
                className="bg-gradient-to-br from-secondary-100 to-secondary-200 dark:from-secondary-900 dark:to-secondary-800 w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Users className="h-7 w-7 text-secondary-600 dark:text-secondary-400" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Collaboration
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We work together as a team, valuing diverse perspectives and
                fostering open communication.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} whileHover={{ y: -10, scale: 1.05 }} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-2xl transition-all">
              <motion.div 
                className="bg-gradient-to-br from-accent-100 to-accent-200 dark:from-accent-900 dark:to-accent-800 w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Target className="h-7 w-7 text-accent-600 dark:text-accent-400" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Result-Focused
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We are committed to delivering measurable outcomes that drive real
                business value.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose <span className="text-gradient">TechCorp</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Numbers that speak to our commitment and success
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div 
              variants={itemVariants} 
              whileHover={{ y: -10, scale: 1.05 }} 
              className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all text-center"
            >
              <motion.div 
                className="bg-gradient-to-br from-primary-500 to-primary-600 dark:from-primary-400 dark:to-primary-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <UserCheck className="h-8 w-8 text-white" />
              </motion.div>
              <motion.h3 
                initial={{ scale: 1 }}
                whileInView={{ scale: [1, 1.2, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2"
              >
                500+
              </motion.h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                Happy Clients Worldwide
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Trusted by businesses across 40+ countries
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants} 
              whileHover={{ y: -10, scale: 1.05 }} 
              className="bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900/30 dark:to-secondary-800/30 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all text-center"
            >
              <motion.div 
                className="bg-gradient-to-br from-secondary-500 to-secondary-600 dark:from-secondary-400 dark:to-secondary-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Zap className="h-8 w-8 text-white" />
              </motion.div>
              <motion.h3 
                initial={{ scale: 1 }}
                whileInView={{ scale: [1, 1.2, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl font-bold text-secondary-600 dark:text-secondary-400 mb-2"
              >
                1000+
              </motion.h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                Projects Delivered
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                On time, on budget, exceeding expectations
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants} 
              whileHover={{ y: -10, scale: 1.05 }} 
              className="bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/30 dark:to-accent-800/30 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all text-center"
            >
              <motion.div 
                className="bg-gradient-to-br from-accent-500 to-accent-600 dark:from-accent-400 dark:to-accent-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Globe className="h-8 w-8 text-white" />
              </motion.div>
              <motion.h3 
                initial={{ scale: 1 }}
                whileInView={{ scale: [1, 1.2, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl font-bold text-accent-600 dark:text-accent-400 mb-2"
              >
                15+
              </motion.h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                Years of Excellence
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Industry-leading expertise since 2010
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
