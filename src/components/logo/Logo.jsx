import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./logo.scss";

import logo from "../../img/logo.svg";
import logoWhite from "../../img/logoWhite.svg";

const Logo = ({ theme }) => {
  const [displayText, setDisplayText] = useState("CarMasters");

  useEffect(() => {
    const handleResize = () => {
      setDisplayText(window.innerWidth <= 360 ? "CM" : "CarMasters");
    };

    // Устанавливаем начальное значение
    handleResize();

    // Добавляем слушатель события изменения размера окна
    window.addEventListener("resize", handleResize);

    // Очищаем слушатель события при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Link to="/" className={theme === "light" ? "logo" : "logoWhite"}>
      <div className="logo__img">
        <img src={theme === "light" ? logo : logoWhite} alt="logo" />
      </div>
      {displayText}
    </Link>
  );
};

export default Logo;
