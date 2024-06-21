import { useState } from "react";
import { AxiosError } from "axios";
import { adminApi } from "../api/index";

const initialState = {
  success: false,
  error: null,
  loading: false,
};
export function useCreateDish() {
  const [state, setState] = useState(initialState);

  const createDish = async (payload) => {
    setState({ ...initialState, loading: true });
    try {
      const response = await adminApi.post("/create-food", payload, {
        withCredentials: true,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("adminToken"),
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);

      if (response.data.success) {
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
  return { state, createDish };
}
