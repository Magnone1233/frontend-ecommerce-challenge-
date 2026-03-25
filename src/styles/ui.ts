export const ui = {
  card: {
    width: "380px",
    padding: "20px",
    borderRadius: "12px",
    background: "#0f0f0f",
    color: "#fff",
    border: "1px solid #222",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "15px",
  },
  badge: {
    fontWeight: "bold",
    fontSize: "14px",
  },
  field: {
    marginBottom: "12px",
    display: "flex",
    flexDirection: "column" as const,
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #333",
    background: "#1a1a1a",
    color: "#fff",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "linear-gradient(90deg, #7c3aed, #00ff99)",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
  },
  responseBox: {
    marginTop: "15px",
    padding: "10px",
    background: "#000",
    borderRadius: "8px",
    minHeight: "80px",
    border: "1px solid #222",
  },
  responseText: {
    fontSize: "12px",
    whiteSpace: "pre-wrap" as const,
  },
};
