import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Search_Page = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleBackButton = () => {
      navigate("/home"); // يرجع لصفحة الهوم بشكل يدوي
    };

    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.expand();
      window.Telegram.WebApp.onEvent("backButtonClicked", handleBackButton);
      window.Telegram.WebApp.enableClosingConfirmation();

      return () => {
        window.Telegram.WebApp.offEvent("backButtonClicked", handleBackButton);
      };
    } else {
      // حل احتياطي للمتصفحات العادية
      const handlePopState = (event) => {
        event.preventDefault();
        navigate("/home"); // يرجع للصفحة الرئيسية بدلاً من -1
      };

      window.history.pushState(null, "", window.location.pathname);
      window.addEventListener("popstate", handlePopState);

      return () => {
        window.removeEventListener("popstate", handlePopState);
      };
    }
  }, [navigate]);

  return (
    <div>
      <h1>fuck off</h1>
    </div>
  );
};

export default Search_Page;
