const db = require("../models");
const Project = db.projects;

exports.create = (req: any, res: any) => {

    if (!req.body.title) {
        res.status(400).send({ message: "Content cannot be empty" });
        return;
    }

    const tempProject = req.body;

    const project = new Project({
        course: tempProject.course,
        title: tempProject.title,
        author: tempProject.author,
        summary: tempProject.summary,
        problem: tempProject.problem,
        objectives: tempProject.objectives,
        methodology: tempProject.methodology,
        findings: tempProject.findings
    })

    project
        .save(project)
        .then((data: any) => res.send(data))
        .catch((err: any) => {
            res.status(500).send({ message: err.message || "Some error occurred while creating the Tutorial." })
        })
};

exports.findAll = (req: any, res: any) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    Project.find(condition)
        .then((data: any) => {
            res.send(data);
        })
        .catch((err: any) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

exports.findOne = (req: any, res: any) => {
    const id = req.params.id;

    Project.findById(id)
      .then((data: any) => {
        if (!data)
          res.status(404).send({ message: "Not found Project with id " + id });
        else res.send(data);
      })
      .catch((err: any) => {
        res
          .status(500)
          .send({ message: "Error retrieving Project with id=" + id });
      });
}; 

exports.update = (req: any, res: any) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
      const id = req.params.id;
    
      Project.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then((data: any) => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update Tutorial with id=${id}. Maybe Project was not found!`
            });
          } else res.send({ message: "Project was updated successfully." });
        })
        .catch((err: any) => {
          res.status(500).send({
            message: "Error updating Project with id=" + id
          });
        });
};

exports.delete = (req: any, res: any) => {
    const id = req.params.id;

    Project.findByIdAndRemove(id)
      .then((data: any) => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Project was not found!`
          });
        } else {
          res.send({
            message: "Project was deleted successfully!"
          });
        }
      })
      .catch((err:any) => {
        res.status(500).send({
          message: "Could not delete Project with id=" + id
        });
      });
};

exports.deleteAll = (req: any, res: any) => {
    Project.deleteMany({})
    .then((data: any) => {
      res.send({
        message: `${data.deletedCount} Projects were deleted successfully!`
      });
    })
    .catch((err: any) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Projects."
      });
    });
};

// exports.findAllCourse = (req, res) => {

// };