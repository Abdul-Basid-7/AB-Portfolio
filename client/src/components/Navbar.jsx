import { useState, useEffect } from "react";

import { motion } from "framer-motion";

import {
    FaBars,
    FaTimes,
} from "react-icons/fa";

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        {
            name: "About",
            path: "#about",
        },

        {
            name: "Skills",
            path: "#skills",
        },

        {
            name: "Projects",
            path: "#projects",
        },

        {
            name: "Experience",
            path: "#experience",
        },

        {
            name: "Contact",
            path: "#contact",
        },
    ];

    useEffect(() => {

        const handleScroll = () => {

            setScrolled(
                window.scrollY > 50
            );
        };

        window.addEventListener(
            "scroll",
            handleScroll
        );

        return () =>
            window.removeEventListener(
                "scroll",
                handleScroll
            );

    }, []);


    return (
        <motion.nav
            initial={{
                y: -80,
                opacity: 0,
            }}
            animate={{
                y: 0,
                opacity: 1,
            }}
            transition={{
                duration: 0.8,
            }}
            className={` fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? ` backdrop-blur-xl bg-black/30 border-b border-white/10 shadow-lg shadow-black/20 ` : ` bg-transparent ` }`}
        >

            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* LOGO */}
                <h1 className="text-2xl font-bold tracking-wide">
                    Abdul Basid
                    <span className="text-violet-500">
                        .
                    </span>
                </h1>

                {/* DESKTOP MENU */}
                <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-300">

                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.path}
                        >
                            <li className=" relative text-gray-300 hover:text-white transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full ">
                                {link.name}
                            </li>
                        </a>
                    ))}

                </ul>

                {/* DESKTOP BUTTON */}
                <a
                    href="#contact"
                    className="hidden md:block bg-violet-600 hover:bg-violet-700 transition px-5 py-2 rounded-full text-sm font-medium shadow-lg shadow-violet-500/30"
                >
                    Hire Me
                </a>

                {/* MOBILE MENU BUTTON */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() =>
                        setMenuOpen(!menuOpen)
                    }
                >
                    {
                        menuOpen
                            ? <FaTimes />
                            : <FaBars />
                    }
                </button>

            </div>

            {/* MOBILE MENU */}
            {
                menuOpen && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            y: -20,
                        }}
                        className="md:hidden bg-[#0F172A]/95 backdrop-blur-xl border-t border-white/10"
                    >

                        <ul className="flex flex-col items-center gap-8 py-10 text-lg">

                            {navLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.path}
                                    onClick={() =>
                                        setMenuOpen(false)
                                    }
                                >
                                    <li className="hover:text-violet-400 transition">
                                        {link.name}
                                    </li>
                                </a>
                            ))}

                            <a
                                href="#contact"
                                onClick={() =>
                                    setMenuOpen(false)
                                }
                                className="bg-violet-600 hover:bg-violet-700 transition px-6 py-3 rounded-full font-medium shadow-lg shadow-violet-500/30"
                            >
                                Hire Me
                            </a>

                        </ul>
                    </motion.div>
                )
            }

        </motion.nav>
    );
};

export default Navbar;