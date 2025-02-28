import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Search_Page = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // إضافة حالة جديدة لمنع الخروج الفوري
    window.history.pushState({ page: "search" }, "", window.location.pathname);

    const handleBackButton = () => {
      // إعادة الصفحة إلى نفس العنوان لمنع الخروج من التطبيق
      window.history.pushState({ page: "search" }, "", window.location.pathname);

      // العودة إلى الصفحة السابقة داخل التطبيق
      navigate(-1);
    };

    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [navigate]);

  return (
    <div>
      <h1>Fuck Off</h1>
    </div>
  );
};

export default Search_Page;
