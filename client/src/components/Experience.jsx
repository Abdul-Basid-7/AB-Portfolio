import { motion } from "framer-motion";

const experiences = [
  {
    year: "2024",
    title: "Started MERN Stack Journey",
    description:
      "Began learning full-stack development with React, Node.js, Express, and MongoDB while building real-world projects.",
  },

  {
    year: "2025",
    title: "Built Full Stack Projects",
    description:
      "Developed dynamic MERN applications including web scrapers, dashboards, and portfolio systems with authentication.",
  },

  {
    year: "2026",
    title: "Advanced Backend Development",
    description:
      "Focused on scalable APIs, JWT authentication, Cloudinary integration, and production-ready application architecture.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-32 px-6">

      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="text-cyan-400 uppercase tracking-widest">
            My Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-3">
            Experience
          </h2>

        </motion.div>

        {/* TIMELINE */}
        <div className="relative mt-20">

          {/* LINE */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-violet-500 to-cyan-500"></div>

          <div className="space-y-16">

            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -100 : 100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0
                    ? "md:flex-row-reverse"
                    : ""
                }`}
              >

                {/* CONTENT */}
                <div className="md:w-1/2"></div>

                <div className="relative z-10 w-8 h-8 rounded-full bg-violet-500 border-4 border-[#050816] shadow-lg shadow-violet-500/50"></div>

                <div className="md:w-1/2 mt-8 md:mt-0">

                  <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 ml-10 md:ml-0">

                    <span className="text-violet-400 font-bold">
                      {item.year}
                    </span>

                    <h3 className="text-2xl font-bold mt-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 mt-4 leading-relaxed">
                      {item.description}
                    </p>

                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;