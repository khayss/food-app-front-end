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
  customInput,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="px-8 pb-16 pt-12 rounded-md bg-white flex flex-col items-center justify-center w-full lg:px-24 xl:px-32"
    >
      <h3 className="w-full text-center text-2xl font-normal text-main pb-6">
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
      {customInput?.map((input, index) => (
        <div key={index} className="input_container">
          {input}
        </div>
      ))}
      <div className="w-full pt-4 pb-2">
        <button
          type="submit"
          className={`w-full px-3 py-2 bg-main border-0 rounded-2xl text-zinc-200 text-lg font-medium hover:opacity-90 flex items-center justify-center ${
            loading && "opacity-70"
          }`}
          disabled={disabled}
        >
          {loading ? <FaSpinner className="animate-spin" /> : buttonText}
        </button>

        {feedback && (
          <p
            className={`${
              success ? "text-main" : "text-red-700"
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
