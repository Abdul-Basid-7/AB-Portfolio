import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import API from "../utils/api";
import toast from "react-hot-toast";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post(
        "/auth/login",
        formData
      );

      localStorage.setItem("token", data.token);

       toast.success("Login Successful");

      navigate("/admin/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Invalid Credentials");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#050816] px-6 relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute w-[500px] h-[500px] bg-violet-600/30 blur-[120px] rounded-full top-10 left-10"></div>

      <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full bottom-10 right-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-md"
      >

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">

          <h2 className="text-4xl font-black text-center">
            Admin Login
          </h2>

          <p className="text-gray-400 text-center mt-3">
            Access dashboard securely
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
          >

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-violet-500"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-violet-500"
            />

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-violet-600 hover:bg-violet-700 transition font-semibold shadow-lg shadow-violet-500/30"
            >
              Login
            </button>

          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default AdminLogin;