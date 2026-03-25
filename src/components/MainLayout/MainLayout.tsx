import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Products from "../Products/Products";
import Users from "../Users/Users";
import Rol from "../Rol/Rol";
import Login from "../Login/Login";
import Inventory from "../Inventory/Inventory";

const MainLayout: React.FC = () => {
  const [route, setRoute] = useState("products");

  const renderView = () => {
    switch (route) {
      case "login":
        return <Login />;
      case "products":
        return <Products />;
      case "roles":
        return <Rol />;
      case "users":
        return <Users />;
      case "inventory":
        return <Inventory />;
      default:
        return <Login />;
    }
  };

  return (
    <div style={styles.container}>
      <Sidebar current={route} onNavigate={setRoute} />

      <div style={styles.content}>{renderView()}</div>
    </div>
  );
};

export default MainLayout;

const styles = {
  container: {
    display: "flex",
  },
  content: {
    flex: 1,
    background: "#0a0a0a",
  },
};
