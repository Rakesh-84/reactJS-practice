import { useState } from "react";
import SearchBox from "./component/SearchBox";
import StatCard from "./component/statCard";

function App() {
  const [showSearch, setShowSearch] = useState(true);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <StatCard />

      <button
        type="button"
        onClick={() => setShowSearch((visible) => !visible)}
        style={{
          margin: "16px 0",
          padding: "10px 16px",
          borderRadius: "6px",
          border: "1px solid #444",
          background: showSearch ? "#f5f5f5" : "#007bff",
          color: showSearch ? "#000" : "#fff",
          cursor: "pointer",
        }}
      >
        {showSearch ? "Hide Search Box" : "Show Search Box"}
      </button>

      {showSearch && <SearchBox />}
    </div>
  );
}

export default App;
