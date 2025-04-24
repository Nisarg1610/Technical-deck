import React from 'react';
import { motion } from 'framer-motion';
interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (index: number) => void;
}
const Navigation = ({
  currentSlide,
  totalSlides,
  nextSlide,
  prevSlide,
  goToSlide
}: NavigationProps) => {
  return <motion.div initial={{
    y: 50
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.5
  }} className="bg-gray-800 p-4 border-t border-gray-700">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <motion.button whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }} onClick={prevSlide} disabled={currentSlide === 0} className={`px-4 py-2 rounded-md transition-colors duration-200 ${currentSlide === 0 ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
          Previous
        </motion.button>
        <div className="hidden md:flex space-x-1">
          {Array.from({
          length: totalSlides
        }).map((_, index) => <motion.button key={index} whileHover={{
          scale: 1.2
        }} whileTap={{
          scale: 0.9
        }} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-colors duration-200 ${currentSlide === index ? 'bg-blue-400' : 'bg-gray-600 hover:bg-gray-500'}`} aria-label={`Go to slide ${index + 1}`} />)}
        </div>
        <motion.div key={currentSlide} initial={{
        opacity: 0,
        y: 10
      }} animate={{
        opacity: 1,
        y: 0
      }} className="text-gray-400 md:hidden">
          {currentSlide + 1} / {totalSlides}
        </motion.div>
        <motion.button whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }} onClick={nextSlide} disabled={currentSlide === totalSlides - 1} className={`px-4 py-2 rounded-md transition-colors duration-200 ${currentSlide === totalSlides - 1 ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
          Next
        </motion.button>
      </div>
    </motion.div>;
};
export default Navigation;