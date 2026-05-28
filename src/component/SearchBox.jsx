import { useState } from "react";


const text = "your 500 word paragraph here...";

export default function Search() {
  const [query, setQuery] = useState("");

  const highlight = () => {
    if (!query.trim()) return text; // if empty show original

    const parts = text.split(query);  // split by the word

    return parts.map((part, i) => (
      <>
        {part}
        {i < parts.length - 1 && (
          <span style={{ background: "yellow" }}>{query}</span>
        )}
      </>
    ));
  };

  return (
    <div>
      <input
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <p>{highlight()}</p>
    </div>
  );
}
