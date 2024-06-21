import { FormEvent, useState } from "react";
import "./SearchForm.css";

// Import useNavigate hook from react-router-dom for programmatically navigating
import { useNavigate } from "react-router-dom";

interface Props {
  search: string;
}

const SearchForm = ({ search }: Props) => {
  const [searchTerm, setSearchTerm] = useState(search);

  // Hook to get the navigate function from react-router-dom
  const navigate = useNavigate();

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();

    // Programmatically navigate to the home route with the search term as a query parameter
    navigate(`/?${new URLSearchParams({ "search-term": searchTerm })}`);
  };

  return (
    <form className="SearchForm" onSubmit={submitHandler}>
      <label htmlFor="searchTerm">Search for a GIF</label>
      <div className="inputBtnBlock">
        <input
          type="text"
          name="searchTerm"
          id="searchTerm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>Search</button>
      </div>
    </form>
  );
};

export default SearchForm;
