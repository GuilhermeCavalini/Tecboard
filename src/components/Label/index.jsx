import "./label.estilo.css";

export function LabelDeFormulario({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="label">
      {children}
    </label>
  );
}
