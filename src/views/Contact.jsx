import React, { useContext, useEffect, useRef, useState } from "react";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={sectionRef}
      id="contact"
      className={
        darkMode
          ? "pt-3 md:min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 flex items-center justify-center"
          : "pt-3 md:min-h-screen bg-gradient-to-b from-black to-gray-800 flex items-center justify-center"
      }
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4 py-8 w-full">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold text-center mb-8 text-gray-800"
              : "text-5xl font-bold text-center mb-8 text-white"
          }
        >
          Contact
        </h2>

        <div className="text-left mb-8">
          <h4 className="text-3xl font-semibold text-blue-500 mb-4 relative inline-block">
            Connect with me
            <span className="absolute bottom-[-8px] left-0 w-24 h-1 bg-blue-500 rounded-full"></span>
          </h4>
          <p
            className={
              darkMode
                ? "text-gray-600 text-xl max-w-2xl"
                : "text-gray-400 text-xl max-w-2xl"
            }
          >
            If you want to know more about me or my work, or if you would just
            like to say hello, send me a message. I'd love to hear from you.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-6">
          <motion.div
            className="w-full flex flex-col md:flex-row justify-between items-start gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Email */}
            <motion.div
              variants={itemVariants}
              className="w-full md:w-1/3 text-center md:text-left"
            >
              <h1
                className={
                  darkMode
                    ? "text-4xl font-bold text-gray-800"
                    : "text-4xl font-bold text-white"
                }
              >
                Email
              </h1>
              <p className="mt-4 text-lg font-semibold text-blue-700 uppercase transition-all duration-300 hover:scale-105 hover:text-blue-500">
                manjuhiremath345@gmail.com
              </p>
            </motion.div>

            {/* Address */}
            <motion.div
              variants={itemVariants}
              className="w-full md:w-1/3 text-center md:text-left"
            >
              <h1
                className={
                  darkMode
                    ? "text-4xl font-bold text-gray-800"
                    : "text-4xl font-bold text-white"
                }
              >
                Address
              </h1>
              <p className="mt-4 text-lg font-semibold text-blue-700 uppercase transition-all duration-300 hover:scale-105 hover:text-blue-500">
                Belagavi, Karnataka
                <br />
                India
              </p>
            </motion.div>

            {/* Social */}
            <motion.div
              variants={itemVariants}
              className="w-full md:w-1/3 text-center md:text-left"
            >
              <h1
                className={
                  darkMode
                    ? "text-4xl font-bold text-gray-800"
                    : "text-4xl font-bold text-white"
                }
              >
                Social
              </h1>
              <ul className="flex mt-4 justify-center md:justify-start">
                {contactLinks.map((el, index) => (
                  <a
                    key={index}
                    href={el.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 transition-all duration-300 hover:scale-125 hover:rotate-12"
                    style={{
                      marginRight:
                        index === contactLinks.length - 1 ? "0" : "1.5rem",
                    }}
                  >
                    <img alt={el.name} src={el.url} className="w-10 h-10" />
                  </a>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Fixed Send Email Button */}
        {isVisible && (
          <motion.div
            className="fixed bottom-8 right-8 z-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-end">
              <a
                href="mailto:manjuhiremath345@gmail.com"
                className="relative text-xl font-semibold text-blue-600 hover:text-blue-400 transition-colors duration-300 group"
              >
                Send me email directly
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Contact;
