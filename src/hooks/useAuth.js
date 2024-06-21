import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, selectUser } from "../store/features/userSlice";
import { useNavigate } from "react-router-dom";

function useAuth(redirect = "/login") {
  const [state, setState] = useState(false);
  const dispatch = useDispatch();
  const { data } = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUser());

    if (!data?.success || !data?.userDetails) {
      navigate(redirect);
    }

    setState(true);
  }, [dispatch, navigate, data, redirect]);
  return state;
}

export default useAuth;
