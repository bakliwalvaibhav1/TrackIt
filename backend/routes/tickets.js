const express = require('express');
const router = express.Router();
const Ticket = require('../models/ticket');

// Get all tickets
router.get('/', async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.json(tickets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a ticket
router.post('/', async (req, res) => {
  const newTicket = new Ticket(req.body);
  try {
    const savedTicket = await newTicket.save();
    res.status(201).json(savedTicket);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// (Add logic for GET by ID, UPDATE, and DELETE endpoints here)

module.exports = router;
