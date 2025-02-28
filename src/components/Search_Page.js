import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Search_Page = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleBackButton = () => {
      navigate("/dsad/home"); // يرجع مباشرة لصفحة الهوم
    };

    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.expand();
      window.Telegram.WebApp.BackButton.show(); // عرض زر الرجوع الخاص بتلغرام
      window.Telegram.WebApp.BackButton.onClick(handleBackButton); // تشغيل الرجوع

      return () => {
        window.Telegram.WebApp.BackButton.hide(); // إخفاء زر الرجوع عند الخروج
        window.Telegram.WebApp.BackButton.offClick(handleBackButton);
      };
    }
  }, [navigate]);

  return (
    <div>
      <h1>Fuck for samer suliman</h1>
    </div>
  );
};

export default Search_Page;
