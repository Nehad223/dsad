import { useNavigate } from "react-router-dom";
const Go_Back_Btn = () => {
    const navigate=useNavigate();
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

}

export default Go_Back_Btn;
