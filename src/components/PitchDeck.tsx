import React, { useState } from 'react';
import Slide from './Slide';
import Navigation from './Navigation';
import { AnimatePresence } from 'framer-motion';
const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
  // Title Slide
  {
    title: 'Nisarg Patel',
    content: <div className="text-center">
          <h2 className="text-2xl md:text-3xl text-blue-400 mb-4">
            Technical Support Specialist
          </h2>
          <p className="text-gray-300 mb-6">
            Bridging Technology and User Experience
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <p>nisargrpatel4@gmail.com</p>
            <p>905-598-6975</p>
            <p>linkedin.com/in/nisarg-patel-it/</p>
          </div>
        </div>
  },
  // Summary Slide
  {
    title: 'About Me',
    content: <div className="text-gray-300">
          <p className="mb-4">
            I'm a passionate IT professional who thrives on solving complex
            technical challenges and ensuring smooth technology operations. With
            a strong foundation in both hardware and software support, I
            specialize in creating efficient solutions that make technology work
            seamlessly for users.
          </p>
          <p className="mb-4">
            My expertise spans across modern IT infrastructure, from cloud
            services to network management, with a particular focus on
            delivering exceptional user support and maintaining critical
            systems.
          </p>
          <p>
            I take pride in my ability to translate complex technical concepts
            into understandable solutions, ensuring that technology serves its
            purpose effectively while maintaining high service standards.
          </p>
        </div>
  },
  // Skills Slide
  {
    title: 'Core Competencies',
    content: <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-blue-400 mb-2">Support Systems</h3>
            <p>
              Expert in modern service desk tools including BMC Remedy,
              ServiceNow, and Microsoft's suite of management tools (SCCM,
              Intune, Azure)
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-blue-400 mb-2">System Administration</h3>
            <p>
              Proficient across multiple platforms including Windows Server, Mac
              OS, and Linux environments
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-blue-400 mb-2">Cloud & Collaboration</h3>
            <p>
              Skilled in Office 365 ecosystem, SharePoint administration, and
              modern collaboration tools
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-blue-400 mb-2">Infrastructure</h3>
            <p>
              Strong background in networking fundamentals, security protocols,
              and hardware configuration
            </p>
          </div>
        </div>
  },
  // Experience Slide 1
  {
    title: 'Recent Impact',
    subtitle: 'Service Desk Analyst | WebX, Toronto',
    date: 'December 2023 - January 2025',
    content: <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>
            Led technical support initiatives achieving an outstanding 90%
            first-contact resolution rate
          </li>
          <li>
            Streamlined ticket management processes to enhance response
            efficiency
          </li>
          <li>
            Spearheaded remote support solutions for hybrid work environments
          </li>
          <li>
            Managed a successful Windows 11 deployment affecting 80,000+ users
          </li>
          <li>Implemented robust Active Directory management protocols</li>
        </ul>
  },
  // Experience Slide 2
  {
    title: 'Foundation Building',
    subtitle: 'Junior Technical Support Analyst | WebX, Toronto',
    date: 'Oct 2022 - Dec 2023',
    content: <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>
            Built and optimized hardware configurations for maximum performance
          </li>
          <li>Developed efficient workflows for common support scenarios</li>
          <li>Executed seamless data migration projects</li>
          <li>Contributed to cloud transformation initiatives</li>
          <li>
            Maintained exemplary service standards with 90% SLA compliance
          </li>
        </ul>
  },
  // Projects Slide
  {
    title: 'Innovation Highlights',
    content: <div className="space-y-6 text-gray-300">
          <div>
            <h3 className="text-xl text-blue-400 mb-2">
              Workflow Automation Pioneer
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Created innovative automated solutions using Microsoft Power
                Platform
              </li>
              <li>
                Revolutionized scheduling efficiency through smart calendar
                integration
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl text-blue-400 mb-2">
              Network Architecture Specialist
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Architected sophisticated VLAN solutions for improved network
                segmentation
              </li>
              <li>Implemented enterprise-grade network management protocols</li>
            </ul>
          </div>
        </div>
  },
  // Achievements Slide
  {
    title: 'By the Numbers',
    content: <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-gray-800 p-5 rounded-lg flex flex-col items-center">
            <div className="text-4xl text-blue-400 font-bold mb-4">80K+</div>
            <p className="text-gray-300">
              Users successfully transitioned to Windows 11
            </p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg flex flex-col items-center">
            <div className="text-4xl text-blue-400 font-bold mb-4">90%</div>
            <p className="text-gray-300">First-contact resolution rate</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg flex flex-col items-center">
            <div className="text-4xl text-blue-400 font-bold mb-4">200+</div>
            <p className="text-gray-300">
              Systems optimized for peak performance
            </p>
          </div>
        </div>
  },
  // Education & Certification Slide
  {
    title: 'Professional Development',
    content: <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-5 rounded-lg">
            <h3 className="text-xl text-blue-400 mb-3">Academic Foundation</h3>
            <p className="font-bold text-gray-200">
              Computer System Technology
            </p>
            <p className="text-gray-300">
              Specialized in Software Development & Networking
            </p>
            <p className="text-gray-400 mt-2">Sheridan College, Ontario</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg">
            <h3 className="text-xl text-blue-400 mb-3">Industry Recognition</h3>
            <ul className="list-disc pl-5 text-gray-300 space-y-1">
              <li>Advanced Customer Service Excellence</li>
              <li>Technical Support Specialist Certification</li>
              <li>Cisco Network Associate Training</li>
              <li>Microsoft Device Management Expert</li>
            </ul>
          </div>
        </div>
  },
  // Contact Slide
  {
    title: "Let's Connect",
    content: <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-4">Nisarg Patel</h2>
          <p className="text-xl text-blue-400 mb-6">
            Building Tomorrow's IT Solutions
          </p>
          <div className="space-y-3 text-gray-300">
            <p>Email: nisargrpatel4@gmail.com</p>
            <p>Phone: 905-598-6975</p>
            <p>LinkedIn: linkedin.com/in/nisarg-patel-it/</p>
          </div>
          <div className="mt-8 text-gray-400">
            <p>Ready to make an impact on your team</p>
          </div>
        </div>
  }];
  const nextSlide = () => {
    setCurrentSlide(prev => prev === slides.length - 1 ? prev : prev + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(prev => prev === 0 ? prev : prev - 1);
  };
  return <div className="w-full min-h-screen bg-gray-900 flex flex-col">
      <AnimatePresence mode="wait">
        <div className="flex-1 flex flex-col">
          <Slide key={currentSlide} title={slides[currentSlide].title} subtitle={slides[currentSlide].subtitle} date={slides[currentSlide].date} content={slides[currentSlide].content} />
        </div>
      </AnimatePresence>
      <Navigation currentSlide={currentSlide} totalSlides={slides.length} nextSlide={nextSlide} prevSlide={prevSlide} goToSlide={index => setCurrentSlide(index)} />
    </div>;
};
export default PitchDeck;