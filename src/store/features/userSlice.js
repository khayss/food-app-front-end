import { AxiosError } from "axios";
import { createAppSlice } from "../createAppSlice";
import { userApi } from "../../api";

export const userSlice = createAppSlice({
  name: "user",
  initialState: {
    data: null,
    error: null,
    loading: false,
    success: false,
  },
  reducers: (create) => ({
    clearError: create.reducer((state) => {
      state.error = null;
    }),
    clearDetails: create.reducer((state) => {
      state.data = null;
      state.loading = false;
      state.success = false;
      state.error = null;
    }),
    loginUser: create.asyncThunk(
      async (userPayload, thunkApi) => {
        try {
          const response = await userApi.post("/login", userPayload, {
            withCredentials: true,
          });

          const data = response.data;
          console.log(data);
          if (data.success) {
            localStorage.setItem("userToken", response.data.userToken);
            return data;
          }
        } catch (error) {
          if (error instanceof AxiosError && error.response) {
            throw new Error(error.response.data.message);
          } else {
            throw new Error("something went wrong");
          }
        }
      },
      {
        pending: (state) => {
          state.loading = true;
          state.success = false;
        },
        rejected: (state, action) => {
          state.error = action.payload ?? action.error;
          state.loading = false;
          state.success = false;
          state.data = null;
        },
        fulfilled: (state, action) => {
          state.data = action.payload;
          state.loading = false;
          state.success = true;
          state.error = null;
        },
      }
    ),
    signupUser: create.asyncThunk(
      async (signupPayload, thunkApi) => {
        try {
          const response = await userApi.post("/signup", signupPayload, {
            withCredentials: true,
          });
          const data = response.data;
          if (data.success) {
            return data;
          }
        } catch (error) {
          if (error instanceof AxiosError && error.response) {
            throw new Error(error.response.data.message);
          } else {
            throw new Error("something went wrong");
          }
        }
      },
      {
        pending: (state) => {
          state.loading = true;
          state.success = false;
        },
        rejected: (state, action) => {
          state.error = action.payload ?? action.error;
          state.loading = false;
          state.success = false;
          state.data = null;
        },
        fulfilled: (state, action) => {
          state.data = action.payload;
          state.loading = false;
          state.success = true;
          state.error = null;
        },
      }
    ),
  }),
});

export const { loginUser, signupUser, clearDetails } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
