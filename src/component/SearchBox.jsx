import { useState } from "react";
const textPiece =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export default function App() {
  const [query, setquery] = useState("");
  function highlight() {
    if (!query.trim()) return textPiece;

    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${escaped})`, "gi");
    const parts = textPiece.split(regex);
    const exactMatch = new RegExp(`^${escaped}$`, "i");

    return parts.map((part, i) =>
      exactMatch.test(part) ? (
        <span key={i} style={{ background: "yellow" }}>
          {part}
        </span>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  }

  return (
    <div className="App">
      <input
        type="text"
        placeholder="write here.."
        onChange={(e) => setquery(e.target.value)}
      />
      <p>{highlight()}</p>
    </div>
  );
}
