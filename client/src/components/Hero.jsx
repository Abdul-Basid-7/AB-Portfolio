import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

            {/* Background Glow */}
            <div className="absolute w-[500px] h-[500px] bg-violet-600/30 blur-[120px] rounded-full top-20 left-10"></div>

            <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 blur-[100px] rounded-full bottom-10 right-10"></div>

            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <p className="text-violet-400 font-medium mb-4 tracking-widest uppercase">
                        Full Stack Developer
                    </p>

                    <h1 className="text-5xl md:text-7xl font-black leading-tight">
                        Building
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                            Modern Web
                        </span>
                        Experiences
                    </h1>

                    <p className="mt-6 text-gray-400 text-lg max-w-xl leading-relaxed">
                        I build scalable and visually stunning full-stack applications
                        using the MERN stack with modern UI/UX experiences.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4">

                        <button className="px-7 py-3 rounded-full bg-violet-600 hover:bg-violet-700 transition font-medium shadow-lg shadow-violet-500/30">
                            View Projects
                        </button>

                        <a
                            href="/AbdulBasid-resume2.pdf"
                            download
                            className="px-7 py-3 rounded-full border border-white/20 hover:bg-white/10 transition font-medium"
                        >
                            Download CV
                        </a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-5 mt-10 text-2xl text-gray-400">
                        <a href="https://github.com/Abdul-Basid-7/" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="hover:text-white transition" />
                        </a>

                        <a href="https://www.linkedin.com/in/basid7" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="hover:text-blue-400 transition" />
                        </a>
                    </div>
                </motion.div>

                {/* RIGHT SIDE */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative flex justify-center"
                >

                    {/* Glass Card */}
                    <div className="relative w-[320px] h-[400px] rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">

                        {/* Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-cyan-500/20"></div>

                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">

                            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 p-1">
                                <div className="w-full h-full rounded-full bg-[#0B1120] flex items-center justify-center text-5xl font-bold">
                                    A
                                </div>
                            </div>

                            <h2 className="mt-6 text-3xl font-bold">
                                Abdul Basid
                            </h2>

                            <p className="text-gray-400 mt-2">
                                MERN Stack Developer
                            </p>

                            <div className="mt-6 flex gap-3 flex-wrap justify-center">
                                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                                    React
                                </span>

                                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                                    Node.js
                                </span>

                                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                                    MongoDB
                                </span>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>

            {/* Scroll Down */}
            <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute bottom-8 text-2xl text-gray-400"
            >
                <FaArrowDown />
            </motion.div>
        </section>
    );
};

export default Hero;