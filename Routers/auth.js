const express = require("express");
const authRouter = express.Router();



authRouter.get("/", (req, res) => {
  res.send("auth router is worked")
})


authRouter.post("/", (req, res) => {

})

authRouter.put("/:id", (req, res) => {

})

authRouter.delete("./:id", (req, res) => {
  
})




// module.exports = router
module.exports = authRouter;