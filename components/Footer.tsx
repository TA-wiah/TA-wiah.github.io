"use client";

import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube, FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa";
import { siteConfig } from "@/lib/constants";

const socialLinks = [
  { icon: FaTwitter, href: siteConfig.social.twitter, label: "Twitter" },
  { icon: FaLinkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: FaGithub, href: siteConfig.social.github, label: "GitHub" },
  { icon: FaYoutube, href: siteConfig.social.youtube, label: "YouTube" },
  { icon: FaInstagram, href: siteConfig.social.instagram, label: "Instagram" },
  { icon: FaTiktok, href: siteConfig.social.tiktok, label: "TikTok" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Jeffrey Tottimeh
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              CEO & Founder of Hatchers Dev Studio and ARC Robotics Challenge. 
              Building innovative solutions that transform businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/hatchers" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Hatchers Dev Studio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Connect
            </h3>
            <div className="flex items-center space-x-2 mb-4">
              <FaEnvelope className="text-primary-600" />
              <a 
                href={`mailto:${siteConfig.author.email}`}
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {siteConfig.author.email}
              </a>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} Jeffrey Tottimeh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
