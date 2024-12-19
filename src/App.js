import React, { useState } from "react";
import { Container, Alert } from "react-bootstrap";
import SearchBar from "./components/SearchBar";
import WordDetails from "./components/WordDetails";
import { fetchWordDetails } from "./api";

const App = () => {
  const [wordData, setWordData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (word) => {
    setError("");
    setWordData(null);
    try {
      const data = await fetchWordDetails(word);
      setWordData(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container className="my-5 col-md-8">
      <h1 className="text-center mb-4">English Dictionary</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <Alert variant="danger">{error}</Alert>}
      {wordData && <WordDetails wordData={wordData} />}
    </Container>
  );
};

export default App;
