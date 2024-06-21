function FormInput({
  label,
  type,
  placeholder,
  value,
  handleChange,
  required,
  name,
}) {
  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <input
        className="input-field"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) =>
          handleChange((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
        required={required}
        name={name}
      />
    </div>
  );
}

export default FormInput;
