import Project from "../models/projectModel.js";
import cloudinary from "../config/cloudinary.js";

export const getProjects = async (
    req,
    res
) => {
    try {
        const projects =
            await Project.find({
                featured: true,
            })
                .sort({ createdAt: -1 })
                .limit(3);

        res.status(200).json(projects);

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const getAllProjects =
    async (req, res) => {
        try {
            const projects =
                await Project.find()
                    .sort({ createdAt: -1 })
                    .limit(8);

            res.status(200).json(projects);

        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    };


export const createProject = async (req, res) => {
    try {
        let imageUrl = "";

        if (req.file) {
            const result = await new Promise((resolve, reject) => {

                cloudinary.uploader
                    .upload_stream(
                        {
                            folder: "portfolio_projects",
                        },
                        (error, result) => {
                            if (error) reject(error);
                            else resolve(result);
                        }
                    )
                    .end(req.file.buffer);

            });

            imageUrl = result.secure_url;
        }

        const project = await Project.create({
            ...req.body,

            techStack: JSON.parse(req.body.techStack),

            image: imageUrl,
        });

        res.status(201).json(project);

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const deleteProject = async (req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Project Deleted",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const updateProject = async (req, res) => {
    try {
        const updatedProject =
            await Project.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    new: true,
                }
            );

        res.status(200).json(updatedProject);

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const toggleFeaturedProject =
    async (req, res) => {
        try {
            const project =
                await Project.findById(
                    req.params.id
                );

            project.featured =
                !project.featured;

            await project.save();

            res.status(200).json(project);

        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    };