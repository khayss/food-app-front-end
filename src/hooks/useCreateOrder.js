import { useState } from "react";
import { userApi } from "../api";

export function useCreateOrder() {
  const [state, setState] = useState({
    success: false,
    error: null,
    loading: false,
  });

  const createOrder = async (payload) => {
    setState({ loading: true, error: null, success: false });
    try {
      const response = await userApi.post("/create-order", payload, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("userToken"),
        },
      });
      if (response.data?.success) {
        setState({ loading: false, error: null, success: true });
      }
    } catch (error) {
      setState({ loading: false, error, success: false });
    }
  };

  return { state, createOrder };
}
