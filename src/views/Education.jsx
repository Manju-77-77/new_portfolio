import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const Education = () => {
  const theme = useContext(ThemeContext);
  const educationData = [
    {
      duration: "2021-2024",
      degree: "Bachelor of Computer Application",
      institution: "Rani Channamma University",
      grade: "First class distinction",

    },
    {
      duration: "2024-2026",
      degree: "Master of Computer Application",
      institution: "Alliance University",
      grade: "Currently pursuing",
    },
  ];

  return (
    <div
      className={
        theme.state.darkMode
          ? "pb-20 bg-gradient-to-b from-gray-100 to-gray-300"
          : "pb-20 bg-gradient-to-b from-black to-gray-800"
      }
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20"
        id="education"
      >
        <h2
          className={
            theme.state.darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center text-gray-800"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          Education
        </h2>
        <div>
          <h4 className="mt-16 text-3xl font-semibold text-blue-500 text-center">
            My Academic Journey
          </h4>
          <div className="mt-12 relative flex flex-col md:flex-row justify-center items-center gap-12">
            {/* Timeline Line */}
            <div className="absolute w-1 md:w-full md:h-1 bg-blue-500 rounded-full h-full md:h-1 left-1/2 transform -translate-x-1/2 md:left-0 md:top-1/2 md:-translate-y-1/2"></div>

            {educationData.map((edu, index) => (
              <div key={index} className="relative flex flex-col items-center md:flex-row md:items-center gap-6">
                {/* Timeline Dot */}
                <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white z-10"></div>

                {/* Education Card */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 50 },
                  }}
                  className={
                    theme.state.darkMode
                      ? "w-full md:w-80 p-6 bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col items-center"
                      : "w-full md:w-80 p-6 bg-gray-100 rounded-lg shadow-lg border border-gray-300 flex flex-col items-center"
                  }
                >
                  <h4 className="text-xl font-bold text-center text-gray-800">{edu.degree}</h4>
                  <p className="text-lg mt-2 text-center text-gray-600">{edu.institution}</p>
                  <p className="text-md mt-1 text-center text-gray-500">{edu.duration}</p>
                  <p className="text-md mt-1 text-center text-gray-500">
                    <span className="font-semibold">Grade: </span>{edu.grade}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;