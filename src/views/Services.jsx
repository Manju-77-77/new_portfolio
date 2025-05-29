import React, { useContext } from "react";
import { serviceData } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const Services = () => {
  const theme = useContext(ThemeContext);

  // Container animation for staggering children
  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.3, // Stagger each child by 0.3 seconds
      },
    },
    hidden: {},
  };

  // Animation for individual service cards
  const cardVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
    },
  };

  return (
    <div
      className={
        theme.state.darkMode
          ? "pb-20 bg-gray-100 relative"
          : "pb-20 bg-black relative"
      }
    >
      {/* Subtle overlay effect */}
      <div
        className={
          theme.state.darkMode
            ? "absolute inset-0 border-t-4 border-b-4 border-blue-500 opacity-20"
            : "absolute inset-0 border-t-4 border-b-4 border-blue-500 opacity-10"
        }
      ></div>
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10"
        id="services"
      >
        <h2
          className={
            theme.state.darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center text-gray-800"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          Services
        </h2>
        <div>
          <h4 className="mt-16 text-3xl font-semibold text-blue-500 text-center relative">
            What I Provide
            {/* Decorative underline */}
            <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500 rounded-full"></span>
          </h4>
          <motion.div
            className="mt-8 flex flex-col md:flex-row justify-center gap-8 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} // Animate only once when in view
            variants={containerVariants}
          >
            {serviceData.map((el) => (
              <motion.div
                key={el.name}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: theme.state.darkMode
                    ? "0px 10px 20px rgba(0, 0, 0, 0.2)"
                    : "0px 10px 20px rgba(255, 255, 255, 0.1)",
                  transition: { duration: 0.3 },
                }}
                className={
                  theme.state.darkMode
                    ? "md:w-96 w-full h-[400px] p-6 bg-white rounded-lg flex flex-col items-center mt-8 shadow-md border-t-4 border-blue-500"
                    : "md:w-96 w-full h-[400px] p-6 bg-gray-100 rounded-lg flex flex-col items-center mt-8 shadow-md border-t-4 border-blue-500"
                }
              >
                <img src={el.img} alt={el.name} className="w-16 h-16" />
                <h4 className="text-xl font-bold mt-4 text-center text-gray-800">
                  {el.name}
                </h4>
                <p className="text-lg mt-2 text-justify flex-1 overflow-y-auto text-gray-600">
                  {el.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;