import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "CHAT-TALK",
    description:
      "Designed and implemented a scalable and interactive Java-based Chat Room application using APIs and socket programming, enabling multiple users to join rooms, exchange messages, share media files, and initiate voice/video calls in real-time.",
    image:
      "https://static.vecteezy.com/system/resources/previews/011/875/478/original/meet-of-team-of-people-for-talk-dialog-communication-discussion-business-relationship-discuss-problems-together-exchange-opinions-of-team-worker-support-group-illustration-vector.jpg",
    link: "https://github.com/Manju-77-77/Chat-Talk.git",
  },

  {
  title: "CODE-TOGETHER",
  description:
    "Developed a collaborative code editor web application that allows multiple users to write, edit, and visualize code execution in real-time. Features include syntax highlighting, code execution analysis, step-by-step visual debugging, and an interactive UI for teamwork in programming.",
  image:
    "https://c8.alamy.com/comp/2M1DE2A/people-characters-developing-new-software-on-laptop-developers-team-programming-and-coding-program-code-together-development-process-concept-isomet-2M1DE2A.jpg",
  link: "https://github.com/Manju-77-77/Code-Together.git",
 },

  {
    title: "TASK-MANAGER ReactJs Project",
    description:
      "Developed a cloud-based Task Management web application using the MERN stack (MongoDB, Express.js, React.js, Node.js), enabling administrators to assign tasks to users and track their progress across different states — To Do, In Progress, and Completed. The system offers a clean, user-friendly interface that enhances productivity, team collaboration, and task visibility in real-time.",
    image:
      "https://peoplehrindia.com/Images/feature/task-management.jpg",
    link: "https://github.com/Manju-77-77/TaskManager.git",
  },
  {
    title: "Desktop Expense Tracker – PyQt5 Project",
    description:
      "Developed a modern desktop application using Python and PyQt5 to efficiently manage personal finances. The app allows users to add, view, and delete income and expense entries, track financial data by date, category, and description, and visualize trends through pie and line charts. Designed with a dark-themed UI and intuitive navigation, the tool simplifies financial tracking and analysis on the desktop.",
    image:
      "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=300&h=168&dpr=1",
    link: "https://github.com/Manju-77-77/Expenses-Tracker.git",
  },
  {
    title: "Browser History Tracker – Python Stack Project",
    description:
      "Built a web-based application using Python and the Stack data structure to simulate browser-like navigation. The app allows users to enter URLs to visit websites, stores browsing history, enables navigation back to previously visited pages, and provides the functionality to delete history entries. Designed with a simple interface to demonstrate core stack operations in a real-world scenario.",
    image:
      "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=168&q=80",
    link: "https://github.com/Manju-77-77/Browser-History-Tracker.git",
  },
];

const Card = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } },
              hidden: { opacity: 0, y: 50 },
            }}
            className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700"
          >
            <a href={project.link}>
              <img
                className="rounded-t-lg w-full h-48 object-cover"
                src={project.image}
                alt={project.title}
              />
            </a>
            <div className="p-5">
              <a href={project.link}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {project.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {project.description}
              </p>
              <a
                href={project.link}
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors duration-300"
              >
                Read more
                <svg
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Card;