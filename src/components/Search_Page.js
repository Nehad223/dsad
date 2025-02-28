import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Search_Page = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // التأكد من أن التطبيق يعمل داخل Telegram Web App
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.expand(); // تمديد الواجهة ليظهر كل المحتوى

      // منع الخروج عند الضغط على زر الرجوع
      const handleBackButton = () => {
        navigate(-1);
      };

      window.Telegram.WebApp.onEvent("backButtonClicked", handleBackButton);
      window.Telegram.WebApp.enableClosingConfirmation(); // منع الإغلاق المفاجئ

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
