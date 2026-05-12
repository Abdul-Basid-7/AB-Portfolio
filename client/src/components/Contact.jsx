import { useState } from "react";

import { motion } from "framer-motion";

import toast from "react-hot-toast";

import API from "../utils/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await API.post("/contact", formData);

      toast.success("Message Sent");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      toast.error("Failed To Send");

    } finally {
      setLoading(false);
    }
  };

  return (
    <section  id="contact" className="relative py-32 px-6">

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="text-violet-400 uppercase tracking-widest">
            Contact
          </p>

          <h2 className="text-5xl font-black mt-3">
            Let's Work Together
          </h2>

          <p className="text-gray-400 mt-8 leading-relaxed text-lg">
            Have a project idea, collaboration opportunity,
            or job opening? Feel free to reach out.
          </p>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
        >

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-violet-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-violet-500"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-violet-500"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-violet-600 hover:bg-violet-700 transition rounded-xl py-4 font-semibold"
            >
              {
                loading
                  ? "Sending..."
                  : "Send Message"
              }
            </button>

          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;