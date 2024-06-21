import { useEffect, useState } from "react";
import Form from "../../../../components/auth/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  clearDetails,
  getUser,
  loginUser,
  selectUser,
} from "../../../../store/features/userSlice";
import { useNavigate } from "react-router-dom";
import { loginFormFields } from "../../../../utils/formFields";

const initialState = {
  email: "",
  password: "",
};

function UserLogin() {
  const [state, setState] = useState(initialState);
  const [disbleForm, setDisbleForm] = useState(false);
  const dispatch = useDispatch();
  const { loading, error, success, data } = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    success && setState(initialState);
    const timeout1 = setTimeout(() => {
      success && navigate("/dashboard");
    }, 300);
    dispatch(getUser());
    data && data.userDetails && navigate("/dashboard");

    return () => {
      clearTimeout(timeout1);
    };
  }, [success, navigate, dispatch, data]);

  const handleSubmit = (e) => {
    setDisbleForm(true);
    e.preventDefault();

    dispatch(loginUser(state));

    success && setState(initialState);
    setDisbleForm(false);
  };
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <div className="md:w-3/4 mt-16">
          <Form
            formHeading={"Login"}
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
            disabled={disbleForm}
          />
        </div>
      </div>
    </>
  );
}

export default UserLogin;
