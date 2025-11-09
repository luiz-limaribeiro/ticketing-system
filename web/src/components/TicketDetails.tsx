import "./styles/TicketDetails.css";

export default function TicketDetails() {
  return (
    <main>
      <h2>Ticket details</h2>
      <div className="details">
        <span>
          ID: <b>...</b>
        </span>
        <span>User: user</span>
        <span>Email: email</span>
        <span>Status: open</span>
      </div>
      <button>Set status</button>
    </main>
  );
}
