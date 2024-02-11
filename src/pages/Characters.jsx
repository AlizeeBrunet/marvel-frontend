import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../pages/Characters.css";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://site--marvel-backend--htp8z88mdn8c.code.run/characters")
      .then((response) => {
        setCharacters(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération du Marvel:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleCharacterClick = (characterId) => {
    navigate(`/character/${characterId}`);
  };

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur lors du chargement: {error.message}</div>;

  return (
    <div className="characters-container">
      {characters.map((character) => (
        <div
          key={character.id}
          className="character-card"
          onClick={() => handleCharacterClick(character.id)}
        >
          {character.thumbnail && (
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />
          )}
          <h2>{character.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Characters;
