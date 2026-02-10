"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaRocket, FaCode, FaRobot, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { siteConfig } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-secondary-600 to-primary-800 dark:from-primary-900 dark:via-secondary-900 dark:to-primary-950 animate-gradient"></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Jeffrey Tottimeh
          </motion.h1>
          
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold">
              CEO & Founder
            </span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold">
              Full Stack Developer
            </span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold">
              Innovator
            </span>
          </motion.div>

          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Building cutting-edge software solutions and empowering the next generation 
            of engineers through <span className="font-bold">Hatchers Dev Studio</span> and{" "}
            <span className="font-bold">ARC Robotics Challenge</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              href="/projects"
              className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <FaRocket />
              View Portfolio
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <FaEnvelope />
              Get in Touch
            </Link>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <FaCode className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">15+</h3>
              <p className="text-white/80">Production Apps</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <FaRobot className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">500+</h3>
              <p className="text-white/80">Students Empowered</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <FaRocket className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">2</h3>
              <p className="text-white/80">Companies Founded</p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-6 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/70 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-8 h-8" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/70 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
