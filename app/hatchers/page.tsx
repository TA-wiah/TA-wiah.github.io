"use client";

import { motion } from "framer-motion";
import { FaCode, FaMobile, FaMicrochip, FaPaintBrush, FaCheckCircle } from "react-icons/fa";
import { siteConfig } from "@/lib/constants";

const iconMap: { [key: string]: any } = {
  FaCode,
  FaMobile,
  FaMicrochip,
  FaPaintBrush,
};

export default function HatchersPage() {
  const { hatchers } = siteConfig.companies;

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            {hatchers.name}
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-400 mb-6">
            {hatchers.tagline}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {hatchers.description}
          </p>
        </motion.div>

        {/* Services */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {hatchers.services.map((service, index) => {
              const Icon = iconMap[service.icon] || FaCode;
              return (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <Icon className="w-12 h-12 text-primary-600 mb-4" />
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          className="mb-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-12 rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Why Choose Hatchers Dev Studio
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Expert team with years of experience",
              "Cutting-edge technologies and best practices",
              "Client-focused approach and communication",
              "On-time delivery and quality assurance",
              "Scalable and maintainable solutions",
              "Ongoing support and maintenance",
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <FaCheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700 dark:text-gray-300 text-lg">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Technologies We Use
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {siteConfig.techStack.frontend.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {siteConfig.techStack.backend.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-secondary-100 dark:bg-secondary-900 text-secondary-700 dark:text-secondary-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Mobile
              </h3>
              <div className="flex flex-wrap gap-2">
                {siteConfig.techStack.mobile.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Let&apos;s build something amazing together
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-secondary-700 transition-all shadow-lg"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
}
