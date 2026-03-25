import React from "react";
import CardProducts from "../CardProducts/CardProducts";
import { getAuthHeaders } from "../Helpers/getAuthHeaders";

const API_BASE_URL = (
  process.env.REACT_APP_API_URL || "http://localhost:3000"
).replace(/\/$/, "");

const Products: React.FC = () => {
  const handleGetProduct = async (data: Record<string, string>) => {
    const res = await fetch(`${API_BASE_URL}/product/${data.id}`);
    return res.json();
  };

  const handleCreateProduct = async (data: Record<string, string>) => {
    const res = await fetch(`${API_BASE_URL}/product/create`, {
      method: "POST",
      headers: getAuthHeaders(true),
      body: JSON.stringify(data.body),
    });

    return res.json();
  };

  const handleAddProductDetails = async ({ id, body }: Record<string, any>) => {
    const res = await fetch(`${API_BASE_URL}/product/${id}/details`, {
      method: "POST",
      headers: getAuthHeaders(true),
      body: JSON.stringify(body),
    });

    return res.json();
  };

  const handleActivateProduct = async ({ id }: Record<string, string>) => {
    const res = await fetch(`${API_BASE_URL}/product/${id}/activate`, {
      method: "POST",
      headers: getAuthHeaders(),
    });

    return res.json();
  };

  const handleDeleteProduct = async ({ id }: Record<string, string>) => {
    const res = await fetch(`${API_BASE_URL}/product/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });

    return res.json();
  };

  return (
    <div style={styles.container}>
      <div style={styles.cardWrapper}>
        <CardProducts
          method="GET"
          title="OBTENER PRODUCTO"
          endpoint="product/:id"
          buttonText="Obtener"
          fields={[
            {
              label: "ID",
              name: "id",
              type: "text",
              placeholder: "1",
            },
          ]}
          onSubmit={handleGetProduct}
        />
      </div>
      <div style={styles.cardWrapper}>
        <CardProducts
          method="POST"
          title="CREAR PRODUCTO"
          endpoint="product/create"
          buttonText="Crear Producto"
          fields={[
            {
              label: "Body (JSON)",
              name: "body",
              type: "text",
              placeholder: `{
  "categoryId": 1
}`,
              isJson: true,
            },
          ]}
          onSubmit={handleCreateProduct}
        />

        <CardProducts
          method="POST"
          title="AGREGAR DETALLES"
          endpoint="product/:id/details"
          buttonText="Guardar Detalles"
          fields={[
            { label: "ID", name: "id", type: "text" },
            {
              label: "Body (JSON)",
              name: "body",
              type: "text",
              placeholder: `{
  "name": "Detalle del producto"
}`,
              isJson: true,
            },
          ]}
          onSubmit={handleAddProductDetails}
        />

        <CardProducts
          method="POST"
          title="ACTIVAR PRODUCTO"
          endpoint="product/:id/activate"
          buttonText="Activar"
          fields={[
            {
              label: "ID",
              name: "id",
              type: "text",
              placeholder: "1",
            },
          ]}
          onSubmit={handleActivateProduct}
        />
      </div>
      <div style={styles.cardWrapper}>
        <CardProducts
          method="DELETE"
          title="ELIMINAR PRODUCTO"
          endpoint="product/:id"
          buttonText="Eliminar"
          fields={[
            {
              label: "ID",
              name: "id",
              type: "text",
              placeholder: "1",
            },
          ]}
          onSubmit={handleDeleteProduct}
        />
      </div>
    </div>
  );
};

export default Products;

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
