const express = require("express");
const usersRouter = express.Router();



usersRouter.get("/", (req, res) => {
  res.send("users router is worked")
})


usersRouter.post("/", (req, res) => {

})

usersRouter.put("/:id", (req, res) => {

})

usersRouter.delete("./:id", (req, res) => {
  
})



// module.exports = router
module.exports = usersRouter;