import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Search_Page = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // منع الخروج من التطبيق وإضافة صفحة البحث إلى السجل
    window.history.pushState(null, "", window.location.pathname);

    const handleBackButton = (event) => {
      event.preventDefault();
      
      if (window.history.length > 2) {
        navigate(-1); // يرجع للصفحة السابقة
      } else {
        console.log("محاولة الرجوع للخلف ولكن لا يوجد صفحة سابقة");
      }
    };

    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [navigate]);

  return (
    <div>
      <h1>Search Page</h1>
    </div>
  );
};

export default Search_Page;
