import { useEffect, useRef, useState } from "react";
import "./styles/SupportScreen.css";

type Ticket = {
  description: string;
  created_at: string;
};

export default function SupportScreen() {
  const [fetching, setFetching] = useState(false);

  const tickets = useRef<Ticket[]>([]);

  async function fetchTickets() {
    setFetching(true);

    await fetch("/api/tickets")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch tickets");
        return res.json();
      })
      .then(async (data) => {
        tickets.current = data;
      })
      .catch((error) => console.error(error))
      .finally(() => setFetching(false));
  }

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <main>
      <h1>Welcome, agent</h1>
      <span>Open tickets:</span>
      {!fetching && (
        <ol>
          {tickets.current.map((ticket, i) => (
            <li key={i}>
              <p>{ticket.description}</p>
              <b>Opened at {ticket.created_at}</b>
            </li>
          ))}
        </ol>
      )}
      {!fetching && tickets.current.length === 0 && (
        <span>There are no open tickets for now</span>
      )}
    </main>
  );
}
