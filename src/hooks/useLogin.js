import { useState } from "react";
import { AxiosError } from "axios";

const initialState = {
  success: false,
  error: null,
  loading: false,
};
export function useLogin(api, tokenName) {
  const [state, setState] = useState(initialState);

  const login = async (payload) => {
    setState({ ...initialState, loading: true });
    try {
      const response = await api.post("/login", payload, {
        withCredentials: true,
      });

      if (response.data.success) {
        localStorage.setItem(tokenName, response.data.adminToken);
        setState({ success: true, error: null, loading: false });
      }
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        setState({
          success: false,
          error: error.response.data,
          loading: false,
        });
      } else {
        setState({
          success: false,
          error: new Error("something went wrong"),
          loading: false,
        });
      }
    }
  };
  return { state, login };
}
