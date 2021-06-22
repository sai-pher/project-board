module.exports = app => {
    const projects = require("../controllers/project.controller");
  
    var router = require("express").Router();
  
    router.post("/create", projects.create);

    router.get("/armed", (req, res) => res.json({message: "Project board armed"}));
  
    router.get("/", projects.findAll);
  
    router.get("/:id", projects.findOne);
  
    router.put("/update/:id", projects.update);
  
    router.delete("/delete/:id", projects.delete);
  
    router.delete("/deleteAll", projects.deleteAll);
  
    app.use('/api/projects', router);
  };