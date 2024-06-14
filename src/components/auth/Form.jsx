import FormInput from "./FormInput";
import { FaSpinner } from "react-icons/fa";

function Form({
  fields,
  handleSubmit,
  handleChange,
  state,
  buttonText,
  formHeading,
  feedback,
  disabled,
  loading,
  success,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="px-8 py-16 rounded-md bg-blue-50 bg-opacity-50 flex flex-col items-center justify-center w-full lg:px-24 xl:px-32"
    >
      <h3 className="w-full text-center text-2xl font-normal text-blue-900">
        {formHeading}
      </h3>
      {fields?.map((field, index) => (
        <FormInput
          key={index}
          label={field?.label}
          type={field?.type}
          placeholder={field?.placeholder}
          value={state[field?.name]}
          handleChange={handleChange}
          name={field?.name}
          required={field?.required}
        />
      ))}
      <div className="w-full pt-4 pb-2">
        <button
          type="submit"
          className={`w-full px-3 py-3 bg-blue-800 border-0 rounded-md text-zinc-200 text-lg font-normal hover:opacity-90 flex items-center justify-center ${
            loading && "opacity-70"
          }`}
          disabled={disabled}
        >
          {loading ? <FaSpinner className="animate-spin" /> : buttonText}
        </button>

        {feedback && (
          <p
            className={`${
              success ? "text-blue-600" : "text-red-700"
            } w-full text-center py-1 mt-2 px-3`}
          >
            {feedback}
          </p>
        )}
      </div>
    </form>
  );
}

export default Form;
