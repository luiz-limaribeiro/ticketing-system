import "./styles/SuccessModal.css";

interface Props {
  onOk: () => void;
}

export default function SuccessModal({ onOk }: Props) {
  return (
    <div className="success-modal">
      <h1>Ticket created</h1>
      <strong>Ticket ID: ...</strong>
      <p>We've sent a confirmation email with your ticket details.</p>
      <p>
        Our team will review your request and get back to you as soon as
        possible!
      </p>
      <button onClick={onOk}>Ok</button>
    </div>
  );
}
