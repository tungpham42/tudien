import React, { useState } from "react";
import { InputGroup, Form, Button, Spinner } from "react-bootstrap";

const SearchBar = ({ onSearch }) => {
  const [word, setWord] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (word.trim()) {
      setIsLoading(true);
      try {
        await onSearch(word); // Assuming onSearch is a promise-based function
      } finally {
        setIsLoading(false);
      }
    }
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
        disabled={isLoading}
      />
      <Button variant="primary" onClick={handleSearch} disabled={isLoading}>
        {isLoading ? (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        ) : (
          "Look up"
        )}
      </Button>
    </InputGroup>
  );
};

export default SearchBar;
