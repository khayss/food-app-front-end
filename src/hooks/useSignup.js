import { AxiosError } from "axios";
import { useState } from "react";

const initialState = {
  success: false,
  error: null,
  loading: false,
};

export function useSignup(api) {
  const [state, setState] = useState(initialState);

  const signup = async (payload) => {
    setState({ ...initialState, loading: true });
    try {
      const response = await api.post("/signup", payload, {
        withCredentials: true,
      });

      if (response.data.success) {
        setState({ success: true, error: null, loading: false });
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        setState({
          success: false,
          error: error.response.data,
          loading: false,
        });
      } else {
        setState({
          success: false,
          error: new Error("an unexpected error occured"),
          loading: false,
        });
      }
    }
  };
  return { state, signup };
}
