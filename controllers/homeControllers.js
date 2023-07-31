const Project = require("../models/project");

module.exports.home = async (req, res) => {
  try {
    let projects = await Project.find({}).sort("_createdAt");
    return res.render("homepage", {
      title: "Issue Tracker | Home",
      projects
    });
  } catch (err) {
    console.log("Error Occur in Home page", err);
    return;
  }
};
