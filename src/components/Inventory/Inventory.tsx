import React from "react";
import CardProducts from "../CardProducts/CardProducts";
import { getAuthHeaders } from "../Helpers/getAuthHeaders";

const API_BASE_URL = (
  process.env.REACT_APP_API_URL || "http://localhost:3000"
).replace(/\/$/, "");

const Inventory: React.FC = () => {
  const handleGetAllInventory = async () => {
    const res = await fetch(`${API_BASE_URL}/inventory`, {
      headers: getAuthHeaders(),
    });
    return res.json();
  };

  const handleGetInventory = async (data: Record<string, string>) => {
    const res = await fetch(`${API_BASE_URL}/inventory/${data.id}`, {
      headers: getAuthHeaders(true),
    });
    return res.json();
  };

  const handleCreateInventory = async (data: Record<string, any>) => {
    const res = await fetch(`${API_BASE_URL}/inventory`, {
      method: "POST",
      headers: getAuthHeaders(true),
      body: JSON.stringify(data.body),
    });
    return res.json();
  };

  const handleUpdateInventory = async (data: Record<string, any>) => {
    const res = await fetch(`${API_BASE_URL}/inventory/${data.id}`, {
      method: "PATCH",
      headers: getAuthHeaders(true),
      body: JSON.stringify(data.body),
    });
    return res.json();
  };

  const handleDeleteInventory = async (data: Record<string, string>) => {
    const res = await fetch(`${API_BASE_URL}/inventory/${data.id}`, {
      method: "DELETE",
      headers: getAuthHeaders(true),
    });
    return res.json();
  };

  return (
    <div style={styles.container}>
      <div style={styles.cardWrapper}>
        <CardProducts
          method="GET"
          title="LISTAR INVENTARIO"
          endpoint="inventory"
          buttonText="Listar"
          fields={[]}
          onSubmit={handleGetAllInventory}
        />
      </div>

      <div style={styles.cardWrapper}>
        <CardProducts
          method="GET"
          title="OBTENER INVENTARIO POR ID"
          endpoint="inventory/:id"
          buttonText="Obtener"
          fields={[{ label: "ID", name: "id", type: "text" }]}
          onSubmit={handleGetInventory}
        />
      </div>

      <div style={styles.cardWrapper}>
        <CardProducts
          method="POST"
          title="CREAR INVENTARIO"
          endpoint="inventory"
          buttonText="Crear"
          fields={[
            {
              label: "Body (JSON)",
              name: "body",
              type: "text",
              placeholder: `{
  "productId": 1,
  "quantity": 10
}`,
              isJson: true,
            },
          ]}
          onSubmit={handleCreateInventory}
        />
      </div>

      <div style={styles.cardWrapper}>
        <CardProducts
          method="PATCH"
          title="ACTUALIZAR INVENTARIO"
          endpoint="inventory/:id"
          buttonText="Actualizar"
          fields={[
            { label: "ID", name: "id", type: "text" },
            {
              label: "Body (JSON)",
              name: "body",
              type: "text",
              placeholder: `{
  "quantity": 15
}`,
              isJson: true,
            },
          ]}
          onSubmit={handleUpdateInventory}
        />
      </div>

      <div style={styles.cardWrapper}>
        <CardProducts
          method="DELETE"
          title="ELIMINAR INVENTARIO"
          endpoint="inventory/:id"
          buttonText="Eliminar"
          fields={[{ label: "ID", name: "id", type: "text" }]}
          onSubmit={handleDeleteInventory}
        />
      </div>
    </div>
  );
};

export default Inventory;

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
