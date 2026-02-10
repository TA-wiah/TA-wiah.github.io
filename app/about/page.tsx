"use client";

import { motion } from "framer-motion";
import { FaRocket, FaBrain, FaUsers, FaLightbulb } from "react-icons/fa";
import { siteConfig } from "@/lib/constants";

export default function AboutPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {siteConfig.author.bio}
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Leadership & Vision
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              As the CEO & Founder of Hatchers Dev Studio and ARC Robotics Challenge, 
              I lead with a vision to transform businesses through technology and inspire 
              the next generation of engineers.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              My journey in technology started with a passion for solving real-world problems 
              through code. Today, I combine my technical expertise with entrepreneurial drive 
              to build innovative solutions and create opportunities for others.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Based in {siteConfig.author.location}, I work with teams globally to deliver 
              cutting-edge web applications, mobile apps, and IoT solutions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Core Values
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span><strong>Innovation:</strong> Pushing boundaries with creative solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span><strong>Excellence:</strong> Delivering quality in every project</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span><strong>Empowerment:</strong> Creating opportunities for others</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 mt-1">•</span>
                  <span><strong>Impact:</strong> Building solutions that matter</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-900/20 dark:to-primary-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Philosophy
              </h3>
              <p className="text-gray-600 dark:text-gray-400 italic">
                &quot;Code with purpose, lead with passion, innovate relentlessly&quot;
              </p>
            </div>
          </div>
        </motion.div>

        {/* Leadership Qualities */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Leadership Philosophy
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FaRocket,
                title: "Strategic Vision",
                description: "Setting clear goals and inspiring teams to achieve ambitious targets",
              },
              {
                icon: FaBrain,
                title: "Innovation First",
                description: "Encouraging creative thinking and embracing new technologies",
              },
              {
                icon: FaUsers,
                title: "Team Empowerment",
                description: "Building strong teams and fostering a culture of collaboration",
              },
              {
                icon: FaLightbulb,
                title: "Problem Solving",
                description: "Finding elegant solutions to complex technical challenges",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <item.icon className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Key Achievements
          </h2>
          <div className="max-w-3xl mx-auto">
            {siteConfig.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="relative pl-8 pb-12 border-l-2 border-primary-600 last:pb-0"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-primary-600 rounded-full -translate-x-[9px]"></div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <span className="text-primary-600 font-bold text-sm">
                    {achievement.year}
                  </span>
                  <h3 className="text-xl font-semibold mt-2 mb-2 text-gray-900 dark:text-white">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
