const express = require("express");
const {getBootcamps, getBootcamp, creatBootcamp, updateBootcamp ,deleteBootcamp} = require("../Controllers/bootcamps");

const bootcampsRouter = express.Router();

bootcampsRouter.route('/').get(getBootcamps).post(creatBootcamp)

bootcampsRouter.route('/:id').get(getBootcamp).put(updateBootcamp).delete(deleteBootcamp)







module.exports = bootcampsRouter
