import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, source_code_link }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <a
        href={source_code_link}
        target="_blank" // Open the link in a new tab
        rel="noopener noreferrer"
        className='block' // Make the anchor a block-level element
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt={title}
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </a>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
       <div className="flex flex-col items-center">
        <motion.div variants={textVariant()} className={`${styles.sectionSubText} text-center`}>
          <p>Introduction</p>
          <p className={styles.sectionHeadText}>About me</p>
        </motion.div>
        
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-2 mb-20 text-secondary text-[17px] max-w-3xl leading-[30px] underline-space text-center'
        >
Highly motivated and self-taught career shifter, seeking to launch a career in testing or building web applications and services. Familiar with the development and testing processes for web-based technologies, I have obtained certifications in Software Testing and Web Development. I bring hands-on experience in both manual and automation testing, using Cypress as a Quality Engineer Intern at Achieve Without Borders.        </motion.p>
      </div>

      <div className="flex flex-col items-center">
        <motion.div variants={textVariant()} className={`${styles.sectionSubText} text-center`}>
          <p>Udemy & Coursera</p>
          <p className={styles.sectionHeadText}>Certifications</p>
        </motion.div>
        
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-2 text-secondary text-[17px] max-w-3xl leading-[30px] underline-space text-center'
        >
          Earning certificates on platforms like Coursera and Udemy has equipped me with a well-rounded skill set, covering testing methodologies and web technologies. This has enhanced my readiness for diverse roles in the dynamic tech landscape.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}></p>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
