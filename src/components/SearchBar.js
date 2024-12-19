import React, { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";

const SearchBar = ({ onSearch }) => {
  const [word, setWord] = useState("");

  const handleSearch = () => {
    if (word.trim()) onSearch(word);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <InputGroup className="mb-3">
      <Form.Control
        type="text"
        placeholder="Enter a word..."
        value={word}
        onChange={(e) => setWord(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button variant="primary" onClick={handleSearch}>
        Search
      </Button>
    </InputGroup>
  );
};

export default SearchBar;
