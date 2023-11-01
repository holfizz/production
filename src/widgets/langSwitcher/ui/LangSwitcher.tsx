import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LangSwitcher.module.scss";

import { MdOutlineLanguage } from "react-icons/md";
import { CSSTransition } from "react-transition-group";
import Button from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { i18n } = useTranslation();

  return (
    <Button
      onClick={() => i18n.changeLanguage(i18n.language === "en" ? "ru" : "en")}
      className={classNames(cls.LangSwitcher, {}, [className])}
    >
      <div className={cls.changeLang}>
        <CSSTransition
          in={i18n.language === "ru"}
          timeout={400}
          unmountOnExit
          classNames={{
            enter: cls.langSwitchEnter,
            enterActive: cls.langSwitchEnterActive,
            exit: cls.langSwitchExit,
            exitActive: cls.langSwitchExitActive,
          }}
        >
          <MdOutlineLanguage />
        </CSSTransition>

        <CSSTransition
          in={i18n.language === "en"}
          timeout={400}
          unmountOnExit
          classNames={{
            enter: cls.langSwitchEnter,
            enterActive: cls.langSwitchEnterActive,
            exit: cls.langSwitchExit,
            exitActive: cls.langSwitchExitActive,
          }}
        >
          <MdOutlineLanguage />
        </CSSTransition>
      </div>
      {i18n.language === "en" ? "ru" : "en"}
    </Button>
  );
};

export default LangSwitcher;
