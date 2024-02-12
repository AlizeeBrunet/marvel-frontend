import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../pages/CharacterDetails.css";

const CharacterDetails = () => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://site--marvel-backend--htp8z88mdn8c.code.run/character/5fcf91f4d8a2480017b91454"
      )
      .then((response) => {
        setCharacter(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [characterId]);

  if (loading) return <div>Chargement des détails...</div>;
  if (error)
    return <div>Erreur lors du chargement des détails: {error.message}</div>;
  if (!character) return <div>Aucun détail trouvé pour ce personnage</div>;

  return (
    <div className="character-details">
      <h1>{character.name}</h1>
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
      />
    </div>
  );
};

export default CharacterDetails;
