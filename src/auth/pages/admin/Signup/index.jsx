import { useEffect, useState } from "react";
import Form from "../../../../components/auth/Form";

import { useNavigate } from "react-router-dom";
import { registerAdminFormFields } from "../../../../utils/formFields";
import { adminApi } from "../../../../api";
import { useSignup } from "../../../../hooks/useSignup";

const initialState = {
  email: "",
  firstname: "",
  lastname: "",

  tel: "",
  password: "",
};

function SignupAdmin() {
  const [state, setState] = useState(initialState);
  const [disableForm, setDisbleForm] = useState(false);

  const {
    state: { loading, error, success },
    signup,
  } = useSignup(adminApi);
  const navigate = useNavigate();

  useEffect(() => {
    success && setState(initialState);
    const timeout = setTimeout(() => {
      success && navigate("/admin/login");
    }, 300);
    return () => clearTimeout(timeout);
  }, [success, navigate]);

  const handleSubmit = (e) => {
    setDisbleForm(true);
    e.preventDefault();
    signup(state);
    setDisbleForm(false);
  };
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <div className="md:w-3/4 mt-16">
          <Form
            formHeading={"Admin Signup"}
            fields={registerAdminFormFields}
            handleSubmit={handleSubmit}
            state={state}
            handleChange={setState}
            buttonText={"Signup"}
            feedback={
              !loading && !success && error
                ? error?.message
                : success
                ? "signup successful"
                : ""
            }
            success={success}
            loading={loading}
            disabled={disableForm}
          />
        </div>
      </div>
    </>
  );
}

export default SignupAdmin;
