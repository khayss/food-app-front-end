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
    <div className="w-full py-2">
      {label && (
        <label className="w-full px-3 font-normal text-blue-900">{label}</label>
      )}
      <input
        className="w-full border-zinc-300 border-2 py-2 px-3 rounded-md focus:border-zinc-500 focus:outline-0 text-zinc-700 focus:text-zinc-900 bg-zinc-50 focus:bg-white placeholder:text-zinc-400"
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
