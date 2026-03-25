import React from "react";
import AuthCard from "../AuthCard/AuthCard";

const API_BASE_URL = (
  process.env.REACT_APP_API_URL || "http://localhost:3000"
).replace(/\/$/, "");

const Login: React.FC = () => {
  const handleLogin = async (data: Record<string, string>) => {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.isSuccess && result.data?.accessToken) {
      localStorage.setItem("accessToken", result.data.accessToken);
    }

    return result;
  };
  const handleRegister = async (data: Record<string, string>) => {
    const res = await fetch(`${API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
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
            { label: "Password", name: "password", type: "password" },
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
              label: "Email",
              name: "email",
              type: "email",
              placeholder: "admin@example.com",
            },
            { label: "Password", name: "password", type: "password" },
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
