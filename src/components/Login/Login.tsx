import React from "react";
import AuthCard from "../AuthCard/AuthCard";

const API_BASE_URL = "http://localhost:3000";

const Login: React.FC = () => {
  const handleLogin = async (data: Record<string, string>) => {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return res.json();
  };

  const handleRegister = async (data: Record<string, string>) => {
    // opcional: validar passwords
    if (data.password !== data.confirmPassword) {
      throw new Error("Las contraseñas no coinciden");
    }

    const res = await fetch(`${API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
      }),
    });

    return res.json();
  };

  return (
    <div style={styles.container}>
      <div style={styles.cardWrapper}>
        <AuthCard
          type="POST"
          title="Login"
          buttonText="Enviar"
          onSubmit={handleLogin}
          fields={[
            {
              label: "Email",
              name: "email",
              type: "email",
              placeholder: "admin@example.com",
            },
            {
              label: "Password",
              name: "password",
              type: "password",
            },
          ]}
        />
      </div>

      <div style={styles.cardWrapper}>
        <AuthCard
          type="POST"
          title="Register"
          buttonText="Crear cuenta"
          onSubmit={handleRegister}
          fields={[
            {
              label: "Nombre",
              name: "name",
              type: "text",
              placeholder: "Tu nombre",
            },
            {
              label: "Email",
              name: "email",
              type: "email",
              placeholder: "admin@example.com",
            },
            {
              label: "Password",
              name: "password",
              type: "password",
            },
            {
              label: "Confirmar Password",
              name: "confirmPassword",
              type: "password",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Login;

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
