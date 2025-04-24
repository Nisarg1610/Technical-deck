import React from 'react';
import { motion } from 'framer-motion';
interface SlideProps {
  title: string;
  subtitle?: string;
  date?: string;
  content: React.ReactNode;
}
const Slide = ({
  title,
  subtitle,
  date,
  content
}: SlideProps) => {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} exit={{
    opacity: 0,
    y: -20
  }} transition={{
    duration: 0.5
  }} className="w-full flex-1 flex flex-col p-6 md:p-12">
      <div className="max-w-5xl w-full mx-auto flex-1 flex flex-col">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.2,
        duration: 0.5
      }} className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">{title}</h1>
          {subtitle && <h2 className="text-xl md:text-2xl text-blue-400 mt-2">
              {subtitle}
            </h2>}
          {date && <p className="text-gray-400 mt-1">{date}</p>}
        </motion.div>
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.4,
        duration: 0.5
      }} className="flex-1 flex items-center">
          <div className="w-full">{content}</div>
        </motion.div>
      </div>
    </motion.div>;
};
export default Slide;