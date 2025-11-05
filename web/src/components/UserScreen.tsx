import { useState, type FormEvent } from "react";
import "./styles/UserScreen.css";

export default function UserScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    console.log("sent");
    console.log("name:", name);
    console.log("email:", email);
    console.log("category:", category);
    console.log("description:", description);

    // axios
  }

  return (
    <main>
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
          defaultValue={""}
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
    </main>
  );
}
