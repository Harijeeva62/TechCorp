import { Code, Cloud, Smartphone, BarChart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description:
        'Custom web applications built with modern frameworks and technologies. From simple websites to complex enterprise solutions, we create scalable, secure, and high-performance web applications tailored to your needs.',
      features: [
        'Responsive design',
        'Modern frameworks (React, Vue, Angular)',
        'API integration',
        'Performance optimization',
      ],
      gradient: 'from-primary-500 to-primary-600',
      bgGradient: 'from-primary-50 to-primary-100',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description:
        'Comprehensive cloud infrastructure and migration services. We help you leverage the power of cloud computing with AWS, Azure, and Google Cloud to improve scalability, reduce costs, and enhance security.',
      features: [
        'Cloud migration',
        'Infrastructure setup',
        'DevOps automation',
        'Cloud security',
      ],
      gradient: 'from-secondary-500 to-secondary-600',
      bgGradient: 'from-secondary-50 to-secondary-100',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description:
        'Native and cross-platform mobile applications for iOS and Android. We build intuitive, feature-rich mobile apps that provide exceptional user experiences and drive engagement.',
      features: [
        'iOS & Android development',
        'Cross-platform solutions',
        'UI/UX design',
        'App store deployment',
      ],
      gradient: 'from-accent-500 to-accent-600',
      bgGradient: 'from-accent-50 to-accent-100',
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description:
        'Turn your data into actionable insights with our analytics solutions. We help you collect, analyze, and visualize data to make informed business decisions and drive growth.',
      features: [
        'Business intelligence',
        'Data visualization',
        'Predictive analytics',
        'Custom reporting',
      ],
      gradient: 'from-primary-500 via-secondary-500 to-accent-500',
      bgGradient: 'from-primary-50 via-secondary-50 to-accent-50',
    },
  ];

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600 dark:from-primary-800 dark:via-secondary-800 dark:to-accent-800 text-white py-20 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business
            and drive sustainable growth.
          </p>
        </motion.div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 via-primary-50/20 to-gray-50 dark:from-gray-900 dark:via-gray-850 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition-all p-8 relative overflow-hidden group"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.bgGradient} rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                  
                  <motion.div 
                    className={`bg-gradient-to-br ${service.gradient} w-16 h-16 rounded-xl flex items-center justify-center mb-6 relative z-10`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed relative z-10">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-6 relative z-10">
                    {service.features.map((feature, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center text-gray-700 dark:text-gray-300"
                      >
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full mr-3`}></div>
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 relative z-10"
                    >
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600 dark:from-primary-700 dark:via-secondary-700 dark:to-accent-700 rounded-2xl shadow-2xl p-12 text-center text-white relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{
                backgroundImage: [
                  'radial-gradient(circle at 20% 50%, white 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 50%, white 0%, transparent 50%)',
                  'radial-gradient(circle at 20% 50%, white 0%, transparent 50%)',
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            />
            <div className="relative z-10">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                Ready to Get Started?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
              >
                Let's discuss how our services can help you achieve your business
                goals. Contact us today for a free consultation.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg"
                >
                  Contact Us Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
