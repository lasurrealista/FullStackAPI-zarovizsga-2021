// 1. Feladat: pótold a service modellt.

const mongoose = require('mongoose');

const ServiceSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    since: {
        type: Number,
        default: 0,
        required: true
    },
    street: String,
    city: String,
    country: String,
    active: {
        type: Boolean,
        default: true
    }
}, {
    timeStamps: true
});

module.exports = mongoose.model('service', ServiceSchema);


/*
  _id: string = '';
  name: string = '';
  since: number = 0;
  street?: string = '';
  city?: string = '';
  country?: string = '';
  active?: boolean = true;
*/