import { useState } from "react";
import { orders } from "../Data/data";

function SearchBox() {
  const [query, setQuery] = useState("");

  const filteredOrders = orders.filter((order) => {
    const lowerQuery = query.toLowerCase();
    return (
      order.product.toLowerCase().includes(lowerQuery) ||
      order.category.toLowerCase().includes(lowerQuery) ||
      order.rep.toLowerCase().includes(lowerQuery) ||
    );
  });

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        maxWidth: "700px",
        background: "#fafafa",
      }}
    >
      <h2>Search Orders</h2>
      <p>Type a product, category, rep or country to filter the list.</p>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search by product, category, rep or country"
        style={{
          width: "100%",
          padding: "10px 12px",
          marginBottom: "14px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "14px",
        }}
      />

      {filteredOrders.length === 0 ? (
        <p>No matching orders found.</p>
      ) : (
        <div>
          <p>
            Showing {filteredOrders.length} of {orders.length} orders.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {filteredOrders.slice(0, 10).map((order) => (
              <li
                key={order.id}
                style={{
                  padding: "10px",
                  borderBottom: "1px solid #ececec",
                }}
              >
                <strong>{order.product}</strong> • {order.category} • {order.rep} • {order.country}
              </li>
            ))}
          </ul>
          {filteredOrders.length > 10 && (
            <p style={{ marginTop: "12px", color: "#555" }}>
              Showing first 10 results.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBox;
