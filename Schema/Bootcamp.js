const mongoose = require('mongoose');

const BootcamoSChema = new mongoose.Schema({
  name: {

  },
  slug: String,
  description: {

  },
  website: {

  },
  phone: {

  },
  email: {

  },
  formatAddress: String,
  street: String,
  city: String,
  state: String,
  zipCode: String,
  country: String},
  careers: {

  },
  averageRating: {

  },
  averageCost: Number,
  photo: {

  },
  housing: {

  },

  jobGuarantee: {

  },
  createdAt: {

  }
})




module.exports = mongoose.model('Bootcamp', BootcamoSChema)