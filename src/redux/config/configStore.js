import { configureStore } from "@reduxjs/toolkit";
import bucketlists from "../modules/bucketlists";

const store = configureStore({
  reducer: {
    bucketlists,
  },
  // Redux Dev Tools, Development server에서만 실행되게 설정
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
