import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Search_Page = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleBackButton = () => {
      navigate(-1); 
    };

    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.expand();
      window.Telegram.WebApp.BackButton.show(); 
      window.Telegram.WebApp.BackButton.onClick(handleBackButton); 

      return () => {
        window.Telegram.WebApp.BackButton.hide();
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


