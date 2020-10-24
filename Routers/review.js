const express = require("express");
const reviewRouter = express.Router();



reviewRouter.get("/", (req, res) => {
  res.send("review router is worked")
})



reviewRouter.post("/", (req, res) => {

})

reviewRouter.put("/:id", (req, res) => {

})

reviewRouter.delete("./:id", (req, res) => {
  
})



// module.exports = router
module.exports = reviewRouter;