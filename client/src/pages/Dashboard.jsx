import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import {
    FaTrash,
    FaEdit,
} from "react-icons/fa";

import API from "../utils/api";

import toast from "react-hot-toast";

const Dashboard = () => {
    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const [projects, setProjects] = useState([]);

    const [editingProject, setEditingProject] =
        useState(null);

    const [editFormData, setEditFormData] =
        useState({
            title: "",
            description: "",
            techStack: "",
            githubLink: "",
            liveLink: "",
        });

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        techStack: "",
        githubLink: "",
        liveLink: "",
        image: "",
    });

    // FETCH PROJECTS
    const fetchProjects = async () => {
        try {
            const { data } = await API.get("/projects/admin/all", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setProjects(data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    // HANDLE FORM INPUTS
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // ADD PROJECT
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const form = new FormData();

            form.append("title", formData.title);

            form.append(
                "description",
                formData.description
            );

            form.append(
                "techStack",
                JSON.stringify(
                    formData.techStack.split(",")
                )
            );

            form.append(
                "githubLink",
                formData.githubLink
            );

            form.append(
                "liveLink",
                formData.liveLink
            );

            form.append("image", formData.image);

            await API.post("/projects", form, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            toast.success("Project Added");

            fetchProjects();

            setFormData({
                title: "",
                description: "",
                techStack: "",
                githubLink: "",
                liveLink: "",
                image: "",
            });

        } catch (error) {
            console.log(error);

            toast.error("Something went wrong");
        }
    };

    // DELETE PROJECT
    const deleteProject = async (id) => {
        try {
            await API.delete(`/projects/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            toast.success("Project Deleted");

            fetchProjects();

        } catch (error) {
            console.log(error);

            toast.error("Delete Failed");
        }
    };


    // TOGGLE FEATURED PROJECT
    const toggleFeatured = async (id) => {
        try {
            await API.put(
                `/projects/featured/${id}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            toast.success(
                "Featured Status Updated"
            );

            fetchProjects();

        } catch (error) {
            console.log(error);

            toast.error("Update Failed");
        }
    };

    // OPEN EDIT MODAL
    const openEditModal = (project) => {
        setEditingProject(project);

        setEditFormData({
            title: project.title,
            description: project.description,
            techStack: project.techStack.join(", "),
            githubLink: project.githubLink,
            liveLink: project.liveLink,
        });
    };

    // UPDATE PROJECT
    const updateProjectHandler = async (e) => {
        e.preventDefault();

        try {
            await API.put(
                `/projects/${editingProject._id}`,
                {
                    ...editFormData,

                    techStack:
                        editFormData.techStack.split(","),
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            toast.success("Project Updated");

            setEditingProject(null);

            fetchProjects();

        } catch (error) {
            console.log(error);

            toast.error("Update Failed");
        }
    };

    // LOGOUT
    const logoutHandler = () => {
        localStorage.removeItem("token");

        toast.success("Logged Out");

        navigate("/admin/login");
    };

    // SYNC GITHUB REPOS
    const syncGithubRepos = async () => {
        try {
            const token =
                localStorage.getItem("token");

            const { data } = await API.post(
                "/github/sync",
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            toast.success(data.message);

            fetchProjects();

        } catch (error) {
            console.log(error);

            toast.error("GitHub Sync Failed");
        }
    };


    return (
        <section className="min-h-screen bg-[#050816] text-white px-6 py-10">

            <div className="max-w-7xl mx-auto">

                <div className="grid lg:grid-cols-[260px_1fr] gap-8">

                    {/* SIDEBAR */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 h-fit backdrop-blur-xl sticky top-6">

                        <h2 className="text-3xl font-black">
                            Admin
                        </h2>

                        <p className="text-gray-400 mt-2">
                            Portfolio Manager
                        </p>

                        <div className="mt-10 space-y-4">

                            <button className="w-full bg-violet-600 rounded-xl py-3 font-medium">
                                Dashboard
                            </button>

                            <button
                                onClick={syncGithubRepos}
                                className="w-full bg-cyan-500 hover:bg-cyan-600 transition rounded-xl py-3 font-medium"
                            >
                                Sync GitHub
                            </button>

                            <button
                                onClick={logoutHandler}
                                className="w-full bg-red-500/20 text-red-400 rounded-xl py-3 font-medium hover:bg-red-500/30 transition"
                            >
                                Logout
                            </button>

                        </div>

                        {/* STATS */}
                        <div className="mt-10 space-y-4">

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">

                                <p className="text-gray-400 text-sm">
                                    Total Projects
                                </p>

                                <h3 className="text-3xl font-bold mt-2">
                                    {projects.length}
                                </h3>

                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">

                                <p className="text-gray-400 text-sm">
                                    Portfolio Status
                                </p>

                                <h3 className="text-green-400 text-xl font-bold mt-2">
                                    Live
                                </h3>

                            </div>

                        </div>
                    </div>

                    {/* MAIN CONTENT */}
                    <div>

                        {/* HEADING */}
                        <div>

                            <h1 className="text-5xl font-black">
                                Admin Dashboard
                            </h1>

                            <p className="text-gray-400 mt-3">
                                Manage your portfolio projects
                            </p>

                        </div>

                        {/* ADD PROJECT FORM */}
                        <div className="mt-12 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

                            <h2 className="text-3xl font-bold mb-8">
                                Add New Project
                            </h2>

                            <form
                                onSubmit={handleSubmit}
                                className="grid md:grid-cols-2 gap-6"
                            >

                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Project Title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-violet-500"
                                />

                                <input
                                    type="text"
                                    name="techStack"
                                    placeholder="React, Node, MongoDB"
                                    value={formData.techStack}
                                    onChange={handleChange}
                                    className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-violet-500"
                                />

                                <input
                                    type="text"
                                    name="githubLink"
                                    placeholder="GitHub Link"
                                    value={formData.githubLink}
                                    onChange={handleChange}
                                    className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-violet-500"
                                />

                                <input
                                    type="text"
                                    name="liveLink"
                                    placeholder="Live Project Link"
                                    value={formData.liveLink}
                                    onChange={handleChange}
                                    className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-violet-500"
                                />

                                <input
                                    type="file"
                                    name="image"
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            image: e.target.files[0],
                                        })
                                    }
                                    className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none md:col-span-2"
                                />

                                <textarea
                                    name="description"
                                    placeholder="Project Description"
                                    rows="5"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none md:col-span-2 focus:border-violet-500"
                                ></textarea>

                                <button
                                    type="submit"
                                    className="bg-violet-600 hover:bg-violet-700 transition rounded-xl py-4 font-semibold md:col-span-2 shadow-lg shadow-violet-500/20"
                                >
                                    Add Project
                                </button>

                            </form>
                        </div>

                        {/* PROJECT CARDS */}
                        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">

                            {projects.map((project) => (
                                <div
                                    key={project._id}
                                    className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-violet-500/30 transition"
                                >

                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="h-52 w-full object-cover"
                                    />

                                    <div className="p-6">

                                        <div className="flex justify-between items-center">

                                            <h3 className="text-2xl font-bold">
                                                {project.title}
                                            </h3>

                                            <div className="flex items-center gap-3">

                                                <button
                                                    onClick={() =>
                                                        toggleFeatured(project._id)
                                                    }
                                                    className={`text-xs px-3 py-1 rounded-full ${project.featured
                                                            ? "bg-green-500/20 text-green-400"
                                                            : "bg-gray-500/20 text-gray-400"
                                                        }`}
                                                >
                                                    {
                                                        project.featured
                                                            ? "Featured"
                                                            : "Feature"
                                                    }
                                                </button>

                                                <button
                                                    onClick={() =>
                                                        openEditModal(project)
                                                    }
                                                >
                                                    <FaEdit className="text-cyan-400 hover:text-cyan-500 transition" />
                                                </button>

                                                <button
                                                    onClick={() =>
                                                        deleteProject(project._id)
                                                    }
                                                >
                                                    <FaTrash className="text-red-400 hover:text-red-500 transition" />
                                                </button>

                                            </div>
                                        </div>

                                        <p className="text-gray-400 mt-4 leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* TECH STACK */}
                                        <div className="flex flex-wrap gap-2 mt-5">

                                            {project.techStack.map(
                                                (tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 text-sm border border-violet-500/20"
                                                    >
                                                        #{tech}
                                                    </span>
                                                )
                                            )}

                                        </div>

                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>
                </div>
            </div>

            {/* EDIT MODAL */}
            {
                editingProject && (
                    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-6">

                        <div className="w-full max-w-2xl bg-[#0F172A] border border-white/10 rounded-3xl p-8">

                            <h2 className="text-3xl font-bold mb-8">
                                Edit Project
                            </h2>

                            <form
                                onSubmit={updateProjectHandler}
                                className="grid md:grid-cols-2 gap-6"
                            >

                                <input
                                    type="text"
                                    value={editFormData.title}
                                    onChange={(e) =>
                                        setEditFormData({
                                            ...editFormData,
                                            title: e.target.value,
                                        })
                                    }
                                    className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none"
                                />

                                <input
                                    type="text"
                                    value={editFormData.techStack}
                                    onChange={(e) =>
                                        setEditFormData({
                                            ...editFormData,
                                            techStack: e.target.value,
                                        })
                                    }
                                    className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none"
                                />

                                <input
                                    type="text"
                                    value={editFormData.githubLink}
                                    onChange={(e) =>
                                        setEditFormData({
                                            ...editFormData,
                                            githubLink: e.target.value,
                                        })
                                    }
                                    className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none"
                                />

                                <input
                                    type="text"
                                    value={editFormData.liveLink}
                                    onChange={(e) =>
                                        setEditFormData({
                                            ...editFormData,
                                            liveLink: e.target.value,
                                        })
                                    }
                                    className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none"
                                />

                                <textarea
                                    rows="5"
                                    value={editFormData.description}
                                    onChange={(e) =>
                                        setEditFormData({
                                            ...editFormData,
                                            description: e.target.value,
                                        })
                                    }
                                    className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none md:col-span-2"
                                ></textarea>

                                <div className="flex gap-4 md:col-span-2">

                                    <button
                                        type="submit"
                                        className="flex-1 bg-violet-600 hover:bg-violet-700 transition rounded-xl py-4 font-semibold"
                                    >
                                        Update Project
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setEditingProject(null)
                                        }
                                        className="flex-1 bg-red-500/20 text-red-400 rounded-xl py-4 font-semibold"
                                    >
                                        Cancel
                                    </button>

                                </div>
                            </form>
                        </div>
                    </div>
                )
            }
        </section>
    );
};

export default Dashboard;