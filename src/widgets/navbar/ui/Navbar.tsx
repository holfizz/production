import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import AppLink from "shared/ui/Links/AppLink";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to={"/"}>{t("main")}</AppLink>
        <AppLink to={"/about"}>{t("about")}</AppLink>
      </div>
    </div>
  );
};

export default Navbar;
