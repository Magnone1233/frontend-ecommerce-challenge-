import React from "react";
import CardRol from "../CardRol/CardRol";

const Rol: React.FC = () => {
  const baseUrl = "http://localhost:3000/roles";

  const getRole = async ({ id }: any) => {
    const res = await fetch(`${baseUrl}/${id}`);
    return res.json();
  };

  const createRole = async ({ body }: any) => {
    const res = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return res.json();
  };

  const updateRole = async ({ id, body }: any) => {
    const res = await fetch(`${baseUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return res.json();
  };

  const deleteRole = async ({ id }: any) => {
    const res = await fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
    });

    return res.json();
  };

  return (
    <div style={styles.container}>
      <div style={styles.cardWrapper}>
        <CardRol
          method="GET"
          title="LISTAR ROLES"
          endpoint="roles/:id"
          buttonText="Obtener"
          fields={[]}
          onSubmit={getRole}
        />
      </div>

      <div style={styles.cardWrapper}>
        <CardRol
          method="GET"
          title="OBTENER ROLE POR ID"
          endpoint="roles/:id"
          buttonText="Obtener"
          fields={[{ label: "ID", name: "id", type: "text" }]}
          onSubmit={getRole}
        />
      </div>

      <div style={styles.cardWrapper}>
        <CardRol
          method="POST"
          title="CREAR ROLE"
          endpoint="roles"
          buttonText="Crear"
          fields={[
            {
              label: "Body (JSON)",
              name: "body",
              type: "text",
              isJson: true,
            },
          ]}
          onSubmit={createRole}
        />
      </div>

      <div style={styles.cardWrapper}>
        <CardRol
          method="PUT"
          title="ACTUALIZAR ROLE"
          endpoint="roles/:id"
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
          onSubmit={updateRole}
        />
      </div>

      <div style={styles.cardWrapper}>
        <CardRol
          method="DELETE"
          title="ELIMINAR ROLE"
          endpoint="roles/:id"
          buttonText="Eliminar"
          fields={[{ label: "ID", name: "id", type: "text" }]}
          onSubmit={deleteRole}
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
  },
  cardWrapper: {
    maxWidth: "400px",
    width: "100%",
    margin: "0 auto",
  },
};
