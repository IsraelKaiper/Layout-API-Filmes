import React, { useState } from "react";
import { FormControl, Button } from "react-bootstrap";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="form-inline">
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button variant="outline-success" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
