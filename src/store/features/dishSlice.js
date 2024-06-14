import { createAppSlice } from "../createAppSlice";
import { generalApi } from "../../api";
import { AxiosError } from "axios";

const initialState = {
  data: null,
  error: null,
  loading: false,
};

export const dishSlice = createAppSlice({
  name: "dish",
  initialState,
  reducers: (create) => ({
    fetchDish: create.asyncThunk(
      async (id, thunkApi) => {
        try {
          const response = await generalApi.get("/food", {
            params: {
              id,
            },
          });

          if (response.data.success) {
            return response.data;
          }
          throw new Error("ran into an error retrieving this dish");
        } catch (error) {
          if (error instanceof AxiosError) {
            throw new Error(
              error.status === 404
                ? "dish not found"
                : "ran into an error retrieving this dish"
            );
          }
          throw new Error("ran into an error retrieving this dish");
        }
      },
      {
        pending: (state) => {
          return (state = { ...initialState, loading: true });
        },
        fulfilled: (state, action) => {
          return (state = { ...initialState, data: action.payload });
        },
        rejected: (state, action) => {
          return (state = {
            ...initialState,
            error: action.payload ?? action.error,
          });
        },
      }
    ),
  }),
});
export const { fetchDish } = dishSlice.actions;

export const selectDish = (state) => state.dish;

export default dishSlice.reducer;
