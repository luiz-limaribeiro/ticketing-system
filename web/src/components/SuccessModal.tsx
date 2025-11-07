import "./styles/SuccessModal.css";

interface Props {
  id: string,
  onOk: () => void;
}

export default function SuccessModal({ id, onOk }: Props) {
  return (
    <div className="success-modal">
      <h1>Ticket created</h1>
      <strong>Ticket ID: {id}</strong>
      <p>We've sent a confirmation email with your ticket details.</p>
      <p>
        Our team will review your request and get back to you as soon as
        possible!
      </p>
      <button onClick={onOk}>Ok</button>
    </div>
  );
}
