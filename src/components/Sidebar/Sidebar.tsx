import React from "react";

type SidebarProps = {
  onNavigate: (route: string) => void;
  current: string;
};

const Sidebar: React.FC<SidebarProps> = ({ onNavigate, current }) => {
  const items = [
    { label: "Login", key: "login" },
    { label: "Products", key: "products" },
    { label: "Roles", key: "roles" },
    { label: "Users", key: "users" },
    { label: "Inventory", key: "inventory" },
  ];

  return (
    <div style={styles.sidebar}>
      <h2 style={styles.title}>Navegacion</h2>

      {items.map((item) => (
        <div
          key={item.key}
          onClick={() => onNavigate(item.key)}
          style={{
            ...styles.item,
            background: current === item.key ? "#1f1f1f" : "transparent",
          }}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

const styles = {
  sidebar: {
    width: "220px",
    height: "100vh",
    background: "#0f0f0f",
    borderRight: "1px solid #222",
    padding: "20px",
    color: "#fff",
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px",
  },
  title: {
    marginBottom: "20px",
  },
  item: {
    padding: "10px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
