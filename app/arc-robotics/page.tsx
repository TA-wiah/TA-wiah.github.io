"use client";

import { motion } from "framer-motion";
import { FaRobot, FaTrophy, FaUsers, FaGraduationCap, FaChartLine } from "react-icons/fa";
import { siteConfig } from "@/lib/constants";

export default function ARCRoboticsPage() {
  const { arc } = siteConfig.companies;

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
            {arc.name}
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-400 mb-6">
            {arc.tagline}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {arc.description}
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          className="mb-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-12 rounded-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Our Mission
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {arc.mission}
          </p>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Our Impact
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {arc.impact.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {stat.split(' ')[0]}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.split(' ').slice(1).join(' ')}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What We Offer */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FaTrophy,
                title: "Robotics Competitions",
                description: "Annual challenges where students design, build, and program robots to compete in exciting tasks.",
              },
              {
                icon: FaGraduationCap,
                title: "STEM Education",
                description: "Workshops and training programs covering robotics, programming, electronics, and engineering.",
              },
              {
                icon: FaRobot,
                title: "Hands-On Learning",
                description: "Practical experience with Arduino, sensors, motors, and embedded systems.",
              },
              {
                icon: FaUsers,
                title: "Team Building",
                description: "Collaborative projects that develop teamwork, communication, and problem-solving skills.",
              },
              {
                icon: FaChartLine,
                title: "Skill Development",
                description: "Progressive learning paths from beginner to advanced robotics and automation.",
              },
              {
                icon: FaGraduationCap,
                title: "Mentorship",
                description: "Guidance from experienced engineers and industry professionals.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                <item.icon className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Upcoming Events
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary-600 to-secondary-600 p-8 rounded-lg text-white shadow-lg">
              <div className="text-sm font-semibold mb-2">2026</div>
              <h3 className="text-2xl font-bold mb-4">ARC Robotics Challenge 2026</h3>
              <p className="mb-4">
                Join us for our biggest robotics competition yet! Students from across the region 
                will compete in autonomous navigation, line following, and object manipulation challenges.
              </p>
              <button className="px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Register Now
              </button>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="text-sm font-semibold text-primary-600 mb-2">Ongoing</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Robotics Workshops
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Monthly workshops covering Arduino programming, sensor integration, motor control, 
                and robot design. Open to all skill levels!
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-secondary-700 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Join the ARC Community
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re a student, educator, or robotics enthusiast, there&apos;s a place for you in ARC
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-secondary-700 transition-all shadow-lg"
          >
            Get Involved
          </a>
        </motion.div>
      </div>
    </div>
  );
}
