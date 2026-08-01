import { useEffect, useRef, useState } from "react";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
    } else {
      openButtonRef.current?.focus();
    }
  }, [isOpen]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      setIsOpen(false);
    }

    if (event.key === "Tab") {
      event.preventDefault();
      closeButtonRef.current?.focus();
    }
  }

  return (
    <div style={{ marginBottom: "40px" }}>
      <h2>Modal Dialog</h2>

      <button ref={openButtonRef} onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onKeyDown={handleKeyDown}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "8px",
              minWidth: "300px",
            }}
          >
            <h3 id="modal-title">Accessible Modal</h3>

            <p>
              This modal traps focus and closes with the Escape key.
            </p>

            <button
              ref={closeButtonRef}
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}