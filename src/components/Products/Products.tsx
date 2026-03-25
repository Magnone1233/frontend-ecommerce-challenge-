import React from "react";
import CardProducts from "../CardProducts/CardProducts";

const Products: React.FC = () => {
  const handleGetProduct = async (data: Record<string, string>) => {
    const res = await fetch(`http://localhost:3000/products/${data.id}`);
    return res.json();
  };

  const handleCreateProduct = async (data: Record<string, string>) => {
    const res = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return res.json();
  };

  return (
    <div style={styles.container}>
      <div style={styles.cardWrapper}>
        <CardProducts
          method="GET"
          title="LISTAR PRODUCTOS"
          endpoint="products"
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
          method="GET"
          title="PRODUCTO POR ID"
          endpoint="products"
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
          endpoint="products"
          buttonText="Crear Producto"
          fields={[
            {
              label: "Title",
              name: "title",
              type: "text",
              placeholder: "Mi producto",
            },
            {
              label: "Code",
              name: "code",
              type: "text",
              placeholder: "PROD-001",
            },
            {
              label: "CategoryId",
              name: "categoryId",
              type: "text",
              placeholder: "1",
            },
          ]}
          onSubmit={handleCreateProduct}
        />

        <CardProducts
          method="PUT"
          title="ACTUALIZAR PRODUCTO"
          endpoint="products/:id"
          buttonText="Actualizar"
          fields={[
            { label: "ID", name: "id", type: "text" },
            {
              label: "Body (JSON)",
              name: "body",
              type: "text",
              isJson: true,
            },
          ]}
          onSubmit={async ({ id, body }) => {
            const res = await fetch(`http://localhost:3000/products/${id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(body),
            });

            return res.json();
          }}
        />
      </div>
      <div style={styles.cardWrapper}>
        <CardProducts
          method="DELETE"
          title="ELIMINAR PRODUCTO"
          endpoint="products/:id"
          buttonText="Eliminar"
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
