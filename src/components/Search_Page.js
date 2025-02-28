import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Search_Page = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleBackButton = () => {
      navigate(-1);
    };

    if (window.Telegram && window.Telegram.WebApp) {
      // تمديد الواجهة وضبط زر الرجوع داخل Telegram Web App
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
        navigate(-1);
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
      <h1>Search Page</h1>
    </div>
  );
};

export default Search_Page;
