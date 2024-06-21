import React, { useEffect, useState } from "react";
import Form from "../../../../components/auth/Form";
import { newFoodFormFields } from "../../../../utils/formFields";
import { useCreateDish } from "../../../../hooks/useCreateDish";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  category: "",
  priceInCents: "",
  images: null,
  discountPercentage: "",
  stock: "",
};

function NewDish() {
  const [state, setState] = useState(initialState);
  const {
    state: { error, loading, success },
    createDish,
  } = useCreateDish();

  const navigate = useNavigate();

  useEffect(() => {
    if (success) {
      setState(initialState);
    }
    const timeout = setTimeout(() => {
      if (success) {
        navigate("/admin/dashboard");
      }
    }, 3000);
    return () => clearTimeout(timeout);
  }, [success, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    createDish(state);
  };
  return (
    <div className="mt-12">
      <section className="my-8">
        <div>
          <Form
            formHeading={"New Dish"}
            buttonText={"Create"}
            fields={newFoodFormFields}
            state={state}
            handleChange={setState}
            handleSubmit={handleSubmit}
            customInput={[
              <FileInput
                label={"Select dish images"}
                handleChange={setState}
                value={state.images}
                multiple={true}
                accept={"image/png, image/jpg, image/jpeg"}
              />,
            ]}
            disabled={loading}
            feedback={success ? "Dish created successfully" : error}
            loading={loading}
            success={success}
          />
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </section>
      <section></section>
    </div>
  );
}

export default NewDish;

function FileInput({ label, multiple, accept, handleChange }) {
  return (
    <>
      <label className="input-label">{label}</label>
      <input
        className="input-field"
        type="file"
        name="images"
        id="images"
        multiple={multiple}
        accept={accept}
        onChange={(e) =>
          handleChange((prev) => ({
            ...prev,
            [e.target.name]: e.target.files,
          }))
        }
      />
    </>
  );
}
