import { createAppSlice } from "../createAppSlice";
import { generalApi } from "../../api";

export const dishesSlice = createAppSlice({
  name: "dishes",
  initialState: {
    data: null,
    error: null,
    loading: false,
  },
  reducers: (create) => ({
    fetchDishes: create.asyncThunk(
      async (thunkApi) => {
        try {
          const response = await generalApi.get("/get-foods");

          return response.data;
        } catch (error) {
          throw new Error("Encountered an error fetching dishes");
        }
      },
      {
        pending: (state) => {
          state.loading = true;
          state.error = null;
          state.data = null;
        },
        rejected: (state, action) => {
          state.loading = false;
          state.error = action.payload ?? action.error;
          state.data = null;
        },
        fulfilled: (state, action) => {
          state.loading = false;
          state.error = null;
          state.data = action.payload;
        },
      }
    ),
  }),
});

export const { fetchDishes } = dishesSlice.actions;

export default dishesSlice.reducer;

export const selectDishes = (state) => state.dishes;
