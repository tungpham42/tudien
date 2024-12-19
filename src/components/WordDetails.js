import React from "react";
import { Card } from "react-bootstrap";

const WordDetails = ({ wordData }) => {
  if (!wordData) return null;

  const renderMeanings = (meanings) =>
    meanings.map((meaning, index) => (
      <div key={index}>
        <h5>{meaning.partOfSpeech}</h5>
        <ul>
          {meaning.definitions.map((definition, idx) => (
            <li key={idx}>{definition.definition}</li>
          ))}
        </ul>
      </div>
    ));

  const renderPhonetics = (phonetics) =>
    phonetics.map((phonetic, index) => (
      <p key={index}>
        {phonetic.text}
        {phonetic.audio && (
          <audio controls src={phonetic.audio}>
            Your browser does not support the audio tag.
          </audio>
        )}
      </p>
    ));

  return (
    <Card className="mt-4 shadow-lg">
      <Card.Header>
        <h3>{wordData[0].word}</h3>
        {renderPhonetics(wordData[0].phonetics)}
      </Card.Header>
      <Card.Body>{renderMeanings(wordData[0].meanings)}</Card.Body>
    </Card>
  );
};

export default WordDetails;
