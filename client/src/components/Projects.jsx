import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import API from "../utils/api";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await API.get("/projects");

        setProjects(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="relative py-32 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-violet-400 uppercase tracking-widest">
            My Work
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-3">
            Projects
          </h2>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >

              {/* Glow */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-violet-500 to-cyan-500 rounded-3xl blur opacity-20 group-hover:opacity-60 transition duration-500"></div>

              {/* Card */}
              <div className="relative bg-[#0F172A] border border-white/10 rounded-3xl overflow-hidden">

                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover"
                />

                {/* Content */}
                <div className="p-6">

                  <div className="flex justify-between items-center">

                    <h3 className="text-2xl font-bold">
                      {project.title}
                    </h3>

                    <div className="flex gap-4 text-lg">

                      <a
                        href={project.githubLink}
                        target="_blank"
                      >
                        <FaGithub className="hover:text-violet-400 transition" />
                      </a>

                      <a
                        href={project.liveLink}
                        target="_blank"
                      >
                        <FaExternalLinkAlt className="hover:text-cyan-400 transition" />
                      </a>

                    </div>
                  </div>

                  <p className="text-gray-400 mt-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mt-6">

                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-violet-300"
                      >
                        #{tech}
                      </span>
                    ))}

                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;