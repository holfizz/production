import { lazy } from "react";

const MainAsyncPage = lazy(
  () =>
    new Promise((res) => {
      // @ts-ignore
      setTimeout(() => res(import("./MainPage")), 500);
    }),
);
export default MainAsyncPage;
