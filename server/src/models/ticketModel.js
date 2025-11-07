import { openDb } from "../config/db.js";

export async function createTicket(username, email, category, description) {
  const db = await openDb();
  const result = await db.run(
    'INSERT INTO tickets VALUES (?, ?, ?, ?)',
    [username, email, category, description]
  );
  return { id: result.lastID, username, email, category, description, status: 'open' };
}

export async function listTickets() {
  const db = await openDb();
  return db.all('SELECT * FROM tickets');
}

export async function findTicketById(id) {
  const db = await openDb();
  return db.get('SELECT * FROM tickets WHERE id = ?', [id]);
}

export async function updateTicketStatus(id, status) {
  const db = await openDb();
  await db.run('UPDATE tickets SET status = ? WHERE id = ?', [status, id]);
  return findTicketById(id);
}