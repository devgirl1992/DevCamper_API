const express = require("express");
const coursesRouter = express.Router();



coursesRouter.get("/", (req, res) => {
  res.send("courses router is worked")
})

coursesRouter.post("/", (req, res) => {

})

coursesRouter.put("/:id", (req, res) => {

})

coursesRouter.delete("./:id", (req, res) => {
  
})



// module.exports = router
module.exports = coursesRouter;