import { useState } from "react";
import { ui } from "../../styles/ui";

type Field = {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
};

type AuthCardProps = {
  title: string;
  fields: Field[];
  onSubmit: (data: Record<string, string>) => Promise<any> | any;
  buttonText: string;
  type?: "POST";
};

const AuthCard: React.FC<AuthCardProps> = ({
  title,
  fields,
  onSubmit,
  buttonText,
  type = "LOGIN",
}) => {
  const [form, setForm] = useState<Record<string, string>>({});
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);

    try {
      const res = await onSubmit(form);
      setResponse(res);
    } catch (err: any) {
      setResponse(err?.message || "Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={ui.card}>
      <div style={ui.header}>
        <span
          style={{
            ...ui.badge,
            color: type === "LOGIN" ? "#8b5cf6" : "#00ff99",
          }}
        >
          {type}
        </span>
        <h3 style={{ margin: 0 }}>{title}</h3>
      </div>

      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.name} style={ui.field}>
            <label>{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              onChange={handleChange}
              style={ui.input}
            />
          </div>
        ))}

        <button type="submit" style={ui.button}>
          {loading ? "Cargando..." : buttonText}
        </button>
      </form>

      <div style={ui.responseBox}>
        {response ? (
          <pre style={ui.responseText}>{JSON.stringify(response, null, 2)}</pre>
        ) : (
          <span style={{ opacity: 0.5 }}>Esperando...</span>
        )}
      </div>
    </div>
  );
};

export default AuthCard;
