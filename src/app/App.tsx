import { FC, Suspense } from "react";
import "./styles/index.scss";
import { Link, Route, Routes } from "react-router-dom";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";

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
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/"} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
