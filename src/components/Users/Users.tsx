import React from "react";
import CardUser from "../CardUsers/CardUsers";

const API_BASE_URL = "http://localhost:3000";

const Users: React.FC = () => {
  const getAllUsers = async () => {
    const res = await fetch(`${API_BASE_URL}/user/profile`);
    return res.json();
  };

  const getUser = async ({ id }: any) => {
    const res = await fetch(`${API_BASE_URL}/users/${id}`);
    return res.json();
  };

  const createUser = async ({ body }: any) => {
    const res = await fetch(`${API_BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    console.log("respuesta", res);
    return res.json();
  };

  const updateUser = async ({ id, body }: any) => {
    const res = await fetch(`${API_BASE_URL}/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return res.json();
  };

  const deleteUser = async ({ id }: any) => {
    const res = await fetch(`${API_BASE_URL}/users/${id}`, {
      method: "DELETE",
    });

    return res.json();
  };

  return (
    <div style={styles.container}>
      {/* GET ALL */}
      <div style={styles.cardWrapper}>
        <CardUser
          method="GET"
          title="LISTAR USERS"
          endpoint="users"
          buttonText="Listar"
          fields={[]}
          onSubmit={getAllUsers}
        />
      </div>

      {/* GET BY ID */}
      <div style={styles.cardWrapper}>
        <CardUser
          method="GET"
          title="OBTENER USER POR ID"
          endpoint="users/:id"
          buttonText="Obtener"
          fields={[{ label: "ID", name: "id", type: "text" }]}
          onSubmit={getUser}
        />
      </div>

      {/* POST */}
      <div style={styles.cardWrapper}>
        <CardUser
          method="POST"
          title="CREAR USER"
          endpoint="users"
          buttonText="Crear"
          fields={[
            {
              label: "Body (JSON)",
              name: "body",
              type: "text",
              isJson: true,
            },
          ]}
          onSubmit={createUser}
        />
      </div>

      {/* PUT */}
      <div style={styles.cardWrapper}>
        <CardUser
          method="PUT"
          title="ACTUALIZAR USER"
          endpoint="users/:id"
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
          onSubmit={updateUser}
        />
      </div>

      {/* DELETE */}
      <div style={styles.cardWrapper}>
        <CardUser
          method="DELETE"
          title="ELIMINAR USER"
          endpoint="users/:id"
          buttonText="Eliminar"
          fields={[{ label: "ID", name: "id", type: "text" }]}
          onSubmit={deleteUser}
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
  },
  cardWrapper: {
    maxWidth: "400px",
    width: "100%",
    margin: "0 auto",
  },
};
