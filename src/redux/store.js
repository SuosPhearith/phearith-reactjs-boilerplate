//::================================>>Core library<<================================::
//::================================================================================::

//::================================>>Third party<<=================================::
import { configureStore } from "@reduxjs/toolkit";
//::================================================================================::

//::===============================>>Custom library<<===============================::
import counterReducer from "./admin/counter/counterSlice";
//::================================================================================::

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
