// @desc    Get all bootcamps
// @route   Get/api/bootcamps
// @access  public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" })
}


// @desc    Get single bootcamps
// @route   Get/api/bootcamps/:id
// @access  public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show one bootcamp" })

}


// @desc    Create new bootcamps
// @route   POST/api/bootcamps
// @access  privet
exports.creatBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "create a bootcamp" })

}


// @desc    Update bootcamps
// @route   PUT/api/bootcamps/:id
// @access  privet
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Update a bootcamps" })

}




// @desc    Delete bootcamps
// @route   DELETE/api/bootcamps/:id
// @access  privet
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Delete a bootcamp" })

}