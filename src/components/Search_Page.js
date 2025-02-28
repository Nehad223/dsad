import { useLocation } from "react-router-dom";

const Search_Page = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query");

  return (
    <div>
      <h2> {searchQuery}</h2>
      {/* هنا تضع الكود لجلب وعرض النتائج بناءً على searchQuery */}
    </div>
  );
};

export default Search_Page;
