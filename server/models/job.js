const mongoose = require('mongoose');


// Schema for categories
const jobSchema = new mongoose.Schema({
    category: {
        type: String,
        unique: true,
        require: true,
    },
    positions: {
        role1: String,
        role2: String,
        role3: String,
        role4: String,
        role5: String,
        role6: String,
    },

});

// Create models based on the schemas
const JobsModel = mongoose.model('Jobs', jobSchema);

module.exports = JobsModel;
