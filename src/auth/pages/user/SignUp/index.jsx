import { useEffect, useState } from "react";
import Form from "../../../../components/auth/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  signupUser,
  selectUser,
  clearDetails,
} from "../../../../store/features/userSlice";
import { useNavigate } from "react-router-dom";
import {
  registerUserFormFields,
  userRegisterFormFields,
} from "../../../../utils/formFields";

const initialState = {
  email: "",
  firstname: "",
  lastname: "",
  address: "",
  tel: "",
  password: "",
};

function SignupUser() {
  const [state, setState] = useState(initialState);
  const [disbleForm, setDisbleForm] = useState(false);
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    success && setState(initialState);
    const timeout = setTimeout(() => {
      dispatch(clearDetails());
      success && navigate("/admin/login");
    }, 300);
    return () => clearTimeout(timeout);
  }, [success, navigate, dispatch]);

  const handleSubmit = (e) => {
    setDisbleForm(true);
    e.preventDefault();

    dispatch(signupUser(state));
    setDisbleForm(false);
  };
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <div className="md:w-3/4 mt-16">
          <Form
            formHeading={"Signup"}
            fields={registerUserFormFields}
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
            disabled={disbleForm}
          />
        </div>
      </div>
    </>
  );
}

export default SignupUser;
