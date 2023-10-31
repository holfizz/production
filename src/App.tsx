import { FC, Suspense } from "react";
import "./styles/index.scss";
import { Link, Route, Routes } from "react-router-dom";
import AboutAsyncPage from "./pages/AboutPage/AboutAsyncPage";
import MainAsyncPage from "./pages/MainPage/MainAsyncPage";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

const App: FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={() => toggleTheme()}>toggle theme</button>
      <div className={"div"}>sdasdsd sdsd</div>
      <Link to={"/about"}>about</Link>
      <Link to={"/"}>main</Link>
      <Suspense fallback={<div>...loading</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutAsyncPage />} />
          <Route path={"/"} element={<MainAsyncPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
