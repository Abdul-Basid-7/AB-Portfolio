import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative py-32 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-violet-400 uppercase tracking-widest">
            Introduction
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-3">
            About Me
          </h2>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-2 gap-12 items-center"
        >

          {/* LEFT */}
          <div className="relative">

            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-3xl blur opacity-30"></div>

            <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8">

              <p className="text-gray-300 leading-relaxed text-lg">
                I am a passionate MERN Stack Developer focused on building
                scalable, modern, and visually impressive web applications.
                I enjoy solving real-world problems through clean backend
                architecture and premium frontend experiences.
              </p>

              <p className="text-gray-400 mt-6 leading-relaxed">
                Currently improving my skills in full-stack development,
                REST APIs, authentication systems, and scalable application
                architecture while building production-ready projects.
              </p>

            </div>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-5">

            {[
              "Frontend Development",
              "Backend APIs",
              "Responsive Design",
              "Database Management"
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg hover:border-violet-500/50 transition"
              >
                <h3 className="font-semibold text-lg">
                  {item}
                </h3>
              </motion.div>
            ))}

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;