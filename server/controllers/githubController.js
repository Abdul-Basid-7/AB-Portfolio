import axios from "axios";

import Project from "../models/projectModel.js";

export const syncGithubProjects =
  async (req, res) => {
    try {
      const username =
        process.env.GITHUB_USERNAME;

      const token =
        process.env.GITHUB_TOKEN;

      const { data } = await axios.get(
        `https://api.github.com/users/${username}/repos`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );

      let importedCount = 0;

      for (const repo of data) {

        // CHECK DUPLICATE
        const existingProject =
          await Project.findOne({
            githubLink: repo.html_url,
          });

        if (existingProject) continue;

        // CREATE PROJECT
        await Project.create({
          title: repo.name,

          description:
            repo.description ||
            "GitHub synced project",

          techStack: [
            repo.language || "JavaScript",
          ],

          githubLink: repo.html_url,

          liveLink: "",

          image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085",

            featured: false,

             source: "github",
        });

        importedCount++;
      }

      res.status(200).json({
        message: `${importedCount} repositories imported`,
      });

    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };