import { useState } from "react";

const tabs = [
  { title: "Home", content: "Welcome to the Home tab." },
  { title: "Profile", content: "This is the Profile tab." },
  { title: "Settings", content: "This is the Settings tab." },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowRight") {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }

    if (event.key === "ArrowLeft") {
      setActiveTab((prev) => (prev - 1 + tabs.length) % tabs.length);
    }
  }

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Tabs</h2>

      <div role="tablist" aria-label="Sample Tabs">
        {tabs.map((tab, index) => (
          <button
            key={tab.title}
            role="tab"
            aria-selected={activeTab === index}
            tabIndex={activeTab === index ? 0 : -1}
            onClick={() => setActiveTab(index)}
            onKeyDown={handleKeyDown}
            style={{
              marginRight: "10px",
              padding: "10px",
            }}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        style={{
          marginTop: "20px",
          border: "1px solid gray",
          padding: "15px",
        }}
      >
        {tabs[activeTab].content}
      </div>
    </div>
  );
}