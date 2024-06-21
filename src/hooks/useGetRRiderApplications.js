import { useState } from "react";
import { adminApi } from "../api";
import { AxiosError } from "axios";

const initialState = {
  data: null,
  error: null,
  loading: false,
};
function useGetRRiderApplications() {
  const [state, setState] = useState(initialState);
  const getRiderApplications = async () => {
    try {
      setState({ ...state, loading: true });
      const response = await adminApi.get("/pending-riders", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.data.success) {
        setState({ data: response.data.data, error: null, loading: false });
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        setState({ data: null, error: error.response.data, loading: false });
      } else {
        setState({
          data: null,
          error: new Error("could not fetch riders"),
          loading: false,
        });
      }
    }
  };
  return { state, getRiderApplications };
}

export default useGetRRiderApplications;
