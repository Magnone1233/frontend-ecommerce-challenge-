import React from "react";
import CardUser from "../CardUsers/CardUsers";
import { getAuthHeaders } from "../Helpers/getAuthHeaders";

const API_BASE_URL = (
  process.env.REACT_APP_API_URL || "http://localhost:3000"
).replace(/\/$/, "");

const Users: React.FC = () => {
  const handleGetProfile = async () => {
    const res = await fetch(`${API_BASE_URL}/user/profile`, {
      headers: getAuthHeaders(true),
    });
    return res.json();
  };

  return (
    <div style={styles.container}>
      <div style={styles.cardWrapper}>
        <CardUser
          method="GET"
          title="PERFIL DE USUARIO"
          endpoint="user/profile"
          buttonText="Obtener Perfil"
          fields={[]}
          onSubmit={handleGetProfile}
        />
      </div>
    </div>
  );
};

export default Users;

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    gap: "20px",
    background: "#0a0a0a",
    overflowY: "auto" as const,
    padding: "20px",
    alignItems: "stretch",
  },
  cardWrapper: {
    maxWidth: "400px",
    width: "100%",
    margin: "0 auto",
  },
};
