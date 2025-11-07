import { useRef, useState, type FormEvent } from "react";
import "./styles/UserScreen.css";
import SuccessModal from "./SuccessModal";

export default function UserScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const ticketId = useRef("...");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const newTicket = { username: name, email, category, description };

    await fetch("/api/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTicket),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to create ticket");
        return res.json();
      })
      .then((data) => {
        console.log("Ticket created:", data);
        ticketId.current = data.id;
        setSubmitted(true);
      })
      .catch((err) => console.error(err));
  }

  function resetState() {
    setName("");
    setEmail("");
    setCategory("");
    setDescription("");
    setSubmitted(false);
  }

  return (
    <main>
      {!submitted ? (
        <div>
          <h1>Open a ticket</h1>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="" disabled>
                Category...
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <textarea
              placeholder="Problem description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      ) : (
        <SuccessModal id={ticketId.current} onOk={() => resetState()} />
      )}
    </main>
  );
}
