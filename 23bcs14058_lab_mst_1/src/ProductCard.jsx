export default function ProductCard({ name, price, description, inStock }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      width: "250px",
      margin: "10px"
    }}>
      <h2 style={{ fontSize: "18px", fontWeight: "bold" }}>{name}</h2>
      <p style={{ fontSize: "16px", color: "#555" }}>{description}</p>
      <p style={{ fontWeight: "bold" }}>Price: ${price}</p>

      {inStock ? (
        <button style={{
          marginTop: "10px",
          padding: "8px 12px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}>
          Buy Now
        </button>
      ) : (
        <p style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>
          Out of Stock
        </p>
      )}
    </div>
  )
}
