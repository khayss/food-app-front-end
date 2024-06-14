import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import dishesReducer from "./features/dishesSlice";
import dishReducer from "./features/dishSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    dishes: dishesReducer,
    dish: dishReducer,
  },
});
