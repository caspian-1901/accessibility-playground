import { useState } from "react";

export default function Disclosure() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Disclosure</h2>

      <button
        aria-expanded={isOpen}
        aria-controls="disclosure-content"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        {isOpen ? "Hide Details" : "Show Details"}
      </button>

      {isOpen && (
        <div
          id="disclosure-content"
          style={{
            marginTop: "15px",
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "6px",
          }}
        >
          <p>
            This is an accessible disclosure component built without using a
            component library.
          </p>
        </div>
      )}
    </div>
  );
}