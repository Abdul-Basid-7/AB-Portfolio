import { motion } from "framer-motion";
import {
    FaReact,
    FaNodeJs,
    FaGitAlt,
} from "react-icons/fa";

import {
    SiMongodb,
    SiExpress,
    SiJavascript,
    SiTailwindcss,
} from "react-icons/si";

const skills = [
    {
        icon: <FaReact />,
        name: "React",
    },
    {
        icon: <FaNodeJs />,
        name: "Node.js",
    },
    {
        icon: <SiMongodb />,
        name: "MongoDB",
    },
    {
        icon: <SiExpress />,
        name: "Express",
    },
    {
        icon: <SiJavascript />,
        name: "JavaScript",
    },
    {
        icon: <SiTailwindcss />,
        name: "Tailwind",
    },
    {
        icon: <FaGitAlt />,
        name: "Git",
    },
];

const Skills = () => {
    return (
        <section id="skills" className="relative py-32 px-6">

            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p className="text-cyan-400 uppercase tracking-widest">
                        Technologies
                    </p>

                    <h2 className="text-4xl md:text-5xl font-black mt-3">
                        Skills
                    </h2>
                </motion.div>

                {/* Skill Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-16">

                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -12,
                                scale: 1.05,
                            }}
                            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 flex flex-col items-center justify-center gap-4 hover:border-violet-500/50 transition"
                        >

                            <div className="text-5xl text-violet-400">
                                {skill.icon}
                            </div>

                            <h3 className="text-lg font-semibold">
                                {skill.name}
                            </h3>

                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Skills;