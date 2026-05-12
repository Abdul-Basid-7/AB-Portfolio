import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 py-12 px-6">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* LEFT */}
        <div>

          <h2 className="text-3xl font-black">
            Abdul Basid
          </h2>

          <p className="text-gray-400 mt-3">
            MERN Stack Developer building scalable
            modern web applications.
          </p>

        </div>

        {/* CENTER */}
        <div className="flex gap-6 text-2xl">

          <a
            href="https://github.com/"
            target="_blank"
          >
            <FaGithub className="hover:text-violet-400 transition" />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
          >
            <FaLinkedin className="hover:text-cyan-400 transition" />
          </a>

        </div>

        {/* RIGHT */}
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="bg-violet-600 hover:bg-violet-700 transition p-4 rounded-full shadow-lg shadow-violet-500/30"
        >
          <FaArrowUp />
        </button>

      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-500 mt-10 border-t border-white/10 pt-6">

        © 2026 Abdul Basid. All rights reserved.

      </div>
    </footer>
  );
};

export default Footer;