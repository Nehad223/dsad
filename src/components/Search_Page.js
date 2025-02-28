import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Search_page = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleBackButton = (event) => {
      event.preventDefault();
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

export default  Search_page;
