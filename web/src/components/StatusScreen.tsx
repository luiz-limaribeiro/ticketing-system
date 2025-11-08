import { useRef, useState, type FormEvent } from "react";
import "./styles/StatusScreen.css";

type Ticket = {
  status: string;
  created_at: string;
};

export default function StatusScreen() {
  const [id, setId] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const ticket = useRef<Ticket | null>(null);

  async function getStatus(e: FormEvent) {
    e.preventDefault();

    await fetch("/api/tickets/" + id)
      .then((res) => {
        if (!res.ok) {
          setNotFound(true);
          throw new Error("Failed to find ticket");
        }
        return res.json();
      })
      .then((data) => {
        ticket.current = data;
        setShowDetails(true);
      })
      .catch((err) => console.error(err));
  }

  function handleOk() {
    setShowDetails(false);
    setNotFound(false);
    setId("");
    ticket.current = null;
  }

  return (
    <main>
      <h1>Consult your status</h1>

      {!showDetails ? (
        <form onSubmit={getStatus}>
          {notFound && (
            <div className="label">
              <span>Ticket not found</span>
            </div>
          )}
          <input
            type="text"
            placeholder="Ticket ID..."
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button type="submit">Get status</button>
        </form>
      ) : (
        <div className="ticket-details">
          <span>
            Ticket status: <b>{ticket.current?.status}</b>
          </span>
          <span>
            Created at: <b>{ticket.current?.created_at}</b>
          </span>
          <button className="ok" onClick={handleOk}>
            Ok
          </button>
        </div>
      )}
    </main>
  );
}
