import { configureStore } from "@reduxjs/toolkit";

import { userApi } from "./api/userApi";

const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([userApi.middleware]);
  },
});

export default store;
