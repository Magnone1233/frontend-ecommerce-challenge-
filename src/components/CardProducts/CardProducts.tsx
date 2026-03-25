import { useState } from "react";
import { ui } from "../../styles/ui";

type Field = {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  isJson?: boolean;
};

type CardProductsProps = {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  title: string;
  endpoint: string;
  fields?: Field[];
  onSubmit: (data: Record<string, any>) => Promise<any>;
  buttonText: string;
};

const CardProducts: React.FC<CardProductsProps> = ({
  method,
  title,
  endpoint,
  fields = [],
  onSubmit,
  buttonText,
}) => {
  const [form, setForm] = useState<Record<string, any>>({});
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const getMethodColor = () => {
    switch (method) {
      case "GET":
        return "#8b5cf6";
      case "POST":
        return "#00ff99";
      case "PUT":
        return "#f59e0b";
      case "DELETE":
        return "#ef4444";
      case "PATCH":
        return "#f97316";
      default:
        return "#fff";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
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
      const parsedForm = { ...form };

      fields.forEach((f) => {
        if (f.isJson && parsedForm[f.name]) {
          parsedForm[f.name] = JSON.parse(parsedForm[f.name]);
        }
      });

      const res = await onSubmit(parsedForm);
      setResponse(res);
    } catch (err: any) {
      setResponse(err?.message || "Error (JSON inválido?)");
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
            color: getMethodColor(),
          }}
        >
          {method}
        </span>
        <h3 style={{ margin: 0 }}>{title}</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <div style={ui.field}>
          <label>Endpoint</label>
          <input value={endpoint} disabled style={ui.input} />
        </div>

        {fields.map((field) => (
          <div key={field.name} style={ui.field}>
            <label>{field.label}</label>

            {field.isJson ? (
              <textarea
                name={field.name}
                placeholder={field.placeholder || `{"title": "Nuevo producto"}`}
                onChange={handleChange}
                style={{
                  ...ui.input,
                  minHeight: "100px",
                  fontFamily: "monospace",
                }}
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                onChange={handleChange}
                style={ui.input}
              />
            )}
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

export default CardProducts;
