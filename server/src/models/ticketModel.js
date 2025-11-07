import { openDb } from "../config/db.js";

export async function createTicket(username, email, category, description) {
  const db = await openDb();
  const newId = Math.floor(1_000_000_000 + Math.random() * 9_000_000_000)

  const result = await db.run(
    'INSERT INTO tickets (id, username, email, category, description) VALUES (?, ?, ?, ?, ?)',
    [newId, username, email, category, description]
  );
  return { id: result.lastID, username, email, category, description };
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