import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Search_Page = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.history.pushState(null, "", window.location.pathname);

    const handleBackButton = () => {
      navigate(-1); 
    };

    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [navigate]);

  return (
    <div>
      <h1> search page</h1>
    </div>
  );
};

export default Search_Page;
