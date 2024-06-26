import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../../../hooks/useLogin";
import Form from "../../../../components/auth/Form";
import { loginFormFields } from "../../../../utils/formFields";
import { adminApi } from "../../../../api";

const initialState = {
  email: "",
  password: "",
};

function LoginAdmin() {
  const [state, setState] = useState(initialState);
  const [disableForm, setDisbleForm] = useState(false);
  const {
    state: { error, loading, success, data },
    login,
  } = useLogin(adminApi, "adminToken");

  const navigate = useNavigate();

  useEffect(() => {
    success && setState(initialState);
    const timeout1 = setTimeout(() => {
      success && navigate("/admin/dashboard");
    }, 300);
    
    return () => {
      clearTimeout(timeout1);
      
    };
  }, [success, navigate]);

  const handleSubmit = (e) => {
    setDisbleForm(true);
    e.preventDefault();

    login(state);

    success && setState(initialState);
    setDisbleForm(false);
  };
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <div className="md:w-3/4 mt-16">
          <Form
            formHeading={"Admin Login"}
            fields={loginFormFields}
            handleSubmit={handleSubmit}
            state={state}
            handleChange={setState}
            buttonText={"Login"}
            feedback={
              !loading && !success && error
                ? error?.message
                : success
                ? "login successful"
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

export default LoginAdmin;
