import { useEffect, useState } from "react";
import { userApi } from "../api";

export function useGetOrders() {
  const [orders, setOrders] = useState({
    loading: false,
    error: null,
    data: null,
  });
  const getOrders = async () => {
    setOrders({ loading: true, error: null, data: null });

    try {
      const response = await userApi.get("/get-orders", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("userToken"),
        },
      });
      if (response.data?.success) {
        setOrders({
          loading: false,
          error: null,
          data: response.data.data,
        });
      }
    } catch (error) {
      setOrders({ loading: false, error, data: null });
    }
  };
  useEffect(() => {
    const controller = new AbortController();
    getOrders();
    return () => {
      controller.abort();
    };
  }, []);

  return { orders };
}
