import * as TicketModel from '../models/ticketModel.js';

export async function create(req, res) {
  const { username, email, category, description } = req.body;

  if (!username || !email || !category || !description) {
    return res.status(400).json({ error: 'Missing required ticket fields.' });
  }

  try {
    const newTicket = await TicketModel.createTicket(username, email, category, description);
    res.status(201).json(newTicket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating ticket.' });
  }
}

export async function list(req, res) {
  try {
    const tickets = await TicketModel.listTickets();
    res.json(tickets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error listing the tickets' });
  }
}

export async function findById(req, res) {
  const { id } = req.params;
  try {
    const ticket = await TicketModel.findTicketById(id);
    if (!ticket) {
      res.status(404).json({ error: `Ticket with id ${id} not found.` });
    }
    res.json(ticket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error finding the ticket.' });
  }
}

export async function updateStatus(req, res) {
  const { id } = req.params
  const { status } = req.body

  if (!status) {
    return res.status(400).json({ error: 'Status is required.' });
  }

  try {
    const ticket = await TicketModel.updateTicketStatus(id, status)
    if (!ticket) {
      res.status(404).json({ error: `Ticket with id ${id} not found.` });
    }
    res.json(ticket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error updating the ticket.' });
  }
}