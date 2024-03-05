const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  assignedUser: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Open', 'In Progress', 'Closed'],
    default: 'Open',
  },
  // Add other relevant properties for your tickets here (e.g., priority, due date)
});

module.exports = mongoose.model('Ticket', ticketSchema);
