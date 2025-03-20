import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Go_Back_Btn from "./Go_Back_Btn";
const Search_Page = () => {
  const navigate = useNavigate();

  useEffect(() => {
Go_Back_Btn();
  }, [navigate]);

  return (
    <div>
      <h1>Fuck for samer suliman</h1>
    </div>
  );
};

export default Search_Page;


