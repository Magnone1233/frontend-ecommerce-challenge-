import React from "react";
import CardRol from "../CardRol/CardRol";
import { getAuthHeaders } from "../Helpers/getAuthHeaders";

const API_BASE_URL = (
  process.env.REACT_APP_API_URL || "http://localhost:3000"
).replace(/\/$/, "");

const Rol: React.FC = () => {
  const handleAssignRole = async (data: Record<string, any>) => {
    const res = await fetch(`${API_BASE_URL}/role/assign`, {
      method: "POST",
      headers: getAuthHeaders(true),
      body: JSON.stringify(data.body),
    });

    return res.json();
  };

  return (
    <div style={styles.container}>
      <div style={styles.cardWrapper}>
        <CardRol
          method="POST"
          title="ASIGNAR ROL A USUARIO"
          endpoint="role/assign"
          buttonText="Asignar Rol"
          fields={[
            {
              label: "Body (JSON)",
              name: "body",
              type: "text",
              placeholder: `{
  "userId": 12,
  "roleId": 9
}`,
              isJson: true,
            },
          ]}
          onSubmit={handleAssignRole}
        />
      </div>
    </div>
  );
};

export default Rol;

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
